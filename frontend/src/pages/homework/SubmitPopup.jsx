import React from 'react';
import './SubmitPopup.css';

const SubmitPopup = (props) => {
  return (props.trigger) ? (
    <>
      <div className="popup-background" onClick={props.handleClose}></div>
      <div className='popup'>
        <div className='popup-inner'>
          <button className='close-btn' onClick={props.handleClose}>close</button>
          {props.children}
        </div>
      </div>
    </>
  ) : null;
}

export default SubmitPopup;
