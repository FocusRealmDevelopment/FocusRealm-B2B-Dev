import { Avatar } from "@mui/material";
import styles from "./chatfieldheader.module.css";
import SearchIcon from "@mui/icons-material/Search";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { closeChat } from "../../../../features/chat/chatSlice";

const ChatFieldHeader = () => {
  const [optionsVisible, setOptionsVisible] = useState(false);
  const themeMode = useSelector((state) => state.theme.themeMode);
  const username = useSelector((state) => state.chat.chat.name);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Username: ", username);
  }, [username]);

  const moreOptionsHandler = (event) => {
    event.stopPropagation();
    console.log("clicked");
    setOptionsVisible((prevVisible) => !prevVisible);
  };

  return (
    <div className={styles.body}>
      <div className={styles.userContainer}>
        <Avatar />
        <span>{username}</span>
      </div>
      <div
        className={`${styles.moreOptionsContainer} ${
          themeMode === "light"
            ? styles.lightMoreOptionsContainer
            : styles.darkMoreOptionsContainer
        }`}
      >
        <button className={styles.iconButton}>
          <SearchIcon />
        </button>
        <button
          onClick={moreOptionsHandler}
          className={`${styles.iconButton} ${styles.moreOptionsButton}}`}
        >
          <MoreHorizIcon />
          {optionsVisible && (
            <div className={styles.optionsContainer}>
              <span>Some Option 1</span>
              <span>Some Option 2</span>
              <span
                onClick={(event) => {
                  event.stopPropagation();
                  console.log("Close Chat");
                  dispatch(closeChat());
                }}
              >
                Close Chat
              </span>
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

export default ChatFieldHeader;
