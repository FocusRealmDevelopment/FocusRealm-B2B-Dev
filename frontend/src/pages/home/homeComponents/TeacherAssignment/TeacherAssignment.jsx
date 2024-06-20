import React from "react";
import "./TeacherAssignment.css";

import { CloseSVG } from "../../../../assets/images";
import { Img, Button, Input } from "../../../../components";
import pdfIcon from "../../../../assets/images/pdf.png";
import proPic from "../../../../assets/images/profilePic.png";

import AssignmentViewer from "./AssignmentViewer/AssignmentViewer";

const TeacherAssignment = () => {
  return (
    <>
      <div className="container">
        <div className="rounded-box-teacher-assignment">
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

            <div style={{ padding: "5px" ,height: "40px", width: "40px"}}>
              <img src={pdfIcon} alt="PDF Icon" />
            </div>

            <h1 className="study-materials ">Assignment on Chemistry 1</h1>
          </div>

          <div className="teacher">
            <h1>
              Class: <span className="see-more-teacher-homework">10 B</span>{" "}
              <span className="subject">Subject:</span>
              <span className="see-more-teacher-homework">Chemistry</span>
            </h1>
          </div>
          <div className="container">
            <div className="inside-student-box">
              <div style={{ height: "40px", width: "40px" }}>
                <img src={proPic} alt="Student Icon" />
              </div>
              <div className="student-details-teacher-assignment">
              Amith Ram
              <div className="student-class">
                10 B<div className="sub-date">Submitted:</div>
                <div className="blue-date">Apr 28 2024</div>
                <div className="sub-date">File type:</div>
                <div className="blue-date">PDF</div>
                <div className="round-box-view-remarks">View Remarks</div>
              </div>
            </div>
            </div>
            
          </div>
        </div>
        <AssignmentViewer />
      </div>
    </>
  );
};

export default TeacherAssignment;
