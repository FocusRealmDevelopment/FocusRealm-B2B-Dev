// import React from 'react';
import ChatBoxSidePanel from "./chatBoxSidePanel/ChatBoxSidePanel";
import ChatField from "./chatPanel/ChatField";

import styles from "./chatbox.module.css";

const ChatBox = () => {
  return (
    <div className={styles.body}>
      <ChatBoxSidePanel />
      <ChatField />
    </div>
  );
};

export default ChatBox;
