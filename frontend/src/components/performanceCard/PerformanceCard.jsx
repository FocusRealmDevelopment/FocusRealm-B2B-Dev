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
      className={`${styles.body} p-4 rounded-xl flex items-center justify-between bg-white`}
    >
      <div className={`flex items-center gap-3`}>
        {logo && <img className={`w-[20%]`} src={logo} alt="logo-pic" />}
        <div className={`text-sm text-left`}>
          <h1 className={`text-[#666666] poppins-regular`}>{componentName}</h1>
          <h1 className={`text-[#0148b7] poppins-bold`}>{componentDesc}</h1>
          {children}
        </div>
      </div>
      <div className={`flex justify-end`}>
        {path && (
          <Link className={`${styles.advancedPageLink}`} to={path}>
            <MdOutlineInsertChart />
          </Link>
        )}
        {logo2 && (
          <img className={`w-[20%]`} src={logo2} alt="second-logo-pic" />
        )}
      </div>
    </div>
  );
};

export default PerformanceCard;
