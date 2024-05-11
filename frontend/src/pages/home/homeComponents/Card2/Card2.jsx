/* eslint-disable react/prop-types */
// import React from 'react';
import styles from "./card2.module.css";
import { MdArrowOutward } from "react-icons/md";

const Card2 = ({ questions, title, subject, completion }) => {
  return (
    <div className={`${styles.body} rounded-[12px] p-3`}>
      <div className="flex justify-between items-center">
        <span className="text-[10px] text-[#53637f]">
          {questions} Questions
        </span>
        <span className={`${styles.iconContainer}`}>
          <MdArrowOutward />
        </span>
      </div>
      <div>
        <h2 className={`text-base poppins-semibold mt-2 ${styles.title}`}>
          {title}
        </h2>
        <div className="lg:w-[50%] md:w-[auto] mt-2 py-2 text-[10px] text-center border-blue-500 border border-solid rounded-3xl">
          {subject}
        </div>
      </div>
      <div className="mt-3 w-full h-2 bg-[#eeeeee] rounded-[24px]">
        <div
          style={{ width: `${completion}%` }}
          className={`h-full bg-[#0148b7] rounded-[24px]`}
        ></div>
      </div>
    </div>
  );
};

export default Card2;
