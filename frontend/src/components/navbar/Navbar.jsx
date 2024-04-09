// import React from 'react';
import styles from "./navbar.module.css";
import SearchIcon from "@mui/icons-material/Search";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import NotificationsIcon from "@mui/icons-material/Notifications";
import profilePic from "../../assets/images/profilePic.png";
import { useSelector } from "react-redux";

const Navbar = () => {
  const themeMode = useSelector((state) => state.theme.themeMode);

  return (
    <div className={`${themeMode === "light" ? styles.body : styles.darkBody}`}>
      <div
        className={`${
          themeMode === "light"
            ? styles.searchBarContainer
            : styles.darkSearchBarContainer
        }`}
      >
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search all important requirement"
        />
        <button>
          <SearchIcon />
        </button>
      </div>
      <div className={styles.navIcons}>
        <div
          className={`${
            themeMode === "light"
              ? styles.navIconContainer
              : styles.darkNavIconContainer
          }`}
        >
          <ChatBubbleIcon />
        </div>
        <div
          className={`${
            themeMode === "light"
              ? styles.navIconContainer
              : styles.darkNavIconContainer
          }`}
        >
          <CalendarTodayIcon />
        </div>
        <div
          className={`${
            themeMode === "light"
              ? styles.navIconContainer
              : styles.darkNavIconContainer
          }`}
        >
          <NotificationsIcon />
        </div>
      </div>
      <div
        className={`${
          themeMode === "light"
            ? styles.profileInfoContainer
            : styles.darkProfileInfoContainer
        }`}
      >
        <div className={styles.profilePicContainer}>
          <img src={profilePic} alt="profile-pic" />
        </div>
        <div className={styles.nameInfoContainer}>
          <p className={styles.studentName}>Student name</p>
          <p>Student Class</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
