import ChatFieldHeader from "./chatPanelHeader/ChatFieldHeader";
import styles from "./chatfield.module.css";
import ChatPanelMessagesBox from "./chatPanelMessagesBox/ChatPanelMessagesBox";
import ChatPanelTextInput from "./chatPanelTextInput/ChatPanelTextInput";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { closeChat } from "../../../features/chat/chatSlice";

const ChatField = () => {
  const themeMode = useSelector((state) => state.theme.themeMode);
  const username = useSelector((state) => state.chat.chat.name);
  const dispatch = useDispatch();
  const [contextMenu, setContextMenu] = useState({
    visible: false,
    x: 0,
    y: 0,
  });
  const chatFieldRef = useRef(null);

  useEffect(() => {
    const chatField = chatFieldRef.current;
    if (!chatField) return;

    const showContextMenu = (event) => {
      event.preventDefault();
      setContextMenu({
        visible: true,
        x: event.clientX,
        y: event.clientY,
      });
    };

    const closeContextMenu = () => {
      setContextMenu({ visible: false, x: 0, y: 0 });
    };

    chatField.addEventListener("contextmenu", showContextMenu);
    window.addEventListener("click", closeContextMenu);

    return () => {
      chatField.removeEventListener("contextmenu", showContextMenu);
      window.removeEventListener("click", closeContextMenu);
    };
  }, []);

  if (!username) {
    return (
      <div
        className={styles.bodyTwo}
        ref={chatFieldRef}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "70%",
          color: themeMode === "light" ? "black" : "rgb(223, 230, 242)",
        }}
      >
        <h1>Select a Chat</h1>
      </div>
    );
  } else {
    return (
      <div
        style={{
          backgroundColor: themeMode === "light" ? "#ffffff" : "#26282b",
        }}
        className={styles.body}
      >
        <ChatFieldHeader />
        <ChatPanelMessagesBox />
        <ChatPanelTextInput />
        {contextMenu.visible && (
          <div
            style={{
              position: "absolute",
              top: contextMenu.y,
              left: contextMenu.x,
              backgroundColor: themeMode === "light" ? "#ffffff" : "#26282b",
              color: themeMode === "light" ? "black" : "rgb(223, 230, 242)",
              zIndex: "1000",
            }}
          >
            <button onClick={() => dispatch(closeChat())}>Close Chat</button>
          </div>
        )}
      </div>
    );
  }
};

export default ChatField;
