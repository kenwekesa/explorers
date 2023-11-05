import React, { useState } from 'react'
import "./Signupcard.css"
import { Link } from 'react-router-dom'
import Scounntry from './selection/Scounntry'
import Sservice from './selection/Sservice'
import Shear from './selection/Shear'
import { async } from '@firebase/util'
import { database } from '../../firebase/firebase'
import { auth, db } from '../../firebase/firebase'; // Import 'auth' and 'db' from your Firebase configuration
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom'
import { storage } from '../../firebase/firebase'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { useRef } from 'react'
import attachimage from "../../images/attachimageone.png"


const Signupcard = () => {
  const [termsChecked, setTermsChecked] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    org_name: '',
    contact: '',
    location: '',
    service: '',
    about: '',
    password: '',
    match_password: '',
    degreeFile: [],
    transcriptFiles: [],
    cvFile: [],
  });

  const [error, setError] = useState(null);
  const [notification, setNotification] = useState({ message: '', isSuccess: false });
  const [showDialog, setShowDialog] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // State to track application submission
  const [selectedFiles, setSelectedFiles] = useState([]);
  const fileInputRef = useRef(null);

  const navigate = useNavigate()

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleTermsChange = () => {
    setTermsChecked(!termsChecked);
  };

  const handleLocationChange = (selectedLocation) => {
    setFormData({
      ...formData,
      location: selectedLocation,
    });
  };

  const handleServicesChange = (selectedServices) => {
    setFormData({
      ...formData,
      service: selectedServices,
    });
  };

  const handleAboutChange = (selectedAbout) => {
    setFormData({
      ...formData,
      about: selectedAbout,
    });
  };
  
const handleDegreeFileChange = (e) => {
    const degreeFile = Array.from(e.target.files);
    updateLabel(e.target, degreeFile);
    setFormData({
      ...formData,
      degreeFile,
    });
  };

  const handleTranscriptFileChange = (e) => {
    const transcriptFiles = Array.from(e.target.files);
    updateLabel(e.target, transcriptFiles);
    setFormData({
      ...formData,
      transcriptFiles,
    });
  };

  const handleCvFileChange = (e) => {
    const cvFile = Array.from(e.target.files);
    updateLabel(e.target, cvFile);
    setFormData({
      ...formData,
      cvFile,
    });
  };

  // Function to update the label text with selected file names
  const updateLabel = (input, files) => {
    const label = input.parentElement.querySelector('.file-label');
    if (files.length === 0) {
      label.textContent = 'No file chosen';
    } else if (files.length === 1) {
      label.textContent = files[0].name;
    } else {
      label.textContent = `${files.length} files selected`;
    }
  };

  const handleDialogClose = () => {
    setShowDialog(false);
     if (notification.isSuccess) {
       navigate("/login");
       window.scrollTo(0, 0);
    }
  };

  const handleRegister = async (e) => {
  e.preventDefault();

  if (formData.password !== formData.match_password) {
      setError('Passwords do not match');
      setIsSubmitting(false); // Clear the loading state
      return;
    }

    setIsSubmitting(true);

  const uploadFile = async (file, storagePath) => {
    const storageRef = ref(storage, storagePath);
    const uploadTask = uploadBytesResumable(storageRef, file);

    return new Promise((resolve, reject) => {
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // Handle progress, pause, and resume
        },
        (error) => {
          reject(error); // Handle unsuccessful uploads
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL); // Successful upload, resolve with download URL
          });
        }
      );
    });
  };

   try {
    // const degreeURL = await uploadFile(formData.degreeFile, 'certificates/degree.pdf');
     
    const degreeURL = formData.degreeFile.length > 0
    ? await Promise.all(
      formData.degreeFile.map(async (file, index) => {
        return uploadFile(file, `degrees/degree_${index}.pdf`);
      })
      ) : [];
     
    // Check if transcriptFiles is not empty before using map
    const transcriptURLs = formData.transcriptFiles.length > 0
    ? await Promise.all(
      formData.transcriptFiles.map(async (file, index) => {
        return uploadFile(file, `certificates/transcript_${index}.pdf`);
      })
      ) : [];
     

    const cvURL = formData.cvFile.length > 0
    ? await Promise.all(
      formData.cvFile.map(async (file, index) => {
        return uploadFile(file, `cvs/cv_${index}.pdf`);
      })
      ) : [];
     
    // const cvURL = await uploadFile(formData.cvFile, 'cv/cv.pdf');

    const userData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      org_name: formData.org_name,
      contact: formData.contact,
      location: formData.location,
      service: formData.service,
      about: formData.about,
      degreeURL,
      transcriptURLs,
      cvURL,
      usertype: 'va', // Set 'usertype' as 'Admin' by default
    };

    await createUserWithEmailAndPassword(auth, formData.email, formData.password);
    await addDoc(collection(db, 'clients'), userData);

    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      org_name: '',
      contact: '',
      location: '',
      service: '',
      about: '',
      password: '',
      match_password: '',
      degreeFile: [],
      transcriptFiles: [],
      cvFile: [],
    });

    setTermsChecked(false);

    setIsSubmitting(false);
     
     setNotification({
        message: `Your application has been submitted successfully, we will be in touch between 3 to 7 business days, through ${formData.email}!`,
        isSuccess: true,
      });

      setShowDialog(true);
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setError('Email already in use');
      }else if (error.code === 'auth/network-request-failed') {
        setError('Check your internet connection and try again.');
      } else if (error.code === 'auth/invalid-email') {
        setError('Incorrect email format.');
      } else {
        setError(`An error occurred: ${error.message}`);
      }
      setShowDialog(true);
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
   <div className='cardsignupone'>
      <p className='cardmainsip'>All  fields are required</p>
         <form onSubmit={handleRegister}>
            <div className='signcardcontent'>
              <p>First Name <span>(required)</span></p>
              <input type="text" name='firstName' value={formData.firstName} onChange={handleInputChange} className='signcardiinput' required/>
            </div>
            <div className='signcardcontent'>
              <p>Last Name <span>(required)</span></p>
              <input type="text" name='lastName' value={formData.lastName} onChange={handleInputChange}  className='signcardiinput' required/>
            </div>
            <div className='signcardcontent'>
              <p>Email Address <span>(required)</span></p>
              <input type="email" name='email' value={formData.email} onChange={handleInputChange}  className='signcardiinput' required/>
            </div>
            <div className='signcardcontent'>
              <p>Organization's Name <span>(required)</span></p>
              <input type="text" name='org_name' value={formData.org_name} onChange={handleInputChange}  className='signcardiinput' required/>
            </div>
            <div className='signcardcontent'>
              <p>Phone Number <span>(required)</span></p>
              <input name='contact' value={formData.contact} onChange={handleInputChange} type="number" className='signcardiinput' required/>
            </div>
          

        {/* ******************************************************************************** */}
         <div className="signcardcontent">
      <p>Degree/Diploma/Certificates (PDF) <span>(required)</span></p>
      <div className="signcardcontent_file">
        <input
          type="file"
          accept=".pdf"
          multiple
          id="degreeFiles"
          name="degreeFiles"
          onChange={handleDegreeFileChange}
          className="hidden-input" // Add a class to hide the input
          required
        />
        <label htmlFor="degreeFiles" className="file-label">
          <img src={attachimage} alt="Attach" />
          <div className="file-info">
            {formData.degreeFile.length > 0 ? (
              formData.degreeFile.map((file, index) => (
                <div key={index} className="selected-file">{file.name}</div>
              ))
            ) : (
              <div className="no-file-chosen">No file chosen</div>
            )}
          </div>
        </label>
      </div>
    </div>

    {/* Transcript File Input */}
    <div className="signcardcontent">
      <p>Transcript Documents (PDF) <span>(required)</span></p>
      <div className="signcardcontent_file">
        <input
          type="file"
          accept=".pdf"
          multiple
          id="transcriptFiles"
          name="transcriptFiles"
          onChange={handleTranscriptFileChange}
          className="hidden-input" // Add a class to hide the input
          required
        />
        <label htmlFor="transcriptFiles" className="file-label">
          <img src={attachimage} alt="Attach" />
          <div className="file-info">
            {formData.transcriptFiles.length > 0 ? (
              formData.transcriptFiles.map((file, index) => (
                <div key={index} className="selected-file">{file.name}</div>
              ))
            ) : (
              <div className="no-file-chosen">No file chosen</div>
            )}
          </div>
        </label>
      </div>
    </div>

    {/* CV File Input */}
    <div className="signcardcontent">
      <p>CVs (PDF) <span>(required)</span></p>
      <div className="signcardcontent_file">
        <input
          type="file"
          accept=".pdf"
          multiple
          id="cvFiles"
          name="cvFiles"
          onChange={handleCvFileChange}
          className="hidden-input" // Add a class to hide the input
          required
            />
          <label htmlFor="cvFiles" className="file-label">
               <img src={attachimage} alt="Attach" />
          <div className="file-info">
            {formData.cvFile.length > 0 ? (
                formData.cvFile.map((file, index) => (
                <div key={index} className="selected-file">{file.name}</div>
              ))
                ) : (
                <div className="no-file-chosen">No file chosen</div>
            )}
          </div>
        </label>
      </div>
    </div>
        {/* ******************************************************************************** */}
        
       
            <div className='signcardcontent'>
              <p>Where are you located ?<span>(required)</span></p>
              {/* <input className='signcardiinput' required/> */}
              <div>
                <Scounntry selectedLocation={formData.location}
                 onChange={handleLocationChange} />
              </div>
            </div>
            <div className='signcardcontent'>
              <p>Which Industry to operate in ? <span>(required)</span></p>
              {/* <input className='signcardiinput' required/> */}
              <div>
                  <Sservice selectedServices={formData.service}
                   onChange={handleServicesChange} />
              </div>
             </div>
        
            <div className='signcardcontent'>
              <p>How did you hear about us <span>(required)</span></p>
              {/* <input className='signcardiinput' required/> */}
              <Shear selectedAbout={formData.about} onChange={handleAboutChange}  />
            </div>
        

            <div className='signcardcontent'>
              <p>Set account password <span>(required)</span></p>
              <input type="password" name='password' value={formData.password} onChange={handleInputChange} className='signcardiinput' required/>
            </div>

            <div className='signcardcontent'>
              <p>Match account password <span>(required)</span></p>
              <input type="password" name='match_password' value={formData.match_password} onChange={handleInputChange}  className='signcardiinput' required />
              {/* <CountrySelector /> */}
            </div>
            <div className='signcardcontentir'>
              <p> <input type="checkbox" onChange={handleTermsChange} /> By checking this box I agree to the <Link>Terms</Link> and <Link>privacy policy</Link></p>
            </div>
            <button className="ton tin" type="submit" disabled={!termsChecked}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
            {isSubmitting && (
              <p style={{ color: 'green' }}>Application in progress...</p>
            )}
      </form>
       {error && (
        <p className="contact_form_paragraph_error" style={{ color: 'red' }}>
          {error}
        </p>
      )}

      <div className={`dialog ${showDialog ? 'show' : ''}`}>
        <div className="dialog-content">
          <span onClick={handleDialogClose} className="close">
            &times;
          </span>
          <p style={{ color: 'green' }}>{notification.message}</p>
        </div>
      </div>
    </div>
  )
}

export default Signupcard


{/* Degree File Input */}
        //        <div className='signcardcontent'>
        //           <p>Degree/Diploma/Certificates (PDF) <span>(required)</span></p>
        //   {/* <input type="file" accept=".pdf" name='degreeFile' onChange={(e) => setFormData({ ...formData, degreeFile: e.target.files[0] })} required /> */}
        //      <div className='signcardcontent_file'>  
        //        <input type="file" accept=".pdf" multiple name='transcriptFiles' className="signup_file-input" onChange={handleDegreeFileChange} required />
        //        <label className="file-label">No file chosen</label>
        //       </div>
        //      </div>
        
        //         <div className='signcardcontent'>
        //           <p>Transcript Documents (PDF) <span>(required)</span></p>
        //    {/* <input type="file" accept=".pdf" multiple name='transcriptFiles' onChange={(e) => setFormData({ ...formData, transcriptFiles: e.target.files })} required /> */}
        //        <div className='signcardcontent_file'> 
        //        <input type="file" accept=".pdf" multiple name='transcriptFiles' onChange={handleTranscriptFileChange} className="signup_file-input" required />
        //       <label className="file-label">No file chosen</label>
        //       </div>
        //       </div>

        //         <div className='signcardcontent'>
        //           <p>CVs (PDF) <span>(required)</span></p>
        //      {/* <input type="file" accept=".pdf" name='cvFile' onChange={(e) => setFormData({ ...formData, cvFile: e.target.files[0] })} required /> */}
        //         <div className='signcardcontent_file'> 
        //         <input type="file" accept=".pdf" className="signup_file-input" id='file-label' multiple name='cvFile' onChange={handleCvFileChange} required />
        //         <label className="file-label">No file chosen</label>
        //        </div>
        // </div>
        