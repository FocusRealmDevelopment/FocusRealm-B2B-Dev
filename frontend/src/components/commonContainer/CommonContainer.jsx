/* eslint-disable react/prop-types */
// import React from 'react';
import styles from "./commoncontainer.module.css";

const CommonContainer = ({ children }) => {
  return (
    <div className={`${styles.body} p-4 rounded-[12px] bg-white`}>
      {children}
    </div>
  );
};

export default CommonContainer;
