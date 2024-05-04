/* eslint-disable react/prop-types */
// import React from 'react';
import styles from "./naviconcontainer.module.css";
// import { FiMessageCircle } from "react-icons/fi";

const NavIconContainer = ({ icon: Icon }) => {
  return (
    <div className={`${styles.body}`}>
      <Icon />
      <div className={`${styles.alertContainer}`}></div>
    </div>
  );
};

export default NavIconContainer;
