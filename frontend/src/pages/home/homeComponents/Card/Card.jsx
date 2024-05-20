/* eslint-disable react/prop-types */
// import React from 'react';
import "../../../../styles/global.css";
import styles from "./card.module.css";

const Card = ({ logo, language, materials }) => {
  return (
    <div className={`${styles.body} p-3 rounded-xl`}>
      <div className={`w-[70%] mx-auto p-5 bg-[#ebebeb] rounded-[50%]`}>
        <img className="w-full" src={logo} alt="sunject-pic" />
      </div>
      <div className="w-full text-center">
        <h2 className="poppins-semibold mt-2">{language}</h2>
        <p className="text-[12px] text-[#53637f] mt-1">{materials} materials</p>
        <div className="w-3/4 py-2 mx-auto mt-3 rounded-3xl bg-[#dce6f6] text-[12px] text-[#2a66c3]">
          View Details
        </div>
      </div>
    </div>
  );
};

export default Card;
