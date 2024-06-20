import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';


const BackArrow = ({ title }) => {
  return (
    <div className="back-arrow">
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="26" height="26" rx="13" fill="#4F81D1" fillOpacity="0.2" />
        <path d="M10.3928 12.3572H18V13.6429H10.3928L13.7452 17.0909L12.8614 18L8 13L12.8614 8L13.7452 8.90909L10.3928 12.3572Z" fill="#666666" />
      </svg>
      <h1 className="study-materials">{title}</h1>
    </div>
  );
};

export default BackArrow;
