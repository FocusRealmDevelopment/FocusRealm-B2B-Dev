/* eslint-disable react/prop-types */
import { Avatar } from "@mui/material";
import styles from "./chatcard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { showChat } from "../../../../features/chat/chatSlice";

const ChatCard = (props) => {
  const themeMode = useSelector((state) => state.theme.themeMode);
  const selectedChat = useSelector((state) => state.chat.chat.name);
  const dispatch = useDispatch();

  const onClickHandler = () => {
    console.log("clicked");
    console.log(props.name);
    dispatch(
      showChat({
        name: props.name,
        messages: "",
        unread: props.lastMessage,
      })
    );
  };

  const isSelected = props.name === selectedChat;

  return (
    <div
      onClick={onClickHandler}
      style={{
        backgroundColor:
          themeMode === "light"
            ? isSelected
              ? "#edf0f5"
              : "white"
            : isSelected
            ? "#212224"
            : "#26282B",
        cursor: "pointer",
      }}
      className={`${styles.body} ${
        themeMode === "light" ? styles.lightBodyHover : styles.darkBodyHover
      }`}
    >
      <div className={styles.chatInfo}>
        <Avatar />
        <div className={styles.chatInfoContainer}>
          <p style={{ color: themeMode === "light" ? "#232d40" : "#dfe6f2" }}>
            {props.name}
          </p>
          <p
            style={{
              color: themeMode === "light" ? "#637799" : "#a3b8d9",
              fontSize: "12px",
            }}
          >
            {props.lastMessage}
          </p>
        </div>
      </div>
      <div className={styles.timeContainer}>
        {/* <p>{props.time}</p> */}
        <p
          style={{ color: themeMode === "light" ? "#637799" : "#a3b8d9" }}
          className={styles.time}
        >
          Some time
        </p>
        {/* <p>{props.unread}</p> */}
        <p
          style={{
            color: themeMode === "light" ? "#ffffff" : "#000000",
            backgroundColor: themeMode === "light" ? "#4f81d1" : "#4774bc",
          }}
          className={styles.unread}
        >
          2
        </p>
      </div>
    </div>
  );
};

export default ChatCard;
