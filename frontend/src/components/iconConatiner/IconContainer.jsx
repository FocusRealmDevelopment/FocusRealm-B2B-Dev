/* eslint-disable react/prop-types */
// import React from 'react';
import { NavLink } from "react-router-dom";
import styles from "./iconcontainer.module.css";
import { useSelector } from "react-redux";

//${isactive ? styles.active : ""}

const IconContainer = ({ icon: Icon, iconName, path }) => {
  const themeMode = useSelector((state) => state.theme.themeMode);

  if (path) {
    return (
      <div className={styles.body}>
        <NavLink
          to={path}
          className={({ isActive }) =>
            isActive
              ? themeMode === "light"
                ? `${styles.active} ${styles.light}`
                : `${styles.active} ${styles.dark}`
              : themeMode === "light"
              ? `${styles.inActive} ${styles.light}`
              : `${styles.inActive} ${styles.dark}`
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
        <span
          style={{}}
          className={`${styles.iconDiv} ${styles.logoutIconDiv} ${
            themeMode === "light" ? "" : styles.darkIconDiv
          }`}
        >
          {/* <HomeIcon /> */}
          <Icon />
        </span>
        <span
          style={{
            color:
              themeMode === "light"
                ? "rgb(99, 119, 153)"
                : "rgb(163, 184, 217)",
          }}
          className={styles.iconNameDiv}
        >
          {iconName}
        </span>
      </div>
    );
  }
};

export default IconContainer;
