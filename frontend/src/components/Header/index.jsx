import React from "react";
import { CloseSVG } from "../../assets/images";
import { Img, Button, Input } from "./..";

export default function Header({ ...props }) {
  const [searchBarValue, setSearchBarValue] = React.useState("");

  return (
    <header {...props} className={`${props.className} flex items-center pt-[7px] pb-2 bg-gray-300 shadow-xs`}>
      <div className="container-xs flex items-center justify-between gap-5 md:flex-col md:p-5">
        <Img src="images/img_header_logo.png" alt="header logo" className="h-[30px] w-[154px] object-contain" />
        <Input
          name="Search Bar"
          placeholder={`Search anything here...`}
          value={searchBarValue}
          onChange={(e) => setSearchBarValue(e)}
          prefix={
            <div className="flex h-[16px] w-[16px] items-center justify-center">
              <Img src="images/img_search.svg" alt="search" className="h-[16px] w-[16px] cursor-pointer" />
            </div>
          }
          suffix={
            searchBarValue?.length > 0 ? (
              <CloseSVG onClick={() => setSearchBarValue("")} height={16} width={16} />
            ) : null
          }
          className="flex h-[44px] w-[41%] items-center justify-center gap-2.5 rounded-[22px] bg-white-A700 pl-[15px] pr-[35px] text-[13px] text-gray-700 md:w-full sm:pr-5"
        />
        <div className="flex w-[18%] items-center justify-between gap-5 md:w-full">
          <div className="flex gap-2.5 self-start">
            <a href="#">
              <Button className="flex h-[40px] w-[40px] items-center justify-center px-[9px]">
                <Img src="images/img_contrast.svg" />
              </Button>
            </a>
            <a href="#">
              <Button className="flex h-[40px] w-[40px] items-center justify-center px-[9px]">
                <Img src="images/img_calendar.svg" />
              </Button>
            </a>
            <a href="#">
              <Button className="flex h-[40px] w-[39px] items-center justify-center p-[9px]">
                <Img src="images/img_vector.svg" />
              </Button>
            </a>
          </div>
          <Img src="images/img_user_gray_700.png" alt="user icon" className="h-[44px] w-[34%] object-cover" />
        </div>
      </div>
    </header>
  );
}
