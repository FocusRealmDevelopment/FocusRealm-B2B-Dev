// import React from 'react';
import EventWidgetComponent from "./eventWidgetComponent/EventWidgetComponent";
import styles from "./eventswidget.module.css";
import seminar from "../../../../assets/images/seminar.png";
import book_fair from "../../../../assets/images/book_fair.png";

const EventsWidget = () => {
  return (
    <div className={`${styles.body}`}>
      <EventWidgetComponent
        eventName={"Annual Seminar"}
        eventType={"Seminars & Training"}
        eventDate={"Jan 20 (09.00 AM-06.00 PM)"}
        eventPhoto={seminar}
      />
      <hr className="my-3" />
      <EventWidgetComponent
        eventName={"Book Fair"}
        eventType={"Exhibitions & Expo"}
        eventDate={"Jan 20 (09.00 AM-06.00 PM)"}
        eventPhoto={book_fair}
      />
    </div>
  );
};

export default EventsWidget;
