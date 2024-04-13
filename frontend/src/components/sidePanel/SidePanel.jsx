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
import Switch from "../switch/Switch";
import { useSelector } from "react-redux";

const SidePanel = () => {
  const themeMode = useSelector((state) => state.theme.themeMode);

  return (
    <div
      style={{
        backgroundColor: themeMode === "light" ? "#fff" : "rgb(44, 50, 59)",
      }}
      className={styles.body}
    >
      <NavLink to="/">
        <div className={styles.logoContainer}>
          <div
            style={{
              backgroundColor:
                themeMode === "light"
                  ? "rgb(216, 223, 235)"
                  : "rgb(38, 43, 51)",
            }}
            className={styles.logoDiv}
          >
            <img src={focusRealmLogo} alt="logo-img" />
          </div>
          <div className={styles.logoName}>
            <span
              style={{
                color:
                  themeMode === "light"
                    ? "rgb(42, 102, 195)"
                    : "rgb(1, 72, 183)",
              }}
            >
              Focus
            </span>
            <span> </span>
            <span
              style={{
                color:
                  themeMode === "light"
                    ? "rgb(79, 129, 209)"
                    : "rgb(79, 129, 209)",
              }}
            >
              {" "}
              Realm
            </span>
          </div>
        </div>
      </NavLink>
      <div
        style={{
          backgroundColor:
            themeMode === "light" ? "rgb(216, 223, 235)" : "rgb(49, 57, 71)",
        }}
        className={styles.studentInfoContainer}
      >
        <div className={styles.schoolLogoContainer}>
          <img src={schoolLogo} alt="school-logo" />
        </div>
        <div className={styles.studentContainer}>
          <img src={profilePic} alt="student-profile-pic" />
          <span
            style={{
              color:
                themeMode === "light" ? "rgb(1, 72, 183)" : "rgb(79, 129, 209)",
            }}
          >
            Student name
          </span>
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
        <div className={`pl-20 ${styles.tabScreen}`}>
          <Switch />
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
