import "./App.css";
import SidePanel from "./components/sidePanel/SidePanel";
import { Outlet, useLocation } from "react-router-dom";
import styles from "./styles/app.module.css";
import store from "./store/store";
import { useEffect, useState } from "react";

import { loadAdmin } from "./actions/adminAction";

import WidgetPanel from "./components/widgetPanel/WidgetPanel";
import TeacherAssignmentWidget from "./components/widgetPanel/widgetComponents/TeacherAssignmentWidget/TeacherAssignmentWidget";
import Navbar from "./components/navbar/Navbar.jsx";

function App() {
  useEffect(() => {
    store.dispatch(loadAdmin());
  }, []);

  const location = useLocation();
  const isTeacherAssignmentPage = location.pathname.includes(
    "/teacher/teacherassignment"
  );
  const isCalendarPage = location.pathname === "/calendar";
  const isForumPage = location.pathname === "/forum";

  // Add state for right sidebar visibility
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const handleSidebarOpen = () => {
    setSidebarVisible(true);
  };

  const handleSidebarClose = () => {
    setSidebarVisible(false);
  };


  // Add console log for debugging
  console.log("Current Pathname:", location.pathname);
  console.log("Is Teacher Assignment Page:", isTeacherAssignmentPage);
  console.log("Is Calendar Page:", isCalendarPage);
  console.log("Is Forum Page:", isForumPage);


  return (
    <div className={`${styles.body}`}>
      <div className={`${styles.navBody}`}>
        <Navbar />
      </div>
      <div className={`${styles.mainBody}`}>
        <SidePanel />
        <Outlet
          context={{ handleSidebarOpen, handleSidebarClose, isSidebarVisible }}
        />
        {!isSidebarVisible &&
          !isCalendarPage &&
          !isForumPage &&
          (isTeacherAssignmentPage ? (
            <TeacherAssignmentWidget />
          ) : (
            <WidgetPanel />
          ))}
      </div>
    </div>
  );
}

export default App;
