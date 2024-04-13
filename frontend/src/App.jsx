import "./App.css";
import Navbar from "./components/navbar/Navbar";
import SidePanel from "./components/sidePanel/SidePanel";
import { Outlet } from "react-router-dom";
import styles from "./app.module.css";
import { useSelector } from "react-redux";
import store from "./store/store";
import { useEffect } from "react";
import { loadUser } from "./actions/userAction";
function App() {
  const themeMode = useSelector((state) => state.theme.themeMode);

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <div className={styles.body}>
      <div className={styles.sidePanelBody}>
        <SidePanel />
      </div>
      <div
        className={styles.mainBody}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <Navbar />
        <div
          style={{
            flex: 1,
            paddingBottom: "60px",
            backgroundColor:
              themeMode === "light" ? "rgb(237, 240, 245)" : "rgb(38, 43, 51)",
            display: "inline-block",
          }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
