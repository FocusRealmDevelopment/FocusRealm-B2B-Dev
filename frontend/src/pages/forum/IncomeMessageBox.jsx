import React, { useState } from "react";
import CreateGroup from "./CreateGroup";

import "./Forum.css";
import proPic from "./../../assets/images/pro.png";
const IncomeMessageBox = () => {
  const [searchText, setSearchText] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (!searchText) {
      setIsFocused(false);
    }
  };
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  return (
    <div style={{ display: "flex" }}>
      <div className="chats-page-messages-box" style={{ marginTop: "30px" }}>
        <div className="chats-page-search-bar">
          <div
            className="chats-page-search-box"
            style={{ marginTop: "20px", marginLeft: "15px" }}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.31653 0C8.25126 0 10.6331 2.38181 10.6331 5.31653C10.6331 8.25126 8.25126 10.6331 5.31653 10.6331C2.38181 10.6331 0 8.25126 0 5.31653C0 2.38181 2.38181 0 5.31653 0ZM5.31653 9.45161C7.60087 9.45161 9.45161 7.60087 9.45161 5.31653C9.45161 3.0316 7.60087 1.18145 5.31653 1.18145C3.0316 1.18145 1.18145 3.0316 1.18145 5.31653C1.18145 7.60087 3.0316 9.45161 5.31653 9.45161ZM10.3288 9.49355L12 11.1641L11.1641 12L9.49355 10.3288L10.3288 9.49355Z"
                fill="#666666"
              />
            </svg>
            <input
              type="text"
              value={searchText}
              onChange={handleInputChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder={!isFocused ? "Search chats" : ""}
              style={{ marginLeft: "10px", border: "none", outline: "none" }}
              className="chats-page-search-box-text"
            />
          </div>
          <div>
          <button onClick={togglePopup}>
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginTop: "20px", marginLeft: "0px" }}
          >
            <rect width="44" height="44" rx="22" fill="#0148B7" />
            <path
              d="M21 21V15H23V21H29V23H23V29H21V23H15V21H21Z"
              fill="white"
            />
          </svg>
          </button>
          {showPopup && <CreateGroup onClose={togglePopup} />}
          </div>
        </div>
        <div
          className="chats-page-permanent-text"
          style={{ marginTop: "50px", marginLeft: "15px" }}
        >
          Permanent
        </div>
        <div>
          <div
            className="chats-page-message-box"
            style={{ marginLeft: "15px", marginTop: "10px" }}
          >
            <div style={{ display: "flex" }}>
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="25"
                  cy="25"
                  r="25"
                  fill="#0148B7"
                  fill-opacity="0.05"
                />
                <path
                  d="M34 34H16C15.4477 34 15 33.5523 15 33V25.4868C15 25.1978 15.125 24.9229 15.3428 24.733L19 21.5443V17C19 16.4477 19.4477 16 20 16H34C34.5523 16 35 16.4477 35 17V33C35 33.5523 34.5523 34 34 34ZM22 32H25V25.9416L21 22.454L17 25.9416V32H20V28H22V32ZM27 32H33V18H21V20.1273C21.2344 20.1273 21.4689 20.2094 21.6572 20.3735L26.6572 24.733C26.875 24.9229 27 25.1978 27 25.4868V32ZM29 24H31V26H29V24ZM29 28H31V30H29V28ZM29 20H31V22H29V20ZM25 20H27V22H25V20Z"
                  fill="#0148B7"
                />
              </svg>
              <div
                className="chats-page-message-box-text"
                style={{
                  marginLeft: "10px",
                }}
              >
                <div className="chats-page-horizon">
                  <span className="chats-page-horizon-public-school-text">
                    Horizon Public School
                  </span>
                  <span className="chats-page-horizon-public-school-time-text">
                    2:03 PM
                  </span>
                </div>
                <div
                  className="chats-page-horizon-bottom"
                  style={{ marginTop: "10px" }}
                >
                  <span className="fiveone-students-text">51 Students</span>
                  <span
                    className="three-teachers-text"
                    style={{
                      marginLeft: "10px",
                    }}
                  >
                    3 Teachers
                  </span>
                  <svg
                    width="26"
                    height="21"
                    viewBox="0 0 26 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      marginLeft: "80px",
                    }}
                  >
                    <rect
                      y="0.5"
                      width="26"
                      height="20"
                      rx="10"
                      fill="#0148B7"
                    />
                    <path
                      d="M6.66 8.549C6.759 7.185 7.793 6.393 9.267 6.393C10.818 6.393 11.665 7.295 11.665 8.439C11.665 9.352 11.093 10.067 10.257 10.254V10.309C11.181 10.529 11.808 11.211 11.808 12.355C11.808 13.587 10.95 14.555 9.289 14.555C7.782 14.555 6.66 13.752 6.539 12.212H7.507C7.606 13.059 8.222 13.708 9.278 13.708C10.345 13.708 10.851 13.081 10.851 12.267C10.851 11.145 10.07 10.716 8.64 10.716H8.387V9.88H8.651C9.982 9.869 10.697 9.462 10.697 8.538C10.697 7.779 10.191 7.251 9.234 7.251C8.299 7.251 7.738 7.779 7.639 8.549H6.66ZM13.1595 10.441C13.1595 8.164 13.7315 6.426 15.9315 6.426C18.1205 6.426 18.6925 8.164 18.6925 10.441C18.6925 12.751 18.1205 14.5 15.9315 14.5C13.7315 14.5 13.1595 12.751 13.1595 10.441ZM17.7025 10.441C17.7025 8.791 17.4935 7.339 15.9315 7.339C14.3585 7.339 14.1495 8.791 14.1495 10.441C14.1495 12.157 14.3585 13.587 15.9315 13.587C17.4935 13.587 17.7025 12.157 17.7025 10.441Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div
            className="chats-page-message-box"
            style={{ marginLeft: "15px", marginTop: "10px" }}
          >
            <div style={{ display: "flex" }}>
              <svg
                width="50"
                height="51"
                viewBox="0 0 50 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="25"
                  cy="25.5"
                  r="25"
                  fill="#0148B7"
                  fill-opacity="0.05"
                />
                <path
                  d="M17 25.3333L13 23L25 16L37 23V31.5H35V24.1667L33 25.3333V32.0113L32.7774 32.2864C30.9457 34.5499 28.1418 36 25 36C21.8582 36 19.0543 34.5499 17.2226 32.2864L17 32.0113V25.3333ZM19 26.5V31.2917C20.4672 32.954 22.6111 34 25 34C27.3889 34 29.5328 32.954 31 31.2917V26.5L25 30L19 26.5ZM16.9693 23L25 27.6846L33.0307 23L25 18.3154L16.9693 23Z"
                  fill="#0148B7"
                />
              </svg>

              <div
                className="chats-page-message-box-text"
                style={{
                  marginLeft: "10px",
                }}
              >
                <div className="chats-page-horizon">
                  <span className="chats-page-horizon-public-school-text">
                    Class 8 A
                  </span>
                  <span className="chats-page-horizon-public-school-time-text">
                    2:03 PM
                  </span>
                </div>
                <div
                  className="chats-page-horizon-bottom"
                  style={{ marginTop: "10px" }}
                >
                  <span className="fiveone-students-text">51 Students</span>
                  <span
                    className="three-teachers-text"
                    style={{
                      marginLeft: "10px",
                    }}
                  >
                    3 Teachers
                  </span>
                  <svg
                    width="26"
                    height="21"
                    viewBox="0 0 26 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      marginLeft: "80px",
                    }}
                  >
                    <rect
                      y="0.5"
                      width="26"
                      height="20"
                      rx="10"
                      fill="#0148B7"
                    />
                    <path
                      d="M6.66 8.549C6.759 7.185 7.793 6.393 9.267 6.393C10.818 6.393 11.665 7.295 11.665 8.439C11.665 9.352 11.093 10.067 10.257 10.254V10.309C11.181 10.529 11.808 11.211 11.808 12.355C11.808 13.587 10.95 14.555 9.289 14.555C7.782 14.555 6.66 13.752 6.539 12.212H7.507C7.606 13.059 8.222 13.708 9.278 13.708C10.345 13.708 10.851 13.081 10.851 12.267C10.851 11.145 10.07 10.716 8.64 10.716H8.387V9.88H8.651C9.982 9.869 10.697 9.462 10.697 8.538C10.697 7.779 10.191 7.251 9.234 7.251C8.299 7.251 7.738 7.779 7.639 8.549H6.66ZM13.1595 10.441C13.1595 8.164 13.7315 6.426 15.9315 6.426C18.1205 6.426 18.6925 8.164 18.6925 10.441C18.6925 12.751 18.1205 14.5 15.9315 14.5C13.7315 14.5 13.1595 12.751 13.1595 10.441ZM17.7025 10.441C17.7025 8.791 17.4935 7.339 15.9315 7.339C14.3585 7.339 14.1495 8.791 14.1495 10.441C14.1495 12.157 14.3585 13.587 15.9315 13.587C17.4935 13.587 17.7025 12.157 17.7025 10.441Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div
            className="chats-page-message-box"
            style={{ marginLeft: "15px", marginTop: "10px" }}
          >
            <div style={{ display: "flex" }}>
              <svg
                width="50"
                height="51"
                viewBox="0 0 50 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="25"
                  cy="25.5"
                  r="25"
                  fill="#0148B7"
                  fill-opacity="0.05"
                />
                <g clip-path="url(#clip0_312_929)">
                  <path
                    d="M16 16.5H34C34.5523 16.5 35 16.9477 35 17.5V33.5C35 34.0523 34.5523 34.5 34 34.5H16C15.4477 34.5 15 34.0523 15 33.5V17.5C15 16.9477 15.4477 16.5 16 16.5ZM17 18.5V32.5H33V18.5H17ZM29.9 26.5C29.4367 28.7822 27.419 30.5 25 30.5C22.2386 30.5 20 28.2614 20 25.5C20 23.081 21.7178 21.0633 24 20.6V26.5H29.9ZM29.9 24.5H26V20.6C27.9591 20.9977 29.5023 22.5409 29.9 24.5Z"
                    fill="#0148B7"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_312_929">
                    <rect
                      width="20"
                      height="18"
                      fill="white"
                      transform="translate(15 16.5)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <div
                className="chats-page-message-box-text"
                style={{
                  marginLeft: "10px",
                }}
              >
                <div className="chats-page-horizon">
                  <span className="chats-page-horizon-public-school-text">
                    Physics - 8 A
                  </span>
                  <span className="chats-page-horizon-public-school-time-text">
                    2:03 PM
                  </span>
                </div>
                <div
                  className="chats-page-horizon-bottom"
                  style={{ marginTop: "10px" }}
                >
                  <span className="fiveone-students-text">51 Students</span>
                  <span
                    className="three-teachers-text"
                    style={{
                      marginLeft: "10px",
                    }}
                  >
                    3 Teachers
                  </span>
                  <svg
                    width="26"
                    height="21"
                    viewBox="0 0 26 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      marginLeft: "80px",
                    }}
                  >
                    <rect
                      y="0.5"
                      width="26"
                      height="20"
                      rx="10"
                      fill="#0148B7"
                    />
                    <path
                      d="M6.66 8.549C6.759 7.185 7.793 6.393 9.267 6.393C10.818 6.393 11.665 7.295 11.665 8.439C11.665 9.352 11.093 10.067 10.257 10.254V10.309C11.181 10.529 11.808 11.211 11.808 12.355C11.808 13.587 10.95 14.555 9.289 14.555C7.782 14.555 6.66 13.752 6.539 12.212H7.507C7.606 13.059 8.222 13.708 9.278 13.708C10.345 13.708 10.851 13.081 10.851 12.267C10.851 11.145 10.07 10.716 8.64 10.716H8.387V9.88H8.651C9.982 9.869 10.697 9.462 10.697 8.538C10.697 7.779 10.191 7.251 9.234 7.251C8.299 7.251 7.738 7.779 7.639 8.549H6.66ZM13.1595 10.441C13.1595 8.164 13.7315 6.426 15.9315 6.426C18.1205 6.426 18.6925 8.164 18.6925 10.441C18.6925 12.751 18.1205 14.5 15.9315 14.5C13.7315 14.5 13.1595 12.751 13.1595 10.441ZM17.7025 10.441C17.7025 8.791 17.4935 7.339 15.9315 7.339C14.3585 7.339 14.1495 8.791 14.1495 10.441C14.1495 12.157 14.3585 13.587 15.9315 13.587C17.4935 13.587 17.7025 12.157 17.7025 10.441Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div
            className="chats-page-message-box"
            style={{ marginLeft: "15px", marginTop: "10px" }}
          >
            <div style={{ display: "flex" }}>
              <svg
                width="50"
                height="51"
                viewBox="0 0 50 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="25"
                  cy="25.5"
                  r="25"
                  fill="#0148B7"
                  fill-opacity="0.05"
                />
                <path
                  d="M21.5 20.5C21.5 21.6046 20.6046 22.5 19.5 22.5C18.3954 22.5 17.5 21.6046 17.5 20.5C17.5 19.3954 18.3954 18.5 19.5 18.5C20.6046 18.5 21.5 19.3954 21.5 20.5ZM15.5 20.5C15.5 22.7091 17.2909 24.5 19.5 24.5C21.7091 24.5 23.5 22.7091 23.5 20.5C23.5 18.2909 21.7091 16.5 19.5 16.5C17.2909 16.5 15.5 18.2909 15.5 20.5ZM22 30C22 28.6193 20.8807 27.5 19.5 27.5C18.1193 27.5 17 28.6193 17 30V32.5H22V30ZM24 34.5H15V30C15 27.5147 17.0147 25.5 19.5 25.5C21.9853 25.5 24 27.5147 24 30V34.5ZM32.5 20.5C32.5 21.6046 31.6046 22.5 30.5 22.5C29.3954 22.5 28.5 21.6046 28.5 20.5C28.5 19.3954 29.3954 18.5 30.5 18.5C31.6046 18.5 32.5 19.3954 32.5 20.5ZM26.5 20.5C26.5 22.7091 28.2909 24.5 30.5 24.5C32.7091 24.5 34.5 22.7091 34.5 20.5C34.5 18.2909 32.7091 16.5 30.5 16.5C28.2909 16.5 26.5 18.2909 26.5 20.5ZM33 30C33 28.6193 31.8807 27.5 30.5 27.5C29.1193 27.5 28 28.6193 28 30V32.5H33V30ZM26 32.5V30C26 27.5147 28.0147 25.5 30.5 25.5C32.9853 25.5 35 27.5147 35 30V34.5H26V32.5Z"
                  fill="#0148B7"
                />
              </svg>

              <div
                className="chats-page-message-box-text"
                style={{
                  marginLeft: "10px",
                }}
              >
                <div className="chats-page-horizon">
                  <span className="chats-page-horizon-public-school-text">
                    Chemistry - 8 A
                  </span>
                  <span className="chats-page-horizon-public-school-time-text">
                    2:03 PM
                  </span>
                </div>
                <div
                  className="chats-page-horizon-bottom"
                  style={{ marginTop: "10px" }}
                >
                  <span className="fiveone-students-text">51 Students</span>
                  <span
                    className="three-teachers-text"
                    style={{
                      marginLeft: "10px",
                    }}
                  >
                    3 Teachers
                  </span>
                  <svg
                    width="26"
                    height="21"
                    viewBox="0 0 26 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      marginLeft: "80px",
                    }}
                  >
                    <rect
                      y="0.5"
                      width="26"
                      height="20"
                      rx="10"
                      fill="#0148B7"
                    />
                    <path
                      d="M6.66 8.549C6.759 7.185 7.793 6.393 9.267 6.393C10.818 6.393 11.665 7.295 11.665 8.439C11.665 9.352 11.093 10.067 10.257 10.254V10.309C11.181 10.529 11.808 11.211 11.808 12.355C11.808 13.587 10.95 14.555 9.289 14.555C7.782 14.555 6.66 13.752 6.539 12.212H7.507C7.606 13.059 8.222 13.708 9.278 13.708C10.345 13.708 10.851 13.081 10.851 12.267C10.851 11.145 10.07 10.716 8.64 10.716H8.387V9.88H8.651C9.982 9.869 10.697 9.462 10.697 8.538C10.697 7.779 10.191 7.251 9.234 7.251C8.299 7.251 7.738 7.779 7.639 8.549H6.66ZM13.1595 10.441C13.1595 8.164 13.7315 6.426 15.9315 6.426C18.1205 6.426 18.6925 8.164 18.6925 10.441C18.6925 12.751 18.1205 14.5 15.9315 14.5C13.7315 14.5 13.1595 12.751 13.1595 10.441ZM17.7025 10.441C17.7025 8.791 17.4935 7.339 15.9315 7.339C14.3585 7.339 14.1495 8.791 14.1495 10.441C14.1495 12.157 14.3585 13.587 15.9315 13.587C17.4935 13.587 17.7025 12.157 17.7025 10.441Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="chats-page-permanent-text"
          style={{ marginTop: "20px", marginLeft: "15px" }}
        >
          Created
        </div>
        <div
          className="chats-page-thamannna-box"
          style={{
            marginLeft: "15px",
            marginTop: "20px",
          }}
        >
          <div style={{ display: "flex" }}>
            <img
              src={proPic}
              alt="Profile"
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />

            <div
              className="chats-page-message-box-text"
              style={{
                marginLeft: "10px",
              }}
            >
              <div className="chats-page-horizon">
                <span className="chats-page-horizon-public-school-text">
                  Thamanna Patel
                </span>
                <span className="chats-page-horizon-public-school-time-text">
                  2:03 PM
                </span>
              </div>
              <div
                className="chats-page-horizon-bottom"
                style={{ marginTop: "10px" }}
              >
                <span className="fiveone-students-text">51 Students</span>
                <span
                  className="three-teachers-text"
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  3 Teachers
                </span>
                <svg
                  width="26"
                  height="21"
                  viewBox="0 0 26 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    marginLeft: "80px",
                  }}
                >
                  <rect y="0.5" width="26" height="20" rx="10" fill="#0148B7" />
                  <path
                    d="M6.66 8.549C6.759 7.185 7.793 6.393 9.267 6.393C10.818 6.393 11.665 7.295 11.665 8.439C11.665 9.352 11.093 10.067 10.257 10.254V10.309C11.181 10.529 11.808 11.211 11.808 12.355C11.808 13.587 10.95 14.555 9.289 14.555C7.782 14.555 6.66 13.752 6.539 12.212H7.507C7.606 13.059 8.222 13.708 9.278 13.708C10.345 13.708 10.851 13.081 10.851 12.267C10.851 11.145 10.07 10.716 8.64 10.716H8.387V9.88H8.651C9.982 9.869 10.697 9.462 10.697 8.538C10.697 7.779 10.191 7.251 9.234 7.251C8.299 7.251 7.738 7.779 7.639 8.549H6.66ZM13.1595 10.441C13.1595 8.164 13.7315 6.426 15.9315 6.426C18.1205 6.426 18.6925 8.164 18.6925 10.441C18.6925 12.751 18.1205 14.5 15.9315 14.5C13.7315 14.5 13.1595 12.751 13.1595 10.441ZM17.7025 10.441C17.7025 8.791 17.4935 7.339 15.9315 7.339C14.3585 7.339 14.1495 8.791 14.1495 10.441C14.1495 12.157 14.3585 13.587 15.9315 13.587C17.4935 13.587 17.7025 12.157 17.7025 10.441Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div
          className="chats-page-thamannna-box"
          style={{
            marginLeft: "15px",
          }}
        >
          <div style={{ display: "flex" }}>
            <img
              src={proPic}
              alt="Profile"
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />

            <div
              className="chats-page-message-box-text"
              style={{
                marginLeft: "10px",
              }}
            >
              <div className="chats-page-horizon">
                <span className="chats-page-horizon-public-school-text">
                  Thamanna Patel
                </span>
                <span className="chats-page-horizon-public-school-time-text">
                  2:03 PM
                </span>
              </div>
              <div
                className="chats-page-horizon-bottom"
                style={{ marginTop: "10px" }}
              >
                <span className="fiveone-students-text">51 Students</span>
                <span
                  className="three-teachers-text"
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  3 Teachers
                </span>
                <svg
                  width="26"
                  height="21"
                  viewBox="0 0 26 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    marginLeft: "80px",
                  }}
                >
                  <rect y="0.5" width="26" height="20" rx="10" fill="#0148B7" />
                  <path
                    d="M6.66 8.549C6.759 7.185 7.793 6.393 9.267 6.393C10.818 6.393 11.665 7.295 11.665 8.439C11.665 9.352 11.093 10.067 10.257 10.254V10.309C11.181 10.529 11.808 11.211 11.808 12.355C11.808 13.587 10.95 14.555 9.289 14.555C7.782 14.555 6.66 13.752 6.539 12.212H7.507C7.606 13.059 8.222 13.708 9.278 13.708C10.345 13.708 10.851 13.081 10.851 12.267C10.851 11.145 10.07 10.716 8.64 10.716H8.387V9.88H8.651C9.982 9.869 10.697 9.462 10.697 8.538C10.697 7.779 10.191 7.251 9.234 7.251C8.299 7.251 7.738 7.779 7.639 8.549H6.66ZM13.1595 10.441C13.1595 8.164 13.7315 6.426 15.9315 6.426C18.1205 6.426 18.6925 8.164 18.6925 10.441C18.6925 12.751 18.1205 14.5 15.9315 14.5C13.7315 14.5 13.1595 12.751 13.1595 10.441ZM17.7025 10.441C17.7025 8.791 17.4935 7.339 15.9315 7.339C14.3585 7.339 14.1495 8.791 14.1495 10.441C14.1495 12.157 14.3585 13.587 15.9315 13.587C17.4935 13.587 17.7025 12.157 17.7025 10.441Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div
          className="chats-page-thamannna-box"
          style={{
            marginLeft: "15px",
          }}
        >
          <div style={{ display: "flex" }}>
            <img
              src={proPic}
              alt="Profile"
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />

            <div
              className="chats-page-message-box-text"
              style={{
                marginLeft: "10px",
              }}
            >
              <div className="chats-page-horizon">
                <span className="chats-page-horizon-public-school-text">
                  Thamanna Patel
                </span>
                <span className="chats-page-horizon-public-school-time-text">
                  2:03 PM
                </span>
              </div>
              <div
                className="chats-page-horizon-bottom"
                style={{ marginTop: "10px" }}
              >
                <span className="fiveone-students-text">51 Students</span>
                <span
                  className="three-teachers-text"
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  3 Teachers
                </span>
                <svg
                  width="26"
                  height="21"
                  viewBox="0 0 26 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    marginLeft: "80px",
                  }}
                >
                  <rect y="0.5" width="26" height="20" rx="10" fill="#0148B7" />
                  <path
                    d="M6.66 8.549C6.759 7.185 7.793 6.393 9.267 6.393C10.818 6.393 11.665 7.295 11.665 8.439C11.665 9.352 11.093 10.067 10.257 10.254V10.309C11.181 10.529 11.808 11.211 11.808 12.355C11.808 13.587 10.95 14.555 9.289 14.555C7.782 14.555 6.66 13.752 6.539 12.212H7.507C7.606 13.059 8.222 13.708 9.278 13.708C10.345 13.708 10.851 13.081 10.851 12.267C10.851 11.145 10.07 10.716 8.64 10.716H8.387V9.88H8.651C9.982 9.869 10.697 9.462 10.697 8.538C10.697 7.779 10.191 7.251 9.234 7.251C8.299 7.251 7.738 7.779 7.639 8.549H6.66ZM13.1595 10.441C13.1595 8.164 13.7315 6.426 15.9315 6.426C18.1205 6.426 18.6925 8.164 18.6925 10.441C18.6925 12.751 18.1205 14.5 15.9315 14.5C13.7315 14.5 13.1595 12.751 13.1595 10.441ZM17.7025 10.441C17.7025 8.791 17.4935 7.339 15.9315 7.339C14.3585 7.339 14.1495 8.791 14.1495 10.441C14.1495 12.157 14.3585 13.587 15.9315 13.587C17.4935 13.587 17.7025 12.157 17.7025 10.441Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div
          className="chats-page-thamannna-box"
          style={{
            marginLeft: "15px",
          }}
        >
          <div style={{ display: "flex" }}>
            <img
              src={proPic}
              alt="Profile"
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />

            <div
              className="chats-page-message-box-text"
              style={{
                marginLeft: "10px",
              }}
            >
              <div className="chats-page-horizon">
                <span className="chats-page-horizon-public-school-text">
                  Thamanna Patel
                </span>
                <span className="chats-page-horizon-public-school-time-text">
                  2:03 PM
                </span>
              </div>
              <div
                className="chats-page-horizon-bottom"
                style={{ marginTop: "10px" }}
              >
                <span className="fiveone-students-text">51 Students</span>
                <span
                  className="three-teachers-text"
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  3 Teachers
                </span>
                <svg
                  width="26"
                  height="21"
                  viewBox="0 0 26 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    marginLeft: "80px",
                  }}
                >
                  <rect y="0.5" width="26" height="20" rx="10" fill="#0148B7" />
                  <path
                    d="M6.66 8.549C6.759 7.185 7.793 6.393 9.267 6.393C10.818 6.393 11.665 7.295 11.665 8.439C11.665 9.352 11.093 10.067 10.257 10.254V10.309C11.181 10.529 11.808 11.211 11.808 12.355C11.808 13.587 10.95 14.555 9.289 14.555C7.782 14.555 6.66 13.752 6.539 12.212H7.507C7.606 13.059 8.222 13.708 9.278 13.708C10.345 13.708 10.851 13.081 10.851 12.267C10.851 11.145 10.07 10.716 8.64 10.716H8.387V9.88H8.651C9.982 9.869 10.697 9.462 10.697 8.538C10.697 7.779 10.191 7.251 9.234 7.251C8.299 7.251 7.738 7.779 7.639 8.549H6.66ZM13.1595 10.441C13.1595 8.164 13.7315 6.426 15.9315 6.426C18.1205 6.426 18.6925 8.164 18.6925 10.441C18.6925 12.751 18.1205 14.5 15.9315 14.5C13.7315 14.5 13.1595 12.751 13.1595 10.441ZM17.7025 10.441C17.7025 8.791 17.4935 7.339 15.9315 7.339C14.3585 7.339 14.1495 8.791 14.1495 10.441C14.1495 12.157 14.3585 13.587 15.9315 13.587C17.4935 13.587 17.7025 12.157 17.7025 10.441Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div
          className="chats-page-thamannna-box"
          style={{
            marginLeft: "15px",
          }}
        >
          <div style={{ display: "flex" }}>
            <img
              src={proPic}
              alt="Profile"
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />

            <div
              className="chats-page-message-box-text"
              style={{
                marginLeft: "10px",
              }}
            >
              <div className="chats-page-horizon">
                <span className="chats-page-horizon-public-school-text">
                  Thamanna Patel
                </span>
                <span className="chats-page-horizon-public-school-time-text">
                  2:03 PM
                </span>
              </div>
              <div
                className="chats-page-horizon-bottom"
                style={{ marginTop: "10px" }}
              >
                <span className="fiveone-students-text">51 Students</span>
                <span
                  className="three-teachers-text"
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  3 Teachers
                </span>
                <svg
                  width="26"
                  height="21"
                  viewBox="0 0 26 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    marginLeft: "80px",
                  }}
                >
                  <rect y="0.5" width="26" height="20" rx="10" fill="#0148B7" />
                  <path
                    d="M6.66 8.549C6.759 7.185 7.793 6.393 9.267 6.393C10.818 6.393 11.665 7.295 11.665 8.439C11.665 9.352 11.093 10.067 10.257 10.254V10.309C11.181 10.529 11.808 11.211 11.808 12.355C11.808 13.587 10.95 14.555 9.289 14.555C7.782 14.555 6.66 13.752 6.539 12.212H7.507C7.606 13.059 8.222 13.708 9.278 13.708C10.345 13.708 10.851 13.081 10.851 12.267C10.851 11.145 10.07 10.716 8.64 10.716H8.387V9.88H8.651C9.982 9.869 10.697 9.462 10.697 8.538C10.697 7.779 10.191 7.251 9.234 7.251C8.299 7.251 7.738 7.779 7.639 8.549H6.66ZM13.1595 10.441C13.1595 8.164 13.7315 6.426 15.9315 6.426C18.1205 6.426 18.6925 8.164 18.6925 10.441C18.6925 12.751 18.1205 14.5 15.9315 14.5C13.7315 14.5 13.1595 12.751 13.1595 10.441ZM17.7025 10.441C17.7025 8.791 17.4935 7.339 15.9315 7.339C14.3585 7.339 14.1495 8.791 14.1495 10.441C14.1495 12.157 14.3585 13.587 15.9315 13.587C17.4935 13.587 17.7025 12.157 17.7025 10.441Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomeMessageBox;
