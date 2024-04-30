/* eslint-disable react/prop-types */
// import React from 'react';
import { Link } from "react-router-dom";
import styles from "./performancecard.module.css";
import { MdOutlineInsertChart } from "react-icons/md";

const PerformanceCard = ({
  logo,
  componentName,
  componentDesc,
  path,
  logo2,
  children,
}) => {
  return (
    <div
      className={`${styles.body} p-4 rounded-xl flex items-center justify-between`}
    >
      <div className={`flex gap-3`}>
        {logo && <img src={logo} alt="logo-pic" />}
        <div>
          <h1 className={``}>{componentName}</h1>
          <h1 className={``}>{componentDesc}</h1>
          {children}
        </div>
      </div>
      <div>
        {path && (
          <Link to={path}>
            <MdOutlineInsertChart />
          </Link>
        )}
        {logo2 && <img src={logo2} alt="second-logo-pic" />}
      </div>
    </div>
  );
};

export default PerformanceCard;
