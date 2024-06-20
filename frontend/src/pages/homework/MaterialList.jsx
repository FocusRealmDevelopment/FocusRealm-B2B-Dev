import React from 'react';
import PDFIcon from "../../assets/images/pdf.png";

const MaterialList = () => {
  return (
    <div className="rounded-box-small">
      <div className="pdf-container">
        <img
          src={PDFIcon}
          alt="PDF Icon"
          style={{ width: "24px", height: "24px" }}
        />
        <h1 className="title">Chemistry In Everyday Life</h1>
      </div>
    </div>
  );
};

export default MaterialList;
