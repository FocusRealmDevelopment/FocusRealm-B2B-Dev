import React from 'react';
import PDFIcon from '../../assets/images/pdf.png';
import RightSideBar from './RightSideBar';
import { assignmentsdata } from './data.jsx';

const Assignment = ({ isPopupVisible, handlePopupOpen, handlePopupClose }) => {
  return (
    <>
      {assignmentsdata.map((assignment, index) => (
        <div className="small-box" key={index}>
          <div className="rounded-box-small">
            <div className="pdf-container">
              <img
                src={PDFIcon}
                alt="PDF Icon"
                style={{ width: '24px', height: '24px' }}
              />
              <h1 className="title">{assignment.title}</h1>
              {assignment.daysLeft && (
                <div className="rounded-box-small-new-student-homework-3-days">
                  <h2 className="centered-text-student-homework-3-days">{assignment.daysLeft}</h2>
                </div>
              )}
              {assignment.submitText && (
                <div
                  className="rounded-box-small-new-submit-student-homework"
                  onClick={handlePopupOpen}
                >
                  <h2 className="centered-text-student-homework-submit">{assignment.submitText}</h2>
                  <div className="arrow">
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.33545 2.49162L1.31495 7.51213L0.48999 6.68718L5.5105 1.66667H1.08547V0.5H7.50212V6.91667H6.33545V2.49162Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              )}
              <RightSideBar trigger={isPopupVisible} handleClose={handlePopupClose} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Assignment;
