/* eslint-disable react/prop-types */
// import React from 'react';
import styles from "./card3.module.css";
import book from "../../../../assets/images/book.png";

const Card3 = ({ title, dueDate, subject, teacher }) => {
  return (
    <div className={`${styles.body} p-3 rounded-3xl relative mt-8`}>
      <div
        className={`${styles.imgContainer} absolute -top-[10%] flex items-center justify-center`}
      >
        <img src={book} alt="book-pic" />
      </div>
      <div>
        <h1 className="text-xl poppins-semibold">{title}</h1>
        <p>{dueDate}</p>
        <div className="w-[50%] mt-2 py-2 text-[10px] text-center border-blue-500 border border-solid rounded-3xl">
          {subject}
        </div>
        <p>Teacher: {teacher}</p>
      </div>
    </div>
  );
};

export default Card3;
