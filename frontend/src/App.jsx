import "./App.css";
import Navbar from "./components/navbar/Navbar";
import SidePanel from "./components/sidePanel/SidePanel";
import { Outlet } from "react-router-dom";
import styles from "./app.module.css";

function App() {
  return (
    <div className={styles.body}>
      <div className={styles.sidePanelBody}>
        <SidePanel />
      </div>
      <div className={styles.mainBody}>
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
