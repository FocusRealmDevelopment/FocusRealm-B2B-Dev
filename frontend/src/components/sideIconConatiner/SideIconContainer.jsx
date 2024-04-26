/* eslint-disable react/prop-types */
// import React from 'react';
import { NavLink } from "react-router-dom";
import styles from "./sideiconcontainer.module.css";

//${isactive ? styles.active : ""}

const SideIconContainer = ({ Icon, iconName, path }) => {
  console.log(Icon);

  if (path) {
    return (
      <NavLink
        to={path}
        className={({ isActive }) =>
          `${styles.body} p-3 rounded-3xl ${
            isActive ? `bg-[#b5e5ff] ${styles.activeContainer}` : ""
          } w-3/4 inline-block`
        }
      >
        <div className={`flex items-center gap-3`}>
          <span className={`${styles.iconContainer}`}>
            <Icon />
          </span>
          <span className="poppins-regular">{iconName}</span>
        </div>
      </NavLink>
    );
  } else {
    return (
      <div className="p-3 w-3/4 inline-block">
        <div className={`flex items-center gap-3`}>
          <span className={`${styles.iconContainer}`}>
            <Icon />
          </span>
          <span className="poppins-regular">{iconName}</span>
        </div>
      </div>
    );
  }
};

export default SideIconContainer;
