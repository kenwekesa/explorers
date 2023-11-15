import React, { useState } from 'react';
import "./MyActivePlanData.css"
import apply from "../../../images/vaco.jpg"


const MyCompletePlanData = ({ isOpen, onClose, id, service, plan, period, cost, status, language, roleRequirements, roleTitle, timezone, assistants, updateStatus }) => {

    if (!isOpen) return null;

  return (
    <div className="dialog-background vadate_dialog-background">
      <div className="dialog-box box_dialog-background">
        <div className='mynewplan_va_data_main_content'>
          <div className='mynewplan_va_data_main_profile'>
            <div className="mynewplan_va_data_paragraph_title">
              <h5>Role Details</h5>
            </div>
            <div className="mynewplan_va_contact_hr">
              <hr></hr>
            </div>
            <div className="mynewplan_va_contact_data">
              <p>Service:</p>
              <p>{service}</p>
            </div>
            <div className="mynewplan_va_contact_hr">
              <hr></hr>
            </div>
            <div className="mynewplan_va_contact_data">
              <p>Plan:</p>
              <p>${plan / 2} / month</p>
            </div>
            <div className="mynewplan_va_contact_hr">
              <hr></hr>
            </div>
            <div className="mynewplan_va_contact_data">
              <p>Period:</p>
              <p>{period} months</p>
            </div>
            <div className="mynewplan_va_contact_hr">
              <hr></hr>
            </div>
            <div className="mynewplan_va_contact_data">
              <p>Role Title:</p>
              <p>{roleTitle}</p>
            </div>
            <div className="mynewplan_va_contact_hr">
              <hr></hr>
            </div>
            <div className="mynewplan_va_contact_data">
              <p>Language:</p>
              <p>{language}</p>
            </div>
            <div className="mynewplan_va_contact_hr">
              <hr></hr>
            </div>
            <div className="mynewplan_va_contact_data">
              <p>Time zone:</p>
              <p>{timezone}</p>
            </div>
            <div className="mynewplan_va_contact_hr">
              <hr></hr>
            </div>
            <div className="mynewplan_va_contact_data">
              <p>Total cost:</p>
              <p>${cost / 2}</p>
            </div>
          </div>
          <div className='mynewplan_va_data_main_second'>
            <div className='mynewplan_va_data_main_document'>
             <div className="mynewplan_va_contact_data mynewplan_va_contact_data_paragraph_title">
                <p>Role requirements</p>
              </div>
              <div className="assistant_va_contact_hr">
                <hr></hr>
              </div>
              <div className="mynewplan_va_contact_data mynewplan_va_contact_data_paragraph_body">
                <p>{roleRequirements}</p>
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

export default MyCompletePlanData