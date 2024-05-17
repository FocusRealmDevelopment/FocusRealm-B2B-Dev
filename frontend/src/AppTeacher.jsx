import "./App.css";
import Navbar from "./components/navbar/Navbar";
import SidePanel from "./components/sidePanel/SidePanel";
import { Outlet } from "react-router-dom";
import styles from "./styles/app.module.css";
// import { useSelector } from "react-redux";
import store from "./store/store";
import { useEffect } from "react";
import { loadUser } from "./actions/userAction";
import WidgetPanel from "./components/widgetPanel/WidgetPanel";
import SidePanelTeacher from "./components/sidePanelTeacher/SidePanelTeacher";
function AppTeacher() {
  // const themeMode = useSelector((state) => state.theme.themeMode);

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <div className={`${styles.body}`}>
      <div className={`${styles.navBody}`}>
        <Navbar />
      </div>
      <div className={`${styles.mainBody}`}>
        <SidePanelTeacher />
        <Outlet />
        <WidgetPanel />
      </div>
    </div>
  );
}

export default AppTeacher;
