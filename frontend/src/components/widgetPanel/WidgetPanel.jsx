// import React from 'react';
import SessionWidget from "./widgetComponents/sessionWidget/SessionWidget";
import CalendarWidget from "./widgetComponents/calendarWidget/CalendarWidget";
import CommonWidget from "./widgetComponents/commonWidget/CommonWidget";
import EventsWidget from "./widgetComponents/eventsWidget/EventsWidget";
import GoingOnWidget from "./widgetComponents/goingOnWidget/GoingOnWidget";
import styles from "./widgetpanel.module.css";

const WidgetPanel = () => {
  return (
    <div className={`${styles.body} flex flex-col gap-4`}>
      <SessionWidget />
      <CalendarWidget />
      <CommonWidget heading={"Upcoming Events"}>
        <EventsWidget />
      </CommonWidget>
      <CommonWidget heading={"What's Going On"}>
        <GoingOnWidget />
      </CommonWidget>
    </div>
  );
};

export default WidgetPanel;
