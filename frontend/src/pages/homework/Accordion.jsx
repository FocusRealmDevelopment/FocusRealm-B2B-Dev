import React, { useState } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="lec-arrow" onClick={toggleAccordion} style={{ cursor: "pointer" }}>
        <h1 className="lectures-home-work">{title}</h1>
        <div className="up-arrow-student-homework-1">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </div>
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </>
  );    
};

export default Accordion;
