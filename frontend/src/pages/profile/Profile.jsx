// import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import SidePanel from "../../components/sidePanel/SidePanel";
import styles from "./profile.module.css";

const Profile = () => {
  return (
    <div className={`${styles.body}`}>
      <div className={`${styles.navBody}`}>
        <Navbar />
      </div>
      <div className={`${styles.mainBody}`}>
        <SidePanel />
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
