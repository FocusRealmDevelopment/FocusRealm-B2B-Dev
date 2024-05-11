/* eslint-disable react/prop-types */
// import React from 'react';
import "../../../../styles/global.css";
import styles from "./commonwidget.module.css";
import { MdArrowOutward } from "react-icons/md";

const CommonWidget = ({ heading, children }) => {
  return (
    <div className={`${styles.body}`}>
      <div className={`flex items-center justify-between`}>
        <span className={`poppins-semibold text-base`}>{heading}</span>
        <span
          className={`p-1 bg-[#dce6f6] flex items-center justify-center rounded-[50%]`}
        >
          <MdArrowOutward />
        </span>
      </div>
      <div className={`mt-2`}>{children}</div>
    </div>
  );
};

export default CommonWidget;
