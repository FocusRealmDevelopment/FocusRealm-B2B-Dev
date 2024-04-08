// import React from 'react';
import styles from "./navbar.module.css";
import SearchIcon from "@mui/icons-material/Search";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import NotificationsIcon from "@mui/icons-material/Notifications";
import profilePic from "../../assets/images/profilePic.png";

const Navbar = () => {
  return (
    <div className={styles.body}>
      <div className={styles.searchBarContainer}>
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
        <div className={styles.navIconContainer}>
          <ChatBubbleIcon />
        </div>
        <div className={styles.navIconContainer}>
          <CalendarTodayIcon />
        </div>
        <div className={styles.navIconContainer}>
          <NotificationsIcon />
        </div>
      </div>
      <div className={styles.profileInfoContainer}>
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
