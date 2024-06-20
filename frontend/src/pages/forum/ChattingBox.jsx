import React, { useState } from "react";
import "./Forum.css";
import ChatOptions from "./ChatOptions";
import proPic from "./../../assets/images/pro.png";
const ChattingBox = () => {
  const [searchText, setSearchText] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

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

  return (
    <div>
      <div
        className="chats-page-chatting-box"
        style={{ marginTop: "30px", marginLeft: "10px" }}
      >
        <div className="chats-page-chatting-box-title-box">
          <div
            className="chats-page-chatting-pro-image-box"
            style={{
              marginLeft: "10px",
            }}
          >
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
            <div className="chats-page-pro-title-box">
              <div
                className="chats-page-pro-title-text"
                style={{
                  marginTop: "10px",
                }}
              >
                Thamanna Patel
              </div>
              <div
                className="chats-page-pro-title-text-small"
                style={{
                  marginTop: "5px",
                }}
              >
                Online
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: "0px",
              marginLeft: "110px",
              display: "flex",
            }}
          >
            <button>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.25 1.5C11.976 1.5 15 4.524 15 8.25C15 11.976 11.976 15 8.25 15C4.524 15 1.5 11.976 1.5 8.25C1.5 4.524 4.524 1.5 8.25 1.5ZM8.25 13.5C11.1506 13.5 13.5 11.1506 13.5 8.25C13.5 5.34938 11.1506 3 8.25 3C5.34938 3 3 5.34938 3 8.25C3 11.1506 5.34938 13.5 8.25 13.5ZM14.614 13.5533L16.7353 15.6746L15.6746 16.7353L13.5533 14.614L14.614 13.5533Z"
                  fill="#444444"
                />
              </svg>
            </button>
            
              <button style={{ marginLeft: "10px" }} onClick={togglePopup}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 2.25C8.38125 2.25 7.875 2.75625 7.875 3.375C7.875 3.99375 8.38125 4.5 9 4.5C9.61875 4.5 10.125 3.99375 10.125 3.375C10.125 2.75625 9.61875 2.25 9 2.25ZM9 13.5C8.38125 13.5 7.875 14.0063 7.875 14.625C7.875 15.2437 8.38125 15.75 9 15.75C9.61875 15.75 10.125 15.2437 10.125 14.625C10.125 14.0063 9.61875 13.5 9 13.5ZM9 7.875C8.38125 7.875 7.875 8.38125 7.875 9C7.875 9.61875 8.38125 10.125 9 10.125C9.61875 10.125 10.125 9.61875 10.125 9C10.125 8.38125 9.61875 7.875 9 7.875Z"
                    fill="#444444"
                  />
                </svg>
              </button>

              {isPopupVisible && <ChatOptions />}
            
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <input
            type="text"
            value={searchText}
            onChange={handleInputChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={!isFocused ? "Search chat" : ""}
            className="chats-page-search-chat-box"
          />
          <svg
            width="14"
            height="15"
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              marginTop: "35px",
              marginLeft: "-30px",
            }}
          >
            <path
              d="M5.92482 7.20705L0 1.28223L1.0752 0.207031L7 6.13179L12.9248 0.207031L14 1.28223L8.07519 7.20705L14 13.1318L12.9248 14.207L7 8.28224L1.0752 14.207L0 13.1318L5.92482 7.20705Z"
              fill="#999999"
            />
          </svg>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "440px", //should change after all done
          }}
        >
          <div className="chats-page-date-box">
            <div className="chats-page-date-text">May 6 2024</div>
          </div>
        </div>
        <div
          style={{
            marginLeft: "80px",
          }}
        >
          <div className="chats-page-chatting-text-first-box">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 2C7.45 2 7 2.45 7 3C7 3.55 7.45 4 8 4C8.55 4 9 3.55 9 3C9 2.45 8.55 2 8 2ZM8 12C7.45 12 7 12.45 7 13C7 13.55 7.45 14 8 14C8.55 14 9 13.55 9 13C9 12.45 8.55 12 8 12ZM8 7C7.45 7 7 7.45 7 8C7 8.55 7.45 9 8 9C8.55 9 9 8.55 9 8C9 7.45 8.55 7 8 7Z"
                fill="#666666"
              />
            </svg>
            <div className="chats-page-chatting-text-first-box-text">
              Contray to popular belief,Lorem Ipsum is not simply random text.It
              has roots in a piece of classical Latin literature from 45 BC
            </div>
          </div>
          <div
            className="chats-page-seen-time-box"
            style={{
              marginTop: "10px",
            }}
          >
            12: 48 PM
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                marginLeft: "10px",
              }}
            >
              <path
                d="M8.7015 10.3197L9.7605 11.3787L16.1096 5.02948L17.1704 6.09014L9.7605 13.5L4.9875 8.72698L6.04816 7.66633L7.64175 9.25993L8.7015 10.3197ZM8.70278 8.19891L12.4172 4.48438L13.475 5.54209L9.7605 9.25656L8.70278 8.19891ZM6.58274 12.4402L5.52297 13.5L0.75 8.72698L1.81066 7.66633L2.87042 8.72616L2.86953 8.72698L6.58274 12.4402Z"
                fill="#0148B7"
              />
            </svg>
          </div>
        </div>
        <div
          className="chats-page-chatting-text-second-box"
          style={{
            marginLeft: "30px",
            marginTop: "20px",
          }}
        >
          <img
            src={proPic}
            alt="Profile"
            style={{
              width: "35px",
              height: "35px",
              borderRadius: "50%",
              objectFit: "cover",
              marginLeft: "-50px",
              marginTop: "20px",
            }}
          />
          <div className="chats-page-chatting-text-second-box-text">
            Contray to popular belief,Lorem Ipsum is not simply random text.It
            has roots in a piece of classical Latin literature from 45 BC
          </div>
        </div>
        <div className="chat-page-time-box">12: 48 PM</div>
        <div
          className="chats-page-typing-text"
          style={{
            marginLeft: "30px",
          }}
        >
          Typing...
        </div>
        <div
          className="chats-page-type-message-here-box"
          style={{
            marginTop: "20px",
          }}
        >
          <div className="chats-page-type-message-here-text-box">
            <div
              style={{
                display: "flex",
                marginTop: "30px",
                marginLeft: "20px",
              }}
            >
              <input
                type="text"
                placeholder="Type message here"
                className="type-message-here-text"
              />
              <svg
                width="125"
                height="20"
                viewBox="0 0 125 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  marginLeft: "290px",
                }}
              >
                <path
                  d="M8.76666 16.5527C8.82966 15.5511 9.0695 14.5975 9.45533 13.7228C8.17611 13.6042 7.01561 13.0721 6.11099 12.2624L7.22251 11.0205C7.96022 11.6808 8.93241 12.0813 10.0001 12.0813C10.147 12.0813 10.2918 12.0738 10.4343 12.059C11.8559 10.1806 14.0552 8.92342 16.5529 8.76642C15.9744 5.67381 13.2606 3.33317 10.0001 3.33317C6.31818 3.33317 3.33341 6.31794 3.33341 9.99984C3.33341 13.2603 5.67406 15.9742 8.76666 16.5527ZM15.8528 10.5298C13.1577 11.0328 11.0331 13.1574 10.5301 15.8526L15.8528 10.5298ZM18.3334 9.99984C18.3334 10.1396 18.33 10.2785 18.3232 10.4165L10.4167 18.3229C10.2787 18.3298 10.1398 18.3332 10.0001 18.3332C5.39771 18.3332 1.66675 14.6022 1.66675 9.99984C1.66675 5.39746 5.39771 1.6665 10.0001 1.6665C14.6024 1.6665 18.3334 5.39746 18.3334 9.99984ZM8.33341 8.33317C8.33341 9.0235 7.77377 9.58317 7.08341 9.58317C6.39306 9.58317 5.83341 9.0235 5.83341 8.33317C5.83341 7.64281 6.39306 7.08317 7.08341 7.08317C7.77377 7.08317 8.33341 7.64281 8.33341 8.33317ZM14.1667 8.33317C14.1667 9.0235 13.6071 9.58317 12.9167 9.58317C12.2264 9.58317 11.6667 9.0235 11.6667 8.33317C11.6667 7.64281 12.2264 7.08317 12.9167 7.08317C13.6071 7.08317 14.1667 7.64281 14.1667 8.33317Z"
                  fill="#666666"
                />
                <path
                  d="M47.3573 6.46442L42.6432 11.1784C42.3178 11.5039 42.3178 12.0315 42.6432 12.3569C42.9687 12.6824 43.4963 12.6824 43.8217 12.3569L48.5358 7.64293C49.5121 6.66662 49.5121 5.08371 48.5358 4.10739C47.5595 3.13108 45.9766 3.13108 45.0002 4.10739L40.2862 8.82144C38.659 10.4486 38.659 13.0868 40.2862 14.714C41.9134 16.3412 44.5516 16.3412 46.1787 14.714L50.8928 9.99994L52.0713 11.1784L47.3573 15.8925C45.0792 18.1705 41.3858 18.1705 39.1077 15.8925C36.8297 13.6144 36.8297 9.92103 39.1077 7.64293L43.8217 2.92888C45.4489 1.3017 48.0872 1.3017 49.7143 2.92888C51.3415 4.55607 51.3415 7.19425 49.7143 8.82144L45.0002 13.5355C44.024 14.5118 42.441 14.5118 41.4647 13.5355C40.4884 12.5592 40.4884 10.9763 41.4647 9.99994L46.1787 5.28591L47.3573 6.46442Z"
                  fill="#666666"
                />
                <path
                  d="M79.9999 2.50016C78.6192 2.50016 77.4999 3.61945 77.4999 5.00016V8.3335C77.4999 9.71425 78.6192 10.8335 79.9999 10.8335C81.3806 10.8335 82.4999 9.71425 82.4999 8.3335V5.00016C82.4999 3.61945 81.3806 2.50016 79.9999 2.50016ZM79.9999 0.833496C82.3011 0.833496 84.1666 2.69898 84.1666 5.00016V8.3335C84.1666 10.6347 82.3011 12.5002 79.9999 12.5002C77.6987 12.5002 75.8332 10.6347 75.8332 8.3335V5.00016C75.8332 2.69898 77.6987 0.833496 79.9999 0.833496ZM72.5457 9.16683H74.2256C74.63 11.9937 77.0612 14.1668 79.9999 14.1668C82.9386 14.1668 85.3697 11.9937 85.7742 9.16683H87.4541C87.0698 12.6432 84.3096 15.4034 80.8332 15.7877V19.1668H79.1666V15.7877C75.6902 15.4034 72.9299 12.6432 72.5457 9.16683Z"
                  fill="#666666"
                />
                <path
                  d="M106.667 5.00056C106.667 4.53993 107.046 4.1665 107.493 4.1665H122.507C122.963 4.1665 123.333 4.53703 123.333 5.00056V16.6658C123.333 17.1264 122.954 17.4998 122.507 17.4998H107.493C107.037 17.4998 106.667 17.1293 106.667 16.6658V5.00056ZM108.333 5.83317V15.8332H121.667V5.83317H108.333ZM116.667 13.3332C118.047 13.3332 119.167 12.2139 119.167 10.8332C119.167 9.45242 118.047 8.33317 116.667 8.33317C115.286 8.33317 114.167 9.45242 114.167 10.8332C114.167 12.2139 115.286 13.3332 116.667 13.3332ZM116.667 14.9998C114.366 14.9998 112.5 13.1343 112.5 10.8332C112.5 8.532 114.366 6.6665 116.667 6.6665C118.968 6.6665 120.833 8.532 120.833 10.8332C120.833 13.1343 118.968 14.9998 116.667 14.9998ZM108.333 1.6665H113.333V3.33317H108.333V1.6665Z"
                  fill="#666666"
                />
              </svg>
              <svg
                width="43"
                height="44"
                viewBox="0 0 43 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  marginTop: "-10px",
                  marginLeft: "10px",
                }}
              >
                <rect width="42.787" height="44" rx="21.3935" fill="#0148B7" />
                <path
                  d="M15.3285 15C15.3839 15 15.4383 15.014 15.4868 15.0407L27.6167 21.7121C27.7757 21.7996 27.8337 21.9993 27.7463 22.1583C27.7163 22.2129 27.6713 22.2578 27.6167 22.2878L15.4868 28.9593C15.3278 29.0467 15.1281 28.9887 15.0407 28.8298C15.014 28.7812 15 28.7268 15 28.6714V15.3285C15 15.1471 15.1471 15 15.3285 15ZM16.314 16.9953V21.3429H19.599V22.6569H16.314V27.0047L25.4135 21.9999L16.314 16.9953Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChattingBox;
