// import React from 'react';
import "../../../../styles/global.css";
import styles from "./calendarwidget.module.css";

const CalendarWidget = () => {
  return (
    <div className={`relative h-52 ${styles.body}`}>
      <h1 className={`poppins-semibold`}>Calendar</h1>
      <p className="absolute left-2/4 top-2/4 -translate-x-1/2 -translate-y-1/2 text-xs">
        Calendar widget goes here
      </p>
    </div>
  );
};

export default CalendarWidget;
