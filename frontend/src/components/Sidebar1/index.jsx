import React from "react";
import { Img, Text } from "./..";
import { MenuItem, Menu, Sidebar, sidebarClasses } from "react-pro-sidebar";

export default function Sidebar1({ ...props }) {
  const [collapsed, setCollapsed] = React.useState(false);

  //use this function to collapse/expand the sidebar
  //function collapseSidebar() {
  //    setCollapsed(!collapsed)
  //}

  return (
    <Sidebar
      {...props}
      width="269px !important"
      collapsedWidth="80px !important"
      collapsed={collapsed}
      rootStyles={{ [`.${sidebarClasses.container}`]: { gap: 13 } }}
      className={`${props.className} flex flex-col h-screen gap-[13px] top-0 bg-white-A700 shadow-sm !sticky overflow-auto rounded-[20px] md:hidden`}
    >
      <div className="relative h-[188px] self-stretch">
        <div className="absolute left-0 right-0 top-[0.00px] m-auto w-full rounded-tl-[20px] rounded-tr-[20px] bg-blue-400">
          <Img
            src="images/img_rectangle_5.png"
            alt="profile image"
            className="h-[151px] w-full rounded-tl-[20px] rounded-tr-[20px] object-cover md:h-auto"
          />
        </div>
        <div className="absolute bottom-[0.00px] left-0 right-0 m-auto w-[58%] rounded-[20px] bg-white-A700 p-[5px] shadow-md">
          <Img
            src="images/img_rectangle_6.png"
            alt="column image"
            className="h-[145px] w-[145px] rounded-[15px] object-cover"
          />
        </div>
      </div>
      <Menu
        menuItemStyles={{
          button: {
            padding: "12px 12px 12px 37px",
            gap: "10px",
            alignSelf: "start",
            color: "#444444",
            fontWeight: 400,
            fontSize: "14px",
            [`&:hover, &.ps-active`]: { color: "#222222", fontWeight: "600 !important" },
          },
        }}
        className="flex w-full flex-col items-center self-stretch"
      >
        <div className="self-stretch">
          <MenuItem>Patrick Dash R</MenuItem>
        </div>
        <Text
          size="xl"
          as="p"
          className="flex items-center justify-center rounded-[12px] bg-light_blue-100 px-3 py-0.5 !text-black-900"
        >
          8 Grade
        </Text>
        <div className="flex flex-col items-center self-stretch">
          <Text size="lg" as="p" className="!text-gray-700">
            Horizon Public School, Manali
          </Text>
          <MenuItem icon={<Img src="images/img_home.svg" alt="home icon" className="h-[20px] w-[20px]" />}>
            Home
          </MenuItem>
          <MenuItem icon={<Img src="images/img_checkmark.svg" alt="tasks icon" className="h-[21px] w-[21px]" />}>
            Tasks
          </MenuItem>
          <MenuItem
            icon={<Img src="images/img_calendar_gray_800.svg" alt="calendar icon" className="h-[21px] w-[21px]" />}
          >
            Calender
          </MenuItem>
          <MenuItem icon={<Img src="images/img_file.svg" alt="forum icon" className="h-[21px] w-[21px]" />}>
            Forum
          </MenuItem>
          <MenuItem icon={<Img src="images/img_user.svg" alt="homework icon" className="h-[21px] w-[21px]" />}>
            Homeworks
          </MenuItem>
          <MenuItem icon={<Img src="images/img_profile.svg" alt="help icon" className="h-[21px] w-[21px]" />}>
            Help
          </MenuItem>
        </div>
        <div className="mt-[305px] flex self-stretch">
          <MenuItem icon={<Img src="images/img_arrow_left.svg" alt="logout icon" className="h-[21px] w-[21px]" />}>
            Logout
          </MenuItem>
        </div>
      </Menu>
    </Sidebar>
  );
}
