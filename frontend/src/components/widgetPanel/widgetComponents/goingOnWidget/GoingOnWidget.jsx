// import React from 'react';
import styles from "./goingonwidget.module.css";
import goingOn from "../../../../assets/images/goingOn.jpg";

const GoingOnWidget = () => {
  return (
    <div className={`${styles.body} w-full mt-2`}>
      <div className="w-full relative">
        <img
          className="h-14 rounded-lg w-full"
          src={goingOn}
          alt={"some-pic"}
        />
        <div className="absolute top-[10%] right-0 text-[10px] bg-red-700 py-1 px-3 rounded-l-3xl">
          Live
        </div>
      </div>
      <div>
        <h1 className="text-blue-700">Integration & Differntiation</h1>
        <p className="flex items-center gap-3 text-[12px]">
          Math <span className={`${styles.blueDot}`}></span> 12th Class
        </p>
        <p className="text-blue-700 text-[12px]">Started at 10:30 am</p>
        <div className="w-11/12 mx-auto text-center py-2 rounded-[24px] bg-blue-700 my-5 text-white">
          Connect
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default GoingOnWidget;
