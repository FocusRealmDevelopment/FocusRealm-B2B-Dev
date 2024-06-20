// import React from 'react';
import TeacherAssignmentWidget from "./widgetComponents/TeacherAssignmentWidget/TeacherAssignmentWidget";
import CalendarWidget from "./widgetComponents/calendarWidget/CalendarWidget";
import CommonWidget from "./widgetComponents/commonWidget/CommonWidget";
import EventsWidget from "./widgetComponents/eventsWidget/EventsWidget";
import GoingOnWidget from "./widgetComponents/goingOnWidget/GoingOnWidget";
import styles from "./widgetpanel.module.css";

const WidgetPanelTeacher = () => {
  return (
    <div className={`${styles.body} flex flex-col gap-4`}>
      
      <CommonWidget heading={"Upcoming Events"}>
      <TeacherAssignmentWidget />
      </CommonWidget>
      <CommonWidget heading={"What's Going On"}>
        <GoingOnWidget />
      </CommonWidget>
    </div>
  );
};

export default WidgetPanelTeacher;
