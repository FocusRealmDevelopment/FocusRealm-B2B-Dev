import Navbar from "./components/new_Navbar/Navbar"
import SidePanel from "./components/new_SidePanel/SidePanel"
import { Outlet } from "react-router-dom";

const App2 = () => {
    return (
        <div className="h-screen w-full bg-[#f6f6f6]">
            <Navbar />
            <div className="flex justify-center w-full" style={{ height: 'calc(100vh - 150px)' }}>
                <div className="w-[80%] h-full flex">
                    <SidePanel />
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default App2