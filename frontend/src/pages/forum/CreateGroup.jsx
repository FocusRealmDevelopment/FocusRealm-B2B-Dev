import React, { useState } from "react";
import AddMembers from "./AddMembers";

const CreateGroup = ({ onClose }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [showAddMembersPopup, setShowAddMembersPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  const toggleAddMembersPopup = () => {
    setShowAddMembersPopup(!showAddMembersPopup);
  };
  return (
    <div
      style={{
        position: "fixed",
        width: "450px",
        height: "293px",
        top: "100px",
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: "#ffffff",
        border: "1px solid #cccccc",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        zIndex: 9999,
        padding: "20px",
        opacity: 1,
        borderRadius: "20px",
      }}
    >
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
        }}
      >
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.33333 16.6667C3.73096 16.6667 0 12.9357 0 8.33333C0 3.73096 3.73096 0 8.33333 0C12.9357 0 16.6667 3.73096 16.6667 8.33333C16.6667 12.9357 12.9357 16.6667 8.33333 16.6667ZM8.33333 15C12.0153 15 15 12.0153 15 8.33333C15 4.65143 12.0153 1.66667 8.33333 1.66667C4.65143 1.66667 1.66667 4.65143 1.66667 8.33333C1.66667 12.0153 4.65143 15 8.33333 15ZM8.33333 7.15483L10.6903 4.7978L11.8688 5.97631L9.51183 8.33333L11.8688 10.6903L10.6903 11.8688L8.33333 9.51183L5.97631 11.8688L4.7978 10.6903L7.15483 8.33333L4.7978 5.97631L5.97631 4.7978L8.33333 7.15483Z"
            fill="#666666"
          />
        </svg>
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <svg
          width="50"
          height="48"
          viewBox="0 0 50 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="50"
            height="48"
            rx="24"
            fill="#0148B7"
            fill-opacity="0.1"
          />
          <path
            d="M21.5 19C21.5 20.1046 20.6046 21 19.5 21C18.3954 21 17.5 20.1046 17.5 19C17.5 17.8954 18.3954 17 19.5 17C20.6046 17 21.5 17.8954 21.5 19ZM15.5 19C15.5 21.2091 17.2909 23 19.5 23C21.7091 23 23.5 21.2091 23.5 19C23.5 16.7909 21.7091 15 19.5 15C17.2909 15 15.5 16.7909 15.5 19ZM22 28.5C22 27.1193 20.8807 26 19.5 26C18.1193 26 17 27.1193 17 28.5V31H22V28.5ZM24 33H15V28.5C15 26.0147 17.0147 24 19.5 24C21.9853 24 24 26.0147 24 28.5V33ZM32.5 19C32.5 20.1046 31.6046 21 30.5 21C29.3954 21 28.5 20.1046 28.5 19C28.5 17.8954 29.3954 17 30.5 17C31.6046 17 32.5 17.8954 32.5 19ZM26.5 19C26.5 21.2091 28.2909 23 30.5 23C32.7091 23 34.5 21.2091 34.5 19C34.5 16.7909 32.7091 15 30.5 15C28.2909 15 26.5 16.7909 26.5 19ZM33 28.5C33 27.1193 31.8807 26 30.5 26C29.1193 26 28 27.1193 28 28.5V31H33V28.5ZM26 31V28.5C26 26.0147 28.0147 24 30.5 24C32.9853 24 35 26.0147 35 28.5V33H26V31Z"
            fill="#0148B7"
          />
        </svg>
      </div>
      <div
        className="chats-page-create-group-text"
        style={{
          marginTop: "10px",
        }}
      >
        Create a Group Chat
      </div>
      <div
        className="group-name-text"
        style={{
          marginTop: "10px",
        }}
      >
        Group name
      </div>
      <div
        className="group-enter-name-box"
        style={{
          marginTop: "15px",
        }}
      >
        <div className="group-enter-name-box-text">Enter name</div>
      </div>
      <div
        className="twofivesix-chats-page-text"
        style={{
          marginTop: "10px",
        }}
      >
        256 characters left
      </div>
      <div>
        <button onClick={toggleAddMembersPopup}>
          <div
            className="chats-page-add-members-box"
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "30px",
            }}
          >
            <div className="chats-page-add-members-box-text">Add Members</div>
          </div>
        </button>
        {showAddMembersPopup && <AddMembers onClose={toggleAddMembersPopup} />}
      </div>
    </div>
  );
};

export default CreateGroup;
