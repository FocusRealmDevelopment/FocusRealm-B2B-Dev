import React, { useState } from "react";
import "./Homework.css";
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
import { CloseSVG } from "../../assets/images";
import { Img, Button, Input } from "../../components";
import SubmitPopup from "./SubmitPopup";
const Homework = () => {
  const [searchBarValue, setSearchBarValue] = React.useState("");
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
          <div className="back-arrow">
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="26"
                height="26"
                rx="13"
                fill="#4F81D1"
                fill-opacity="0.2"
              />
              <path
                d="M10.3928 12.3572H18V13.6429H10.3928L13.7452 17.0909L12.8614 18L8 13L12.8614 8L13.7452 8.90909L10.3928 12.3572Z"
                fill="#666666"
              />
            </svg>

            <div className="study-materials-student-homework ">Chemistry Study Materials</div>
          </div>
          <div>
            <h3 className="h2">
              <span className="gray-student-homework">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock,...
              </span>{" "}
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
            <div className="blue-second-box">442 Materials</div>
            <div className="material-search-box-student-homework">
              <div className="search-box-student-homework">
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
                <div className="text-search-student-homework">
                  Search materials
                </div>
              </div>
            </div>
          </div>
          <div className="lec-arrow">
            <h1 className="lectures-home-work">Lectures</h1>
            <div className="up-arrow">
              <FaChevronUp />
            </div>
          </div>
        </div>
        <div className="rounded-box-small">
          <div className="pdf-container">
            <img src={PDFIcon} alt="PDF Icon" />
            <h1 className="title">Chemistry In Everyday Life</h1>
          </div>
        </div>
        <div className="lec-arrow">
          <h1 className="sub-title">Sub title here</h1>
          <div className="up-arrow-1">
            <FaChevronUp />
          </div>
        </div>
        <div>
          <div className="rounded-box-small">
            <div className="pdf-container">
              <img src={FolderIcon} alt="PDF Icon" />
              <h1 className="title">Organic Chemistry All Materials</h1>
            </div>
          </div>
          <div className="small-box">
            <div className="rounded-box-small">
              <div className="pdf-container">
                <img
                  src={FolderOpenIcon}
                  alt="PDF Icon"
                  style={{ width: "40px", height: "40px" }}
                />

                <h1 className="title">Thermo Chemistry - Revision 1</h1>
              </div>
            </div>
          </div>
          <div className="small-box">
            <div className="rounded-box-small">
              <div className="pdf-container">
                <img
                  src={LinkIcon}
                  alt="PDF Icon"
                  style={{ width: "40px", height: "40px" }}
                />
                <h1 className="title">Introduction to Thermo Chemistry - 1</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="lec-arrow">
          <h1 className="sub-title">Summarized Modules</h1>
          <div className="up-arrow-2">
            <FaChevronUp />
          </div>
        </div>
        <div>
          <div className="small-box">
            <div className="rounded-box-small">
              <div className="pdf-container">
                <img
                  src={ExcelIcon}
                  alt="PDF Icon"
                  style={{ width: "40px", height: "40px" }}
                />
                <h1 className="title">Introduction</h1>
              </div>
            </div>
          </div>
          <div className="small-box">
            <div className="rounded-box-small">
              <div className="pdf-container">
                <img
                  src={JPEGIcon}
                  alt="PDF Icon"
                  style={{ width: "40px", height: "40px" }}
                />
                <h1 className="title">Isochoric Process</h1>
              </div>
            </div>
          </div>
          <div className="small-box">
            <div className="rounded-box-small">
              <div className="pdf-container">
                <img
                  src={DOCIcon}
                  alt="PDF Icon"
                  style={{ width: "40px", height: "40px" }}
                />
                <h1 className="title">Internal Energy</h1>
              </div>
            </div>
          </div>
          <div className="small-box">
            <div className="rounded-box-small">
              <div className="pdf-container">
                <img
                  src={JPGIcon}
                  alt="PDF Icon"
                  style={{ width: "40px", height: "40px" }}
                />
                <h1 className="title">
                  Mathematical Expression Of First Law Enthalpy Of A System{" "}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="lec-arrow">
          <h1 className="sub-title">Assignments</h1>
          <div className="up-arrow-3">
            <FaChevronUp />
          </div>
        </div>
        <div>
          <div className="small-box">
            <div className="rounded-box-small">
              <div className="pdf-container">
                <img src={PDFIcon} alt="PDF Icon" />
                <h1 className="title">Assignment on Chemistry 1</h1>
                <div className="rounded-box-small-new-student-homework">
                  <h2 className="centered-text-student-homework">
                    3 days left
                  </h2>
                </div>
                <div
                  className="rounded-box-small-new-submit-student-homework"
                  onClick={handlePopupOpen}
                >
                  <h2 className="centered-text-student-homework">
                    Submit Assignment
                  </h2>
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
                <SubmitPopup trigger={isPopupVisible} handleClose={handlePopupClose}>
                  <h3>My PopUp</h3>
                </SubmitPopup>
              </div>
            </div>
          </div>
          <div className="small-box">
            <div className="rounded-box-small">
              <div className="pdf-container">
                <img src={FolderIcon} alt="PDF Icon" />
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
                  style={{ width: "40px", height: "40px" }}
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
                <img src={PDFIcon} alt="PDF Icon" />
                <h1 className="title">Assignement on Chemistry 2</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="lec-arrow">
          <h1 className="sub-title">Sub title here</h1>
          <div className="up-arrow-3">
            <FaChevronUp />
          </div>
        </div>
        <div>
          <div className="small-box">
            <div className="rounded-box-small">
              <div className="pdf-container">
                <img src={PDFIcon} alt="PDF Icon" />
                <h1 className="title">Assignement on Chemistry 3</h1>
              </div>
            </div>
          </div>
          <div className="small-box">
            <div className="rounded-box-small">
              <div className="pdf-container">
                <img src={PDFIcon} alt="PDF Icon" />
                <h1 className="title">Assignement on Chemistry 4</h1>
              </div>
            </div>
          </div>
          <div className="small-box">
            <div className="rounded-box-small">
              <div className="pdf-container">
                <img src={PDFIcon} alt="PDF Icon" />
                <h1 className="title">Assignement on Chemistry 5</h1>
              </div>
            </div>
          </div>
          <div className="small-box">
            <div className="rounded-box-small">
              <div className="pdf-container">
                <img src={PDFIcon} alt="PDF Icon" />
                <h1 className="title">Assignement on Chemistry 6</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homework;
