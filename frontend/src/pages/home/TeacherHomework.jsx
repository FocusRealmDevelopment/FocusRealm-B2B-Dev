import React from "react";
import "./TeacherHomework.css";
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
  FaPlus,
} from "react-icons/fa";

import { CloseSVG } from "../../assets/images";
import { Img, Button, Input } from "../../components";
import pdfIcon from "../../assets/images/pdf.png";
const TeacherHomework = () => {
  const [searchBarValue, setSearchBarValue] = React.useState("");
  return (
    <>
      <div className="container">
        <div className="rounded-box-teacher">
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

            <div style={{ padding: "5px" }}>
              <img src={pdfIcon} alt="PDF Icon" />
            </div>

            <h1 className="study-materials ">Assignment on Chemistry 1</h1>
          </div>

          <div className="teacher">
            <h1>
              Class: <span className="see-more">10 B</span>{" "}
              <span className="subject">Subject:</span>
              <span className="see-more">Chemistry</span>
              <div className="container">
                <div className="days-left">3 days left</div>
                <div className="rounded-box-small-new-blue">
                  <h3>442 Submissions</h3>
                </div>
              </div>
            </h1>
          </div>
        </div>
        <div className="container">
          <div className="materials">
            <h1 className="study-materials">Submissions</h1>
          </div>
          <div className="search">
            <div className="lens">
              <FaSearch />
            </div>

            <h3 className="search-materials">Search students</h3>
          </div>
          <div className="lec-arrow">
            <h1 className="lectures">Lectures</h1>
            <div className="up-arrow">
              <FaChevronUp />
            </div>
          </div>
        </div>
        <div className="rounded-box-small">
          <div className="pdf-container">
            <FaFilePdf />
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
              <FaFolder color="blue" />
              <h1 className="title">Organic Chemistry All Materials</h1>
            </div>
          </div>
          <div className="small-box">
            <div className="rounded-box-small">
              <div className="pdf-container">
                <FaFolderOpen color="blue" />
                <h1 className="title">Thermo Chemistry - Revision 1</h1>
              </div>
            </div>
          </div>
          <div className="small-box">
            <div className="rounded-box-small">
              <div className="pdf-container">
                <FaLink />
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
                <FaFileExcel color="green" />
                <h1 className="title">Introduction</h1>
              </div>
            </div>
          </div>
          <div className="small-box">
            <div className="rounded-box-small">
              <div className="pdf-container">
                <FaFileImage />
                <h1 className="title">Isochoric Process</h1>
              </div>
            </div>
          </div>
          <div className="small-box">
            <div className="rounded-box-small">
              <div className="pdf-container">
                <FaFileWord />
                <h1 className="title">Internal Energy</h1>
              </div>
            </div>
          </div>
          <div className="small-box">
            <div className="rounded-box-small">
              <div className="pdf-container">
                <FaFileImage />
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
                <FaFilePdf />
                <h1 className="title">Assignment on Chemistry 1</h1>
                <div className="rounded-box-small-new">
                  <h2 className="centered-text">3 days left</h2>
                </div>
                <div className="rounded-box-small-new-submit">
                  <h2 className="centered-text">Grade Assignment</h2>
                  <div className="arrow">
                    <FaArrowRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="small-box">
            <div className="rounded-box-small">
              <div className="pdf-container">
                <FaFolder color="blue" />
                <h1 className="title">Thermodynamics-All Assignments</h1>
              </div>
            </div>
          </div>
          <div className="small-box">
            <div className="rounded-box-small">
              <div className="pdf-container">
                <FaFolderOpen color="blue" />
                <h1 className="title">
                  Chemistry In Everyday Life-All Assignments
                </h1>
              </div>
            </div>
          </div>
          <div className="small-box">
            <div className="rounded-box-small">
              <div className="pdf-container">
                <FaFilePdf />
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
                <FaFileImage />
                <h1 className="title">Assignement on Chemistry 3</h1>
              </div>
            </div>
          </div>
          <div className="small-box">
            <div className="rounded-box-small">
              <div className="pdf-container">
                <FaFileImage />
                <h1 className="title">Assignement on Chemistry 4</h1>
              </div>
            </div>
          </div>
          <div className="small-box">
            <div className="rounded-box-small">
              <div className="pdf-container">
                <FaFileImage />
                <h1 className="title">Assignement on Chemistry 5</h1>
              </div>
            </div>
          </div>
          <div className="small-box">
            <div className="rounded-box-small">
              <div className="pdf-container">
                <FaFileImage />
                <h1 className="title">Assignement on Chemistry 6</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeacherHomework;
