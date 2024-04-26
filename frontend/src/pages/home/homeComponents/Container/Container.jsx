/* eslint-disable react/prop-types */
// import React from 'react';
import styles from "./container.module.css";
import { Link } from "react-router-dom";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Container = ({ heading, children }) => {
  return (
    <div className={`${styles.body}`}>
      <div className="flex justify-between items-center">
        <h1 className="text-xl poppins-semibold">{heading}</h1>
        <Link className="text-[12px] flex items-center gap-2">
          View All{" "}
          <span className={`${styles.arrowContainer}`}>
            <FaRegArrowAltCircleRight />
          </span>
        </Link>
      </div>
      <div className="mt-4 grid grid-cols-4 gap-4">{children}</div>
    </div>
  );
};

export default Container;
