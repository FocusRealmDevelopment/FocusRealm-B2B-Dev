// SummarizedModules.js
import React from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import moduleData from "./moduleData";

const SummarizedModules = () => {
  return (
    <>
      <div>
        {moduleData.map((module, index) => (
          <div className="small-box" key={index}>
            <div className="rounded-box-small" style={stylesSum.container}>
              <div className="pdf-container">
                <img
                  src={module.icon}
                  alt={`${module.title} Icon`}
                  style={{ width: "24px", height: "24px" }}
                />
                <h1 className="title">{module.title}</h1>
                <svg
                  width="4"
                  height="14"
                  viewBox="0 0 4 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={stylesSum.svgIcon}
                >
                  <path
                    d="M2 0.25C1.175 0.25 0.5 0.925 0.5 1.75C0.5 2.575 1.175 3.25 2 3.25C2.825 3.25 3.5 2.575 3.5 1.75C3.5 0.925 2.825 0.25 2 0.25ZM2 10.75C1.175 10.75 0.5 11.425 0.5 12.25C0.5 13.075 1.175 13.75 2 13.75C2.825 13.75 3.5 13.075 3.5 12.25C3.5 11.425 2.825 10.75 2 10.75ZM2 5.5C1.175 5.5 0.5 6.175 0.5 7C0.5 7.825 1.175 8.5 2 8.5C2.825 8.5 3.5 7.825 3.5 7C3.5 6.175 2.825 5.5 2 5.5Z"
                    fill="#666666"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
        <div className="small-box">
          <div className="rounded-box-small-teacher-add-item">
            <div className="pdf-container">
              <svg
                width="28"
                height="26"
                viewBox="0 0 28 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 13C0 5.8203 5.8203 0 13 0H15C22.1797 0 28 5.8203 28 13C28 20.1797 22.1797 26 15 26H13C5.8203 26 0 20.1797 0 13Z"
                  fill="#4F81D1"
                  fill-opacity="0.2"
                />
                <path
                  d="M13.4286 12.4286V9H14.5714V12.4286H18V13.5714H14.5714V17H13.4286V13.5714H10V12.4286H13.4286Z"
                  fill="#0148B7"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="sub-title-add-teacher">
          <svg
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.42857 3.42857V0H4.57143V3.42857H8V4.57143H4.57143V8H3.42857V4.57143H0V3.42857H3.42857Z"
              fill="#0148B7"
            />
          </svg>
          <div className="sub-title-add-teacher-text">Sub Title</div>
        </div>
      </div>
    </>
  );
};

const stylesSum = {
  container: {
    position: "relative", // Added position: relative
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  svgIcon: {
    position: "absolute", // Added position: absolute
    right: 20, // Position the icon at the right edge of the container
  },
};
export default SummarizedModules;
