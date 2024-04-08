// import React from 'react';
import styles from "./sidepanel.module.css";
import focusRealmLogo from "../../assets/images/focusRealmLogo.png";
import schoolLogo from "../../assets/images/schoolLogo.png";
import profilePic from "../../assets/images/profilePic.png";
import IconContainer from "../iconConatiner/IconContainer";
import HomeIcon from "@mui/icons-material/Home";
import TaskIcon from "@mui/icons-material/Task";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import HelpIcon from "@mui/icons-material/Help";
import LogoutIcon from "@mui/icons-material/Logout";
import { NavLink } from "react-router-dom";

const SidePanel = () => {
  return (
    <div className={styles.body}>
      <NavLink to="/">
        <div className={styles.logoContainer}>
          <div className={styles.logoDiv}>
            <img src={focusRealmLogo} alt="logo-img" />
          </div>
          <div className={styles.logoName}>
            <span>Focus</span>
            <span> </span>
            <span> Realm</span>
          </div>
        </div>
      </NavLink>
      <div className={styles.studentInfoContainer}>
        <div className={styles.schoolLogoContainer}>
          <img src={schoolLogo} alt="school-logo" />
        </div>
        <div className={styles.studentContainer}>
          <img src={profilePic} alt="student-profile-pic" />
          <span>Student name</span>
        </div>
      </div>
      <div className={styles.navIconsContainer}>
        <IconContainer icon={HomeIcon} iconName={"Home"} path={"/"} />
        <IconContainer icon={TaskIcon} iconName={"Task"} path={"/task"} />
        <IconContainer
          icon={CalendarTodayIcon}
          iconName={"Calendar"}
          path={"/calendar"}
        />
        <IconContainer
          icon={TextSnippetIcon}
          iconName={"Test"}
          path={"/test"}
        />
        <IconContainer
          icon={AutoStoriesIcon}
          iconName={"Homework"}
          path={"/homework"}
        />
        <IconContainer icon={HelpIcon} iconName={"Help"} path={"/help"} />
        <IconContainer icon={LogoutIcon} iconName={"Logout"} />
      </div>
    </div>
  );
};

export default SidePanel;
