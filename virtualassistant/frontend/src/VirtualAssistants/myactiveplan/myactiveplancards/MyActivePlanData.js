import React, { useState } from 'react';
import "./MyActivePlanData.css"
import apply from "../../../images/vaco.jpg"


const MyActivePlanData = ({ isOpen, onClose }) => {

    if (!isOpen) return null;

  return (
    <div className="dialog-background vadate_dialog-background">
      <div className="dialog-box box_dialog-background">
        <div className='mynewplan_va_data_main_content'>
          <div className='mynewplan_va_data_main_profile'>
            {/* <div className='email_va_data_image'>
              <img src={apply} alt='profile'/>
            </div> */}
            <div className='mynewplan_va_data_paragraph_title'>
              <p>Role Details</p>
            </div>
            <div className='mynewplan_va_contact_hr'>
              <hr></hr>
            </div>
            <div className='mynewplan_va_contact_data'>
              <p>Service:</p>
              <p>Registration</p>
            </div>
            <div className='mynewplan_va_contact_hr'>
              <hr></hr>
            </div>
            <div className='mynewplan_va_contact_data'>
              <p>Plan:</p>
              <p>Professional</p>
            </div>
            <div className='mynewplan_va_contact_hr'>
              <hr></hr>
            </div>
            <div className='mynewplan_va_contact_data'>
              <p>Period:</p>
              <p>3years</p>
            </div>
            <div className='mynewplan_va_contact_hr'>
              <hr></hr>
            </div>
            <div className='mynewplan_va_contact_data'>
              <p>Role Title</p>
              <p>VA assistant</p>
            </div>
            <div className='mynewplan_va_contact_hr'>
              <hr></hr>
            </div>
            <div className='mynewplan_va_contact_data'>
              <p>Time Zone:</p>
              <p>8.92Est</p>
            </div>
            <div className='mynewplan_va_contact_hr'>
              <hr></hr>
            </div>
             <div className='mynewplan_va_contact_data'>
              <p>Cost:</p>
              <p>$ 9,09293</p>
            </div>
            <div className='mynewplan_va_contact_data assistant_va_contact_data_btn'>
              <div></div>
              {/* <button className='ton tin ton-tin'>Verify</button> */}
              {/* <button className='ton tin ton-tin'>Delete client</button> */}
              {/* <button className='ton tin ton-tin'>Disable</button> */}
              <div></div>
            </div>
          </div>
          <div className='mynewplan_va_data_main_second'>
            <div className='mynewplan_va_data_main_document'>
              <div className='mynewplan_va_contact_data mynewplan_va_contact_data_paragraph_title'>
              <p>Role requirements</p>
              <p></p>
            </div>
            <div className='assistant_va_contact_hr'>
              <hr></hr>
              </div>
            <div className='mynewplan_va_contact_data mynewplan_va_contact_data_paragraph_body'>
              <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                  The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                  
                  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

             The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                </p>
            </div>
            {/* <div className='email_va_contact_data email_va_contact_data_paragraph_body'>
              <p>Industry:</p>
              <p></p>
            </div> */}
              <div className='mynewplan_va_contact_data mynewplan_va_contact_data_btn'>
              <div></div>
              {/* <button className='ton tin ton-tin'>Verify</button> */}
              {/* <button className='ton tin ton-tin'>Take Role</button> */}
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

export default MyActivePlanData