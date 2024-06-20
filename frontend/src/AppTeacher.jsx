import "./App.css";
import Navbar from "./components/navbar/Navbar";
import SidePanel from "./components/sidePanel/SidePanel";
import { Outlet, useLocation } from "react-router-dom";
import styles from "./styles/app.module.css";
import store from "./store/store";
import { useEffect } from "react";
// import { loadUser } from "./actions/userAction";
import WidgetPanel from "./components/widgetPanel/WidgetPanel";
import TeacherAssignmentWidget from "./components/widgetPanel/widgetComponents/TeacherAssignmentWidget/TeacherAssignmentWidget";

function AppTeacher() {
  useEffect(() => {
    // store.dispatch(loadUser());
  }, []);

  const location = useLocation();
  const isTeacherAssignmentPage = location.pathname.includes("/teacher/teacherassignment");
  const isTeacherCalendarPage = location.pathname.includes("/teacher/teachercalendar");

  // Add console log for debugging
  return (
    <div className={`${styles.body}`}>
      <div className={`${styles.navBody}`}>
        <Navbar />
      </div>
      <div className={`${styles.mainBody}`}>
        <SidePanel />
        <Outlet />
        {!isTeacherCalendarPage && (
          isTeacherAssignmentPage ? <TeacherAssignmentWidget /> : <WidgetPanel />
        )}
      </div>
    </div>
  );
}

export default AppTeacher;
