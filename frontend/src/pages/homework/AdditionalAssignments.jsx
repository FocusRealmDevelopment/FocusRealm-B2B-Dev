import React from 'react';
import PDFIcon from '../../assets/images/pdf.png'; // Ensure the correct path to your image

const AdditionalAssignments = () => {
  const assignments = [
    "Assignement on Chemistry 3",
    "Assignement on Chemistry 4",
    "Assignement on Chemistry 5",
    "Assignement on Chemistry 6"
  ];

  return (
    <div>
      {assignments.map((assignment, index) => (
        <div className="small-box" key={index}>
          <div className="rounded-box-small">
            <div className="pdf-container">
              <img
                src={PDFIcon}
                alt="PDF Icon"
                style={{ width: "24px", height: "24px" }}
              />
              <h1 className="title">{assignment}</h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdditionalAssignments;
