import React, { useState } from "react";
import "./Homework.css";
import BackArrow from "./BackArrow";
import Accordion from "./Accordion";
import MaterialList from "./MaterialList";
import Assignment from "./Assignment";
import AccordionContent from "./AccordionContent";
import SummarizedModules from "./SummarizedModules";
import AssignmentsSection from "./AssignmentsSection";
import AdditionalAssignments from "./AdditionalAssignments";
import RightSideBar from "./RightSideBar";
import {
  FaArrowLeft,
  FaFilePdf,
  FaFolder,
  FaFileExcel,
  FaFileImage,
  FaFileWord,
  FaLink,
  FaFolderOpen,
  FaArrowRight,
  FaChevronUp,
  FaChevronDown,
  FaSearch,
} from "react-icons/fa";
import PDFIcon from "../../assets/images/pdf.png";
import FolderIcon from "../../assets/images/folder.png";
import FolderOpenIcon from "../../assets/images/folderopen.png";
import LinkIcon from "../../assets/images/link.png";
import ExcelIcon from "../../assets/images/excel.png";
import JPEGIcon from "../../assets/images/jpeg.png";
import DOCIcon from "../../assets/images/doc.png";
import JPGIcon from "../../assets/images/jpg.png";
const Homework = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handlePopupOpen = () => {
    setIsPopupVisible(true);
  };

  const handlePopupClose = () => {
    setIsPopupVisible(false);
  };

  return (
    <>
      <div className="container">
        <div className="rounded-box">
          <BackArrow />
          <div>
            <h3 className="h2">
              <span className="gray-student-homework">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock,...
              </span>
              <span className="see-more-student-homework">see more</span>
            </h3>
          </div>
          <div className="teacher">
            <h1 style={{ fontSize: "12px" }}>
              Teacher :<span className="see-more-vimala"> Vimala Raman</span>
            </h1>
          </div>
        </div>
        <div className="container">
          <div className="teachermaterial">
            <div className="teacher-material">Materials</div>
            <div className="blue-second-box-new">442 Materials</div>

            <div className="round-box-search-student-homework">
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
              <div className="text-search-materials">Search materials</div>
            </div>
          </div>
          
        </div>
        <Accordion title="Lectures">
            <MaterialList />
          </Accordion>
        <Accordion title={<h1 className="sub-title-here-text">Sub title here</h1>}>
          <AccordionContent />
        </Accordion>
        
        <Accordion title="Summarized Modules">
        <SummarizedModules />
        </Accordion>
        
        <Accordion title="Assignments">
        <AssignmentsSection
          isPopupVisible={isPopupVisible}
          handlePopupOpen={handlePopupOpen}
          handlePopupClose={handlePopupClose}
        />
        </Accordion>
        
        
        <Accordion title={<h1 className="sub-title-here-text">Sub title here</h1>}>
        <AdditionalAssignments />
        </Accordion>
       
      </div>
    </>
  );
};

export default Homework;
