/* eslint-disable react/prop-types */
// import React from 'react';
import styles from "./performancecontainer.module.css";

const PerformanceContainer = ({ gridCols, heading, children }) => {
  return (
    <div className={`${styles.body} mt-6`}>
      <h1>{heading} Performance</h1>
      <div
        style={{ gridColumn: `span ${gridCols}` }}
        className={`mt-6 w-full justify-between grid`}
      >
        {children}
      </div>
    </div>
  );
};

export default PerformanceContainer;
