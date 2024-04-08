import "./App.css";
import Navbar from "./components/navbar/Navbar";
import SidePanel from "./components/sidePanel/SidePanel";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <div>
        <SidePanel />
      </div>
      <div>
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
