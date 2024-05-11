import React from "react";
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
  FaSearch
} from "react-icons/fa";

import { CloseSVG } from "../../assets/images";
import { Img, Button, Input } from "../../components";
const Homework = () => {
  const [searchBarValue, setSearchBarValue] = React.useState("");
  return (
    <>
      <div className="container">
        <div className="rounded-box">
          <div className="back-arrow">
            <FaArrowLeft />
            <h1 className="study-materials ">Chemistry Study Materials</h1>
          </div>
          <div>
            <h3 className="h2">
              <span className="gray">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock,...
              </span>{" "}
              <span className="see-more">see more</span>
            </h3>
          </div>
          <div className="teacher">
            <h1>
              Teacher :<span className="see-more"> Vimala Raman</span>
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
                    <FaSearch/>
                  </div><h3>Search materials</h3>
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
                  <h2 className="centered-text">Submit Assignment</h2>
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

export default Homework;
