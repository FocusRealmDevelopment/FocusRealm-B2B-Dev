// import React from 'react';
import styles from "./sidepanelteacher.module.css";
import "../../styles/global.css";
import SideIconContainer from "../sideIconConatiner/SideIconContainer";
import { MdHomeFilled } from "react-icons/md";
import { RiTaskFill } from "react-icons/ri";
import { FaRegCalendar } from "react-icons/fa6";
import { MdAssignment } from "react-icons/md";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { IoMdHelpCircle, IoMdLogOut } from "react-icons/io";
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
const SidePanelTeacher = () => {
  return (
    <div className={`${styles.body}`}  style={{ backgroundColor: 'white' }}>
      <div className={`${styles.pictureContainer}`} style={{ backgroundColor: 'white' }}>
        <div className={`${styles.pictureDiv}`} ></div>
      </div>
      <div className={`${styles.studentDetailsContainer} mt-14 text-center`} style={{ backgroundColor: 'white' }}>
        <h1 className={`text-2xl poppins-semibold mb-2`}>Vimala Raman</h1>
        <div
          className={`w-2/5 mx-auto p-2 poppins-regular rounded-3xl mb-2 text-xs bg-[#b5e5ff]`}
        >
          Teacher
        </div>
        {/* <div
          className={`poppins-regular text-[12px] text-[#666666] ${styles.schoolName}`}
        >
          Horizon Public School, Manali
        </div> */}
      </div>
      <div
        className={`${styles.iconContainer} flex flex-col gap-[10x] items-center w-full mt-10`}
      >
        <SideIconContainer Icon={MdHomeFilled} iconName={"Home"} path={"/teacher"} />
        
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
         <div className={`flex flex-col gap-[10x] items-center w-full mt-10`}>
        <SideIconContainer Icon={IoIosLogOut} iconName={"Logout"} />
      </div>
      </div>
      
    </div>
  );
};

export default SidePanelTeacher;
