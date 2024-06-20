import React from 'react';
import FolderIcon from '../../../../assets/images/folder.png'; // Ensure the correct path to your image
import FolderOpenIcon from '../../../../assets/images/folderopen.png'; // Ensure the correct path to your image
import PDFIcon from '../../../../assets/images/pdf.png'; // Ensure the correct path to your image
import Assignment from './Assignment';
import { FaChevronUp } from 'react-icons/fa'; // Make sure you have this installed
import assignmentData from './assignmentData'; // Import the data
import useFetch from './../../../../hooks/useFetch';
const iconMap = {
  FolderIcon,
  FolderOpenIcon,
  PDFIcon,
};

const AssignmentsSection = ({ isPopupVisible, handlePopupOpen, handlePopupClose }) => {
  const { data: assignments, loading } = useFetch('/api/assignments');
  return (
    <>
      <div>
        <Assignment
          isPopupVisible={isPopupVisible}
          handlePopupOpen={handlePopupOpen}
          handlePopupClose={handlePopupClose}
        />
        {assignmentData.map(({ id, icon, title, marginLeft }) => (
          <div key={id} className="small-box">
            <div className="rounded-box-small" style={stylesAssignment.container}>
              <div className="pdf-container">
                <img
                  src={iconMap[icon]}
                  alt={`${icon} Icon`}
                  style={{ width: '24px', height: '24px' }}
                />
                <h1 className="title">{title}</h1>
                <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={stylesAssignment.svgIcon}
              >
                <path
                  d="M9 2.25C8.175 2.25 7.5 2.925 7.5 3.75C7.5 4.575 8.175 5.25 9 5.25C9.825 5.25 10.5 4.575 10.5 3.75C10.5 2.925 9.825 2.25 9 2.25ZM9 12.75C8.175 12.75 7.5 13.425 7.5 14.25C7.5 15.075 8.175 15.75 9 15.75C9.825 15.75 10.5 15.075 10.5 14.25C10.5 13.425 9.825 12.75 9 12.75ZM9 7.5C8.175 7.5 7.5 8.175 7.5 9C7.5 9.825 8.175 10.5 9 10.5C9.825 10.5 10.5 9.825 10.5 9C10.5 8.175 9.825 7.5 9 7.5Z"
                  fill="#666666"
                />
              </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
const stylesAssignment = {
  container: {
    position: "relative", // Added position: relative
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  svgIcon: {
    position: "absolute", // Added position: absolute
    right: 15, // Position the icon at the right edge of the container
  },
};

export default AssignmentsSection;
