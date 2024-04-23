import { NavLink } from "react-router-dom";

const SideNavIcon = ({ Svg, Name, Path }) => {
    return (
        <NavLink
            to={Path}
            className={({ isActive }) =>
                `flex items-center w-full rounded-[30px] px-[25px] py-[10px] my-2 ${isActive ? "text-[#0148B7] bg-[#E1F5FF]" : "text-[#444444]"}`
            }
        >
            <Svg />
            <span className='pl-2'>{Name}</span>
        </NavLink >
    )
}

export default SideNavIcon