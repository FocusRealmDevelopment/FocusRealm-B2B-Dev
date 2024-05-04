// import React from 'react';
import styles from "./sidepanel.module.css";
import "../../styles/global.css";
import SideIconContainer from "../sideIconConatiner/SideIconContainer";
import { MdHomeFilled } from "react-icons/md";
import { RiTaskFill } from "react-icons/ri";
import { FaRegCalendar } from "react-icons/fa6";
import { MdAssignment } from "react-icons/md";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { IoMdHelpCircle } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import axios from "axios";
const handleLogout = async () => {
  try {
    await axios.get("/api/logout");
    // Clear any client-side storage related to authentication, e.g., JWT token
    // Redirect the user to the login page or any other appropriate page
    window.location.href = "/login";
  } catch (error) {
    console.error("Error logging out:", error);
  }
};
const SidePanel = () => {
  return (
    <div className={`${styles.body}`}>
      <div className={`${styles.pictureContainer}`}>
        <div className={`${styles.pictureDiv}`}></div>
      </div>
      <div className={`${styles.studentDetailsContainer} mt-14 text-center`}>
        <h1 className={`text-2xl poppins-semibold mb-2`}>Patrick Dash R</h1>
        <div
          className={`w-2/5 mx-auto p-2 poppins-regular rounded-3xl mb-2 text-xs bg-[#b5e5ff]`}
        >
          8 Grade
        </div>
        <div
          className={`poppins-regular text-[12px] text-[#666666] ${styles.schoolName}`}
        >
          Horizon Public School, Manali
        </div>
      </div>
      <div
        className={`${styles.iconContainer} flex flex-col gap-[10x] items-center w-full mt-10`}
      >
        <SideIconContainer Icon={MdHomeFilled} iconName={"Home"} path={"/"} />
        <SideIconContainer
          Icon={RiTaskFill}
          iconName={"Tasks"}
          path={"/task"}
        />
        <SideIconContainer
          Icon={FaRegCalendar}
          iconName={"Calendar"}
          path={"/calendar"}
        />
        <SideIconContainer
          Icon={MdAssignment}
          iconName={"Forum"}
          path={"/forum"}
        />
        <SideIconContainer
          Icon={AutoStoriesIcon}
          iconName={"Homeworks"}
          path={"/homework"}
        />
        <SideIconContainer
          Icon={IoMdHelpCircle}
          iconName={"Help"}
          path={"/help"}
        />
      </div>
      <div className={`flex flex-col gap-[10x] items-center w-full mt-10`}>
      <button onClick={handleLogout}>
        <IoIosLogOut />
        Logout
      </button>
    </div>
    </div>
  );
};

export default SidePanel;
