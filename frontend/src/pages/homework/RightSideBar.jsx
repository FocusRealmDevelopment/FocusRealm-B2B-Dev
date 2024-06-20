import React from "react";
import "./RightSideBar.css";
import PDFIcon from "../../assets/images/pdf.png";

const RightSideBar = ({ trigger, handleClose, children }) => {
  return (
    <div className={`right-sidebar ${trigger ? "visible" : "hidden"}`}>
      <div className="right-sidebar-content">
     
        {children}
        <div className="right-side-bar-submit-your-assignment">
          Submit Your Assignment
          <button className="submit-button" onClick={handleClose}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"
                fill="#666666"
              />
            </svg>
          </button>
        </div>
        <div className="right-side-bar-blue-box">
          <div className="right-side-bar-blue-box-row">
            <img
              src={PDFIcon}
              alt="PDF Icon"
              style={{ width: "24px", height: "24px" }}
            />
            <div>Assignment on Chemistry 1</div>
            <div className="right-side-bar-red-box">
              <div className="right-side-bar-red-box-text">3 days left</div>
            </div>
          </div>
          <div className="right-side-bar-blue-box-row">
            <div className="right-side-bar-chemistry-study-materials-text">
              Chemistry Study Materials
            </div>
            <div className="right-side-bar-chemistry-study-materials-text">
              Teacher:{" "}
              <span className="right-side-bar-vimala-raman-text">
                Vimala Raman
              </span>
            </div>
          </div>
        </div>
        <div className="right-side-bar-blue-box-dotted">
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M37.5 33.3333V29.1666H39.5833V8.33329H12.5V29.2404C12.8402 29.1918 13.188 29.1666 13.5417 29.1666H16.6667V33.3333H13.5417C11.8158 33.3333 10.4167 34.7325 10.4167 36.4583C10.4167 38.1841 11.8158 39.5833 13.5417 39.5833H20.8333V43.75H13.5417C9.51458 43.75 6.25 40.4854 6.25 36.4583V10.4166C6.25 6.96486 9.04823 4.16663 12.5 4.16663H41.6667C42.8173 4.16663 43.75 5.09938 43.75 6.24996V41.6666C43.75 42.8172 42.8173 43.75 41.6667 43.75H33.3333V39.5833H39.5833V33.3333H37.5ZM14.5833 10.4166H18.75V14.5833H14.5833V10.4166ZM14.5833 16.6666H18.75V20.8333H14.5833V16.6666ZM29.1667 35.4166V47.9166H25V35.4166H18.75L27.0833 25L35.4167 35.4166H29.1667Z"
              fill="#0148B7"
            />
          </svg>
          <div className="right-side-bar-submit-an-assignement-text">
            Submit An Assignement
          </div>
          <div className="right-side-bar-click-here-to-browse-or-drop-files-here-text">
            Click here to{" "}
            <span className="right-side-bar-browse-text">browse</span> or drop
            files here
          </div>
        </div>
        <div className="right-side-bar-assignment-on-chemistry-1">
          <img src={PDFIcon} alt="PDF Icon" />
          <div className="right-side-bar-file-info">
            <div className="right-side-bar-assignment-text">
              Assignment on Chemistry 1
            </div>
            <div className="right-side-bar-file-type-PDF">
              File type: PDF
              <span className="file-size-3-mb"> File Size: 3.1 mb</span>
            </div>
          </div>
          <div className="svg-icon-wrapper">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.99983 8.82208L14.1247 4.69727L15.3032 5.87577L11.1783 10.0006L15.3032 14.1253L14.1247 15.3038L9.99983 11.1791L5.87505 15.3038L4.69653 14.1253L8.82133 10.0006L4.69653 5.87577L5.87505 4.69727L9.99983 8.82208Z"
                fill="#666666"
              />
            </svg>
          </div>
        </div>
        <div className="right-side-bar-remarks-or-notes-box">
          <div className="right-side-bar-remarks-or-notes-text">
            Remarks or notes
          </div>
        </div>
        <div className="right-side-bar-double-check-for-mistakes-text">
          Double check for mistakes before submitting. It can't be undone.
        </div>
        <div className="right-side-bar-submit-my-assignment-box">
          <div className="right-side-bar-submit-my-assignment-text">
            Submit My Assignment
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
