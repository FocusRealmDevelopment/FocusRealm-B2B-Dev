import React, { useState } from 'react';

const ChatOptions = () => {
  const [isPopupVisible, setPopupVisible] = useState(true);

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    isPopupVisible && (
      <div
        style={{
          marginLeft: "-20px",
          marginTop: "-30px",
        }}
      >
        <div className="chat-options-pop-up">
          <div className="chat-options-title-box" onClick={closePopup} style={{
            cursor:"pointer"
          }}>
            <div
              className="chat-options-title-box-title"
              style={{
                marginLeft: "20px",
                marginTop: "-5px",
              }}
            >
              Report
            </div>
          </div>
          <div className="chat-options-title-box" onClick={closePopup} style={{
            cursor:"pointer"
          }}>
            <div
              className="chat-options-title-box-title"
              style={{
                marginLeft: "20px",
                marginTop: "-5px",
              }}
            >
              Block
            </div>
          </div>
          <div
            className="chat-options-title-box-last-title"
            style={{
              marginTop: "10px",
              marginLeft: "20px",
              cursor:"pointer"
            }}
            onClick={closePopup}
          >
            Clear Chat
          </div>
        </div>
      </div>
    )
  );
};

export default ChatOptions;
