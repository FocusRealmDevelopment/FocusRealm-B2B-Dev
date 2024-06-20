import React, { useState } from "react";
import "./hometeacher.css";
import BackArrow from "./BackArrow";
import TeacherInfo from "./TeacherInfo";

import Accordion from "./Accordion";
import AccordionContent from "./AccordionContent";
import SummarizedModules from "./SummarizedModules";
import AssignmentSection from "./AssignmentSection";
import {
  FaFilePdf,
  FaFolder,
  FaFolderOpen,
  FaFileImage,
  FaFileExcel,
  FaFileWord,
  FaLink,
  FaArrowRight,
} from "react-icons/fa";
import MaterialListTeacher from "./MaterialListTeacher";

const HomeTeacher = () => {
  const [searchBarValue, setSearchBarValue] = useState("");
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handlePopupOpen = () => {
    setIsPopupVisible(true);
  };

  const handlePopupClose = () => {
    setIsPopupVisible(false);
  };
  return (
    <div className="container">
      <div className="rounded-box-teacher-new">
        <BackArrow title="English" />
        <TeacherInfo  className="10 A"
         />
      </div>

      <div className="teachermaterial">
        <div className="teacher-material">Materials</div>
        <div className="blue-second-box-teacher">442 Materials</div>
        <div className="material-search-box-teacher-home">
          <div className="search-teacher-home">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.08871 0C11.0017 0 14.1774 3.17574 14.1774 7.08871C14.1774 11.0017 11.0017 14.1774 7.08871 14.1774C3.17574 14.1774 0 11.0017 0 7.08871C0 3.17574 3.17574 0 7.08871 0ZM7.08871 12.6021C10.1345 12.6021 12.6021 10.1345 12.6021 7.08871C12.6021 4.04214 10.1345 1.57527 7.08871 1.57527C4.04214 1.57527 1.57527 4.04214 1.57527 7.08871C1.57527 10.1345 4.04214 12.6021 7.08871 12.6021ZM13.7718 12.6581L16 14.8855L14.8855 16L12.6581 13.7718L13.7718 12.6581Z"
                fill="#666666"
              />
            </svg>
            <div className="text-search-teacher">Search materials</div>
          </div>
        </div>
        <div className="add-new-blue">Add New +</div>
      </div>

      <Accordion title="Lectures">
        <MaterialListTeacher />
      </Accordion>
      <Accordion
        title={<h1 className="sub-title-here-text">Sub title here</h1>}
      >
        <AccordionContent />
      </Accordion>
      <Accordion title="Summarized Modules">
        <SummarizedModules />
        </Accordion>
        <Accordion title="Assignments">
        <AssignmentSection
          isPopupVisible={isPopupVisible}
          handlePopupOpen={handlePopupOpen}
          handlePopupClose={handlePopupClose}
        />
        </Accordion>
    </div>
  );
};

export default HomeTeacher;
