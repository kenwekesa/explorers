import React, { useState } from 'react';
import "./ClientsData.css"
import apply from "../../../images/vmainpage.jpg"
const ClientsData = ({ isOpen, onClose }) => {

    if (!isOpen) return null;

  return (
    <div className="dialog-background vadate_dialog-background">
      <div className="dialog-box box_dialog-background">
        <div className='va_data_main_content'>
          <div className='va_data_main_profile'>
            <div className='client_va_data_image'>
              <img src={apply} alt='profile'/>
            </div>
            <div className='assistant_va_data_paragraph_title'>
              <p>Client’s Profile</p>
            </div>
            <div className='assistant_va_contact_data'>
              <p>Sam walima</p>
              <p>+2547823929283</p>
            </div>
            <div className='assistant_va_contact_hr'>
              <hr></hr>
            </div>
            <div className='assistant_va_contact_data'>
              <p>samwalimaromelao@gmail.com</p>
            </div>
            <div className='assistant_va_contact_hr'>
              <hr></hr>
            </div>
            <div className='assistant_va_contact_data'>
              <p>Country: Kenyan</p>
            </div>
            <div className='assistant_va_contact_hr'>
              <hr></hr>
            </div>
            <div className='assistant_va_contact_data assistant_va_contact_data_btn'>
              <div></div>
              {/* <button className='ton tin ton-tin'>Verify</button> */}
              <button className='ton tin ton-tin'>Delete client</button>
              {/* <button className='ton tin ton-tin'>Disable</button> */}
              <div></div>
            </div>
          </div>
          <div className='va_data_main_second'>
            <div className='va_data_main_document'>
              <div className='assistant_va_contact_data assistant_va_contact_data_paragraph_title'>
              <p>Organization's Details</p>
              <p></p>
            </div>
            <div className='assistant_va_contact_hr'>
              <hr></hr>
              </div>
            <div className='assistant_va_contact_data assistant_va_contact_data_paragraph_body'>
              <p>Name:</p>
              <p></p>
            </div>
            <div className='assistant_va_contact_data assistant_va_contact_data_paragraph_body'>
              <p>Industry:</p>
              <p></p>
            </div>
            {/* <div className='assistant_va_contact_data assistant_va_contact_data_paragraph_body'>
              <p>Transcripts:</p>
              <p></p>
            </div> */}
            </div>
            <div className='va_data_main_qualifiction'>
              <div className='assistant_va_contact_data assistant_va_contact_data_paragraph_title'>
              <p>Organization's services</p>
              <p></p>
            </div>
            <div className='assistant_va_contact_hr'>
              <hr></hr>
              </div>
            <div className='assistant_va_contact_data assistant_va_contact_data_paragraph_body'>
              <p>Services:</p>
              <p></p>
            </div>
            <div className='assistant_va_contact_data assistant_va_contact_data_paragraph_body'>
              <p>How heard about us:</p>
              <p></p>
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

export default ClientsData