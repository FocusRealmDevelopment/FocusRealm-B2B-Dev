/* eslint-disable react/prop-types */
// import React from 'react';
import { NavLink } from "react-router-dom";
import styles from "./iconcontainer.module.css";

//${isactive ? styles.active : ""}

const IconContainer = ({ icon: Icon, iconName, path }) => {
  if (path) {
    return (
      <div className={styles.body}>
        <NavLink
          to={path}
          className={({ isActive }) =>
            isActive ? styles.active : styles.inActive
          }
        >
          <span className={styles.iconDiv}>
            {/* <HomeIcon /> */}
            <Icon />
          </span>
          <span className={styles.iconNameDiv}>{iconName}</span>
        </NavLink>
      </div>
    );
  } else {
    return (
      <div className={styles.body}>
        <span className={styles.iconDiv}>
          {/* <HomeIcon /> */}
          <Icon />
        </span>
        <span className={styles.iconNameDiv}>{iconName}</span>
      </div>
    );
  }
};

export default IconContainer;
