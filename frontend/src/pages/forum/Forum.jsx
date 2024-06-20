import React from "react";
import "./Forum.css";
import proPic from "./../../assets/images/pro.png";
import IncomeMessageBox from "./IncomeMessageBox";
import ChattingBox from "./ChattingBox";

const Forum = () => {
  return (
    <div>
      <div className="chats-page-title">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="40" height="39.5563" rx="19.7782" fill="white" />
          <path
            d="M15.8284 18.7782H28V20.7782H15.8284L21.1924 26.1421L19.7782 27.5563L12 19.7782L19.7782 12L21.1924 13.4142L15.8284 18.7782Z"
            fill="#666666"
          />
        </svg>
        <div className="chats-page-title-text">Chats</div>
      </div>
      <div style={{
        display:"flex"
      }}>
      <IncomeMessageBox/>
      <ChattingBox/>
      </div>
      </div>

  );
};

export default Forum;
