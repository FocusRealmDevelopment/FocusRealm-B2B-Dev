import React from "react";
import "./hometeacher.css";
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
const HomeTeacher = () => {
  const [searchBarValue, setSearchBarValue] = React.useState("");
  return (
    <>
      <div className="container">
        <div className="rounded-box-teacher">
          <div className="back-arrow">
            <FaArrowLeft />
            <h1 className="study-materials-teacher-home">English</h1>
          </div>

          <div className="teacher-full">
            <h1>
              Class: <span className="see-more">10 A</span>
            </h1>
          </div>
        </div>
        <div className="container">
          <div className="materials">
            <h1 className="study-materials bold">Materials</h1>
            <div className="rounded-box-small-new-blue">
              <h3>442 Materials</h3>
            </div>

            <div className="search">
              <div className="lens">
                <FaSearch />
              </div>
              <div className="container">
                <h3>Search materials</h3>
                <div className="rounded-box-small-add-new">
                  <h2 className="centered-text">Add New </h2>
                  <div className="plus">
                    <FaPlus />
                  </div>
                </div>
              </div>
            </div>
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

export default HomeTeacher;
