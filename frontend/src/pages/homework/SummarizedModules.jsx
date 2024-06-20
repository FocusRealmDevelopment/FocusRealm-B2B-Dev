import React from 'react';
import ExcelIcon from '../../assets/images/excel.png';
import JPEGIcon from '../../assets/images/jpeg.png';
import DOCIcon from '../../assets/images/doc.png';
import JPGIcon from '../../assets/images/jpg.png';
import { summarizedModulesData } from './data.jsx'; // Ensure correct import path
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const SummarizedModules = () => {
  return (
    <>
      <div>
        {summarizedModulesData.map((module, index) => (
          <div className="small-box" key={index}>
            <div className="rounded-box-small">
              <div className="pdf-container">
                <img
                  src={index === 0 ? ExcelIcon : index === 1 ? JPEGIcon : index === 2 ? DOCIcon : JPGIcon}
                  alt={index === 0 ? "Excel Icon" : index === 1 ? "JPEG Icon" : index === 2 ? "DOC Icon" : "JPG Icon"}
                  style={{ width: "24px", height: "24px", marginRight: "8px" }}
                />
                <h1 className="title">{module ? module : "Summarized Modules Data"}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SummarizedModules;
