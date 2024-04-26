// import React from 'react';
import styles from "./navbar.module.css";
import focusRealmLogo from "../../assets/images/focusRealmLogo.png";
import profilePic from "../../assets/images/profilePic.png";
import SearchIcon from "@mui/icons-material/Search";
import NavIconContainer from "../navIconContainer/NavIconContainer";
import { FiMessageCircle } from "react-icons/fi";
import { RiCalendarTodoFill } from "react-icons/ri";
import { PiBellSimple } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import "../../styles/global.css";

const Navbar = () => {
  return (
    <div
      className={`bg-inherit w-3/4 mx-auto flex items-center justify-between py-2`}
    >
      <div className={`${styles.logoContainer}`}>
        <div className={`${styles.imgContainer}`}>
          <img src={focusRealmLogo} alt="Focus-Realm-Logo" />
        </div>
        <div className={`${styles.logoNameContainer}`}>
          <span className={`text-lg poppins-medium`}>Focus</span>{" "}
          <span className={`text-lg poppins-medium`}>Realm</span>
        </div>
      </div>
      <div className={`${styles.searchContainer} relative w-2/4`}>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Seach anything here...."
          className={`w-full`}
        />
        <div className={`${styles.searchButtonContainer}`}>
          <SearchIcon />
        </div>
      </div>
      <div className={`${styles.iconsContainer}`}>
        <div className={`flex gap-[10px]`}>
          <NavIconContainer icon={FiMessageCircle} />
          <NavIconContainer icon={RiCalendarTodoFill} />
          <NavIconContainer icon={PiBellSimple} />
        </div>
        <div className={`${styles.profilePicContainer}`}>
          <img src={profilePic} alt="profile-pic" />
          <IoIosArrowDown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
