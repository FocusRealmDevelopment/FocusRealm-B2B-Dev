import styles from "./chatboxsidepanel.module.css";
import { Avatar } from "@mui/material";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import SearchIcon from "@mui/icons-material/Search";
import ChatCard from "./chatCard/ChatCard";
import { useSelector } from "react-redux";

const ChatBoxSidePanel = () => {
  const themeMode = useSelector((state) => state.theme.themeMode);

  return (
    <div
      style={{ backgroundColor: themeMode === "light" ? "white" : "#26282B" }}
      className={styles.body}
    >
      <div className={styles.userContainer}>
        <div>
          <span>
            <Avatar />
          </span>
          <span>Username</span>
        </div>
        <span
          className={`${
            themeMode === "light" ? styles.lightIcon : styles.darkIcon
          }`}
        >
          <GroupAddIcon />
        </span>
      </div>
      <div className={styles.searhContainer}>
        <input
          style={{
            backgroundColor: themeMode === "light" ? "#edf0f5" : "#212224",
            color: themeMode === "light" ? "#7486a4" : "#a3b8d9",
          }}
          type="text"
          name=""
          id=""
          placeholder="Search or Start a new chat"
        />
        <SearchIcon />
      </div>
      <div className={styles.contactContainer}>
        <div>
          <ChatCard name={"Username1"} lastMessage={"Hello"} />
        </div>
        <div>
          <ChatCard name={"Username2"} lastMessage={"Hello"} />
        </div>
        <div>
          <ChatCard name={"Username3"} lastMessage={"Hello"} />
        </div>
        <div>
          <ChatCard name={"Username4"} lastMessage={"Hello"} />
        </div>
        <div>
          <ChatCard name={"Username5"} lastMessage={"Hello"} />
        </div>
        <div>
          <ChatCard name={"Username6"} lastMessage={"Hello"} />
        </div>
        <div>
          <ChatCard name={"Username7"} lastMessage={"Hello"} />
        </div>
      </div>
    </div>
  );
};

export default ChatBoxSidePanel;
