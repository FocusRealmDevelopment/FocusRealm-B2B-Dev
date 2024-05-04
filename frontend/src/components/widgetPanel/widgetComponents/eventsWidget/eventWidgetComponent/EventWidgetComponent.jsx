/* eslint-disable react/prop-types */
// import React from 'react';
import styles from "./evenywidgetcomponent.module.css";
// import seminar from "../../../../../assets/images/seminar.png";

const EventWidgetComponent = ({
  eventName,
  eventType,
  eventDate,
  eventPhoto,
}) => {
  return (
    <div className={`${styles.body} flex justify-between items-center gap-2`}>
      <div className="w-2/5 rounded-lg">
        <img className="w-full rounded-lg" src={eventPhoto} alt={eventName} />
      </div>
      <div>
        <p className="text-[10px]">{eventName}</p>
        <p className="text-[10px]">{eventType}</p>
        <p className="text-[10px]">{eventDate}</p>
      </div>
    </div>
  );
};

export default EventWidgetComponent;
