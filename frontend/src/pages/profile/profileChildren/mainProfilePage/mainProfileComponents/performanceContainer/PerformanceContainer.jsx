/* eslint-disable react/prop-types */
// import React from 'react';
import styles from "./performancecontainer.module.css";
import "../../../../../../styles/global.css";

const PerformanceContainer = ({ gridCols, heading, children }) => {
  return (
    <div className={`${styles.body} mt-6`}>
      <h1 className="poppins-regular">{heading} Performance</h1>
      <div
        // style={{ gridColumn: `span ${gridCols}` }}
        className={`mt-6 w-full justify-between grid gap-3 ${gridCols}`}
      >
        {children}
      </div>
    </div>
  );
};

export default PerformanceContainer;
