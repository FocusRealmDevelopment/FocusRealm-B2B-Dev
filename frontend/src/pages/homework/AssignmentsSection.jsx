import React from 'react';
import FolderIcon from '../../assets/images/folder.png'; // Ensure the correct path to your image
import FolderOpenIcon from '../../assets/images/folderopen.png'; // Ensure the correct path to your image
import PDFIcon from '../../assets/images/pdf.png'; // Ensure the correct path to your image
import Assignment from './Assignment';
import { FaChevronUp } from 'react-icons/fa'; // Make sure you have this installed
import { useOutletContext } from 'react-router-dom';

const AssignmentsSection = ({ isPopupVisible, handlePopupOpen, handlePopupClose }) => {
  const { handleSidebarOpen, handleSidebarClose, isSidebarVisible } = useOutletContext();
  return (
    <>
      
      <div>
        <Assignment
          isPopupVisible={isSidebarVisible}
          handlePopupOpen={handleSidebarOpen}
          handlePopupClose={handleSidebarClose}
        />
        <div className="small-box">
          <div className="rounded-box-small">
            <div className="pdf-container">
              <img
                src={FolderIcon}
                alt="PDF Icon"
                style={{ width: "24px", height: "24px" }}
              />
              <h1 className="title">Thermodynamics-All Assignments</h1>
            </div>
          </div>
        </div>
        <div className="small-box">
          <div className="rounded-box-small">
            <div className="pdf-container">
              <img
                src={FolderOpenIcon}
                alt="PDF Icon"
                style={{ width: "24px", height: "24px" }}
              />
              <h1 className="title">
                Chemistry In Everyday Life-All Assignments
              </h1>
            </div>
          </div>
        </div>
        <div className="small-box">
          <div className="rounded-box-small">
            <div className="pdf-container">
              <img
                src={PDFIcon}
                alt="PDF Icon"
                style={{ width: "24px", height: "24px" }}
              />
              <h1 className="title">Assignement on Chemistry 2</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AssignmentsSection;
