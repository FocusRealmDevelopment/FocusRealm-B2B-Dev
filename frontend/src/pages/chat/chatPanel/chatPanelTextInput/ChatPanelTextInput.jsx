import styles from "./chatpaneltextinput.module.css";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import MicIcon from "@mui/icons-material/Mic";
import AddLinkIcon from "@mui/icons-material/AddLink";
import SendIcon from "@mui/icons-material/Send";
import { useSelector } from "react-redux";

const ChatPanelTextInput = () => {
  const themeMode = useSelector((state) => state.theme.themeMode);

  return (
    <div className={styles.body}>
      <form action="">
        <div className={styles.inputContainer}>
          <input
            style={{
              backgroundColor: themeMode === "light" ? "#edf0f5" : "#212224",
            }}
            type="text"
            name="messageBox"
            id="messageBox"
          />
          <div
            className={`${styles.emojiIcon} ${
              themeMode === "light" ? styles.lightIcon : styles.darkIcon
            }`}
          >
            <AddReactionIcon />
          </div>
          <div
            className={`${styles.micIcon} ${
              themeMode === "light" ? styles.lightIcon : styles.darkIcon
            }`}
          >
            <MicIcon />
          </div>
          <div
            className={`${styles.addIcon} ${
              themeMode === "light" ? styles.lightIcon : styles.darkIcon
            }`}
          >
            <AddLinkIcon />
          </div>
        </div>
        <button
          className={`${styles.sendIcon} ${
            themeMode === "light" ? styles.lightIcon : styles.darkIcon
          }`}
          type="submit"
        >
          <SendIcon />
        </button>
      </form>
    </div>
  );
};

export default ChatPanelTextInput;
