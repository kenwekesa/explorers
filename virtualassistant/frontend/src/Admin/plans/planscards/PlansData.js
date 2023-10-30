import React, { useState } from 'react';
import "./PlansData.css"
import apply from "../../../images/vaco.jpg"
const PlansData = ({ isOpen, onClose }) => {

    if (!isOpen) return null;

  return (
    <div className="dialog-background vadate_dialog-background">
      <div className="dialog-box box_dialog-background">
        <div className='client_va_data_main_content'>
          <div className='client_va_data_main_profile'>
            {/* <div className='email_va_data_image'>
              <img src={apply} alt='profile'/>
            </div> */}
            <div className='email_va_data_paragraph_title'>
              <p>Email Details</p>
            </div>
            <div className='email_va_contact_hr'>
              <hr></hr>
            </div>
            <div className='email_va_contact_data'>
              <p>Subject:</p>
              <p>Registration</p>
            </div>
            <div className='email_va_contact_hr'>
              <hr></hr>
            </div>
            <div className='email_va_contact_data'>
              <p>Name:</p>
              <p>Alice Kole</p>
            </div>
            <div className='email_va_contact_hr'>
              <hr></hr>
            </div>
            <div className='email_va_contact_data'>
              <p>Country:</p>
              <p>Kenyan</p>
            </div>
            <div className='email_va_contact_hr'>
              <hr></hr>
            </div>
            <div className='email_va_contact_data'>
              <p>Contact</p>
              <p>+2548293929</p>
            </div>
            <div className='email_va_contact_hr'>
              <hr></hr>
            </div>
            <div className='email_va_contact_data'>
              <p>Karenmalma@gmail.com</p>
              {/* <p>Kenyan</p> */}
            </div>
            <div className='email_va_contact_hr'>
              <hr></hr>
            </div>
            <div className='email_va_contact_data assistant_va_contact_data_btn'>
              <div></div>
              {/* <button className='ton tin ton-tin'>Verify</button> */}
              {/* <button className='ton tin ton-tin'>Delete client</button> */}
              {/* <button className='ton tin ton-tin'>Disable</button> */}
              <div></div>
            </div>
          </div>
          <div className='client_va_data_main_second'>
            <div className='client_va_data_main_document'>
              <div className='email_va_contact_data email_va_contact_data_paragraph_title'>
              <p>Email content</p>
              <p></p>
            </div>
            <div className='assistant_va_contact_hr'>
              <hr></hr>
              </div>
            <div className='email_va_contact_data email_va_contact_data_paragraph_body'>
              <p>Content</p>
              <p></p>
            </div>
            {/* <div className='email_va_contact_data email_va_contact_data_paragraph_body'>
              <p>Industry:</p>
              <p></p>
            </div> */}
              <div className='email_va_contact_data assistant_va_contact_data_btn'>
              <div></div>
              {/* <button className='ton tin ton-tin'>Verify</button> */}
              <button className='ton tin ton-tin'>Reply Email</button>
              {/* <button className='ton tin ton-tin'>Disable</button> */}
              <div></div>
            </div>
            </div>
          </div>
        </div>
        <button className="close-button" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default PlansData