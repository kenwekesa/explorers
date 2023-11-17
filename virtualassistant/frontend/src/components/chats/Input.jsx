import {React, useState, useContext} from 'react'
import { AuthContext } from '../../contextr/AuthContext'

import { AttachFileOutlined } from '@mui/icons-material'
import { ImageOutlined } from '@mui/icons-material'
import { sendMessage } from '../../services/api/DataApi'
import { ChatContext } from '../../contextr/ChatsContext'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { storage } from '../../firebase/firebase'





function Input() {

  const [message, setMessage] = useState("")
  const {state} = useContext(AuthContext)
  const [file, setFile] = useState(null);



  const [chatfiles, setChatFiles] = useState([])

  const {data} = useContext(ChatContext)

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFile(event.target.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

 
  const handleSend = async () =>
  {
     try {

//---------------------------------------------------FILE UPLOAD-----------------------------------------------------

const chat_uploadPromises = chatfiles.map((file) => {
  const file_name = file.name;

  const chat_storageRef = ref(storage, `chatFiles/${file_name}`);
  console.log(file, file.name);
  const uploadTask = uploadBytesResumable(chat_storageRef, file,  {
    
    contentDisposition: `attachment; filename="${file.name}"`,
  });

  return new Promise((resolve, reject) => {
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        //setMessage(`File upload is  ${progress}  % done`);
        switch (snapshot.state) {
          case "paused":
            console.log("Upload paused");
            break;
          case "running":
            console.log("Upload running", progress);
            break;
          default:
            break;
        }
      },
      (error) => {
        console.log(error);
        reject(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref)
          .then((downloadedURL) => {
            // you keep the uploaded image URL
            resolve({ name: file.name, url: downloadedURL });
          })
          .catch((error) => reject(error));
      }
    );
  });
});

try {
  const chatUploadedFiles = await Promise.all(chat_uploadPromises);

  // Update user document in Firestore

  //const user_query = query(usersRef, where("user_id", "==", state.user.uid));

  const chat_files_data = chatUploadedFiles.reduce((acc, file) => {
    acc[file.name] = file.url;
    return acc;
  }, {});
  
  sendMessage({"message":message, "currentUserId":state.user.uid,"otherUserId":data.other_user.user_id,"chatFiles":chat_files_data})
  
  .then(()=>
  {
    setMessage('')

})

   
    
  
} catch (error) {
  console.log("An error occurred:", error);
}
//---------------------------------------------------FILE UPLOAD-----------------------------------------------------








      
     } catch (error) {
      console.log(error)
     }
  }

  return (
    <div className='chat_input_parent'>
          {chatfiles? <div className="selected_files">{chatfiles.map((file) => (<div className='selected_file'>{file.name}</div>)
            )}</div>: " "}
    <div className='chat_input'>

         <textarea className='text_input' value={message} type='text' placeholder='Type message here...' onChange={e=>setMessage(e.target.value)}/>
        
         <div className="send">
          
          
          <input type='file' style={{display:"none"}} id='file' multiple onChange={(e) => setChatFiles(Array.prototype.slice.call(e.target.files))}/>

          <label htmlFor='file'>
            <AttachFileOutlined className='attach'/>
          </label>
          <button onClick={handleSend}>Send</button>
         </div>
   </div>
    </div>
  )
}

export default Input