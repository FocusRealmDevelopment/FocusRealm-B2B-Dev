import React from "react";
import "./Homework.css";
import { FaArrowLeft, FaFilePdf } from "react-icons/fa";

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
            <div className="bluebox">
              <h3>449 Materials</h3>
            </div>
            <Input
              name="Search Bar"
              placeholder={`Search materials...`}
              value={searchBarValue}
              onChange={(e) => setSearchBarValue(e)}
              prefix={
                <div className="flex h-[16px] w-[16px] items-center justify-center">
                  <Img
                    src="images/img_search.svg"
                    alt="search"
                    className="h-[16px] w-[16px] cursor-pointer"
                  />
                </div>
              }
              suffix={
                searchBarValue?.length > 0 ? (
                  <CloseSVG
                    onClick={() => setSearchBarValue("")}
                    height={16}
                    width={16}
                  />
                ) : null
              }
              className="flex h-[44px] w-[41%] items-center justify-center gap-2.5 rounded-[22px] bg-white-A700 pl-[15px] pr-[35px] text-[13px] text-gray-700 md:w-full sm:pr-5"
            />
          </div>
          <div>
            <h1 className="lectures">Lectures</h1>
          </div>
        </div>
        <div className="rounded-box-small">
          <div className="pdf-container">
            <FaFilePdf />
            <h1>Chemistry In Everyday Life</h1>
          </div>
        </div>
        <div>
          <h1 className="sub-title">Sub title here</h1>
        </div>
        <div>
          <div className="rounded-box-small">
            <div className="pdf-container">
              <FaFilePdf />
              <h1>Organic Chemistry All Materials</h1>
            </div>
          </div>
          <div className="small-box">
            <div className="rounded-box-small">
              <div className="pdf-container">
                <FaFilePdf />
                <h1>Thermo Chemistry - Revision 1</h1>
              </div>
            </div>
          </div>
          <div className="small-box">
            <div className="rounded-box-small">
              <div className="pdf-container">
                <FaFilePdf />
                <h1>Introduction to Thermo Chemistry - 1</h1>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="sub-title">Summarized Modules</h1>
        </div>
        <div>
          <div className="small-box">
            <div className="rounded-box-small">
              <div className="pdf-container">
                <FaFilePdf />
                <h1>Introduction</h1>
              </div>
            </div>
          </div>
          <div className="small-box">
            <div className="rounded-box-small">
              <div className="pdf-container">
                <FaFilePdf />
                <h1>Isochoric Process</h1>
              </div>
            </div>
          </div>
          <div className="small-box">
            <div className="rounded-box-small">
              <div className="pdf-container">
                <FaFilePdf />
                <h1>Internal Energy</h1>
              </div>
            </div>
          </div>
          <div className="small-box">
            <div className="rounded-box-small">
              <div className="pdf-container">
                <FaFilePdf />
                <h1>
                  Mathematical Expression Of First Law Enthalpy Of A System{" "}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="sub-title">Assignments</h1>
        </div>
        <div>
          <div className="small-box">
            <div className="rounded-box-small">
              <div className="pdf-container">
                <FaFilePdf />
                <h1>Assignment on Chemistry 1</h1>
              </div>
            </div>
          </div>
          <div className="small-box">
            <div className="rounded-box-small">
              <div className="pdf-container">
                <FaFilePdf />
                <h1>Thermodynamics-All Assignments</h1>
              </div>
            </div>
          </div>
          <div className="small-box">
            <div className="rounded-box-small">
              <div className="pdf-container">
                <FaFilePdf />
                <h1>Chemistry In Everyday Life-All Assignments</h1>
              </div>
            </div>
          </div>
          <div className="small-box">
            <div className="rounded-box-small">
              <div className="pdf-container">
                <FaFilePdf />
                <h1>Assignement on Chemistry 2</h1>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="sub-title">Sub title here</h1>
        </div>
        <div>
          <div className="small-box">
            <div className="rounded-box-small">
              <div className="pdf-container">
                <FaFilePdf />
                <h1>Assignement on Chemistry 3</h1>
              </div>
            </div>
          </div>
          <div className="small-box">
            <div className="rounded-box-small">
              <div className="pdf-container">
                <FaFilePdf />
                <h1>Assignement on Chemistry 4</h1>
              </div>
            </div>
          </div>
          <div className="small-box">
            <div className="rounded-box-small">
              <div className="pdf-container">
                <FaFilePdf />
                <h1>Assignement on Chemistry 5</h1>
              </div>
            </div>
          </div>
          <div className="small-box">
            <div className="rounded-box-small">
              <div className="pdf-container">
                <FaFilePdf />
                <h1>Assignement on Chemistry 6</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homework;
