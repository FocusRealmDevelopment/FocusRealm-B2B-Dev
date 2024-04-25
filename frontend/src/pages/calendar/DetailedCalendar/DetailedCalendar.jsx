import { useState } from "react";
import OrdinaryCalendar from "./OrdinaryCalendar";
import "./DetailedCalendar.css";
import MonthlyCalendar from "./MonthlyCalendar";
import WeekwiseCalendar from "./WeekwiseCalendar2";
import DaywiseCalendar from "./DaywiseCalendar";
import { useSelector } from "react-redux";
import { FaCheck } from "react-icons/fa";

const StaticShowCase = () => {
  const [checkList, setCheckList] = useState({
    event: false,
    assignment: false,
    focusPrd: false,
    test: false,
  });
  // const themeMode = useSelector((state) => state.theme.themeMode);
  return (
    <div className="py-6">
      <div className="flex flex-col border-b border-b-[#637799] py-2 border-dashed">
        <div className="flex bg-[#DAF2E2] items-center py-2 px-3 rounded-l-[65px] border border-[#5DF590] my-1">
          <span className="h-[16px] w-[16px] rounded-[50%] bg-[#5DF590]"></span>
          <span className="pl-2">Event</span>
        </div>
        <div className="flex bg-[#FFE5E5] items-center py-2 px-3 rounded-l-[65px] border border-[#FF3434] my-1">
          <span className="h-[16px] w-[16px] rounded-[50%] bg-[#FF3434]"></span>
          <span className="pl-2">Assignment</span>
        </div>
        <div className="flex bg-[#F2DAF2] items-center py-2 px-3 rounded-l-[65px] border border-[#F232F5] my-1">
          <span className="h-[16px] w-[16px] rounded-[50%] bg-[#F232F5]"></span>
          <span className="pl-2">Focus Period</span>
        </div>
        <div className="flex bg-[#EDEDD5] items-center py-2 px-3 rounded-l-[65px] border border-[#F5CC00] my-1">
          <span className="h-[16px] w-[16px] rounded-[50%] bg-[#F5CC00]"></span>
          <span className="pl-2">Test</span>
        </div>
      </div>
      <div>
        <h1 className="text-[#232D40] font-semibold text-[18px] my-3">
          Show only:
        </h1>
        <button
          className="flex items-center py-2 px-3 my-1"
          onClick={() =>
            setCheckList({ ...checkList, event: !checkList.event })
          }
        >
          <span className="h-[16px] w-[16px] bg-[#DAF2E2] border border-[#5DF590]">
            {checkList.event && <FaCheck className="text-[#00ff55] p-[2px]" />}
          </span>
          <span className="pl-2">Event</span>
        </button>
        <button
          className="flex items-center py-2 px-3 my-1"
          onClick={() =>
            setCheckList({ ...checkList, assignment: !checkList.assignment })
          }
        >
          <span className="h-[16px] w-[16px] bg-[#FFE5E5] border border-[#FF3434]">
            {checkList.assignment && (
              <FaCheck className="text-[#ff0000] p-[2px]" />
            )}
          </span>
          <span className="pl-2">Assignment</span>
        </button>
        <button
          className="flex items-center py-2 px-3 my-1"
          onClick={() =>
            setCheckList({ ...checkList, focusPrd: !checkList.focusPrd })
          }
        >
          <span className="h-[16px] w-[16px] bg-[#F2DAF2] border border-[#F232F5]">
            {checkList.focusPrd && (
              <FaCheck className="text-[#F232F5] p-[2px]" />
            )}
          </span>
          <span className="pl-2">Focus Period</span>
        </button>
        <button
          className="flex items-center py-2 px-3 my-1"
          onClick={() => setCheckList({ ...checkList, test: !checkList.test })}
        >
          <span className="h-[16px] w-[16px] bg-[#EDEDD5] border border-[#F5CC00]">
            {checkList.test && <FaCheck className="text-[#F5CC00] p-[2px]" />}
          </span>
          <span className="pl-2">Test</span>
        </button>
      </div>
    </div>
  );
};

const DetailedCalendar = () => {
  const themeMode = useSelector((state) => state.theme.themeMode);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentState, setCurrentState] = useState(2);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const goToPreviousMonth = () => {
    const previousMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1,
      1
    );
    console.log("pm", previousMonth);
    setCurrentDate(previousMonth);
  };

  const goToNextMonth = () => {
    const nextMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      1
    );
    console.log("nm");
    setCurrentDate(nextMonth);
  };
  return (
    <div
      className={`py-5 px-8 ${
        themeMode === "light" ? "bg-[#EDF0F5]" : "bg-[#262B33]"
      } `}
    >
      <div className="">
        <div className="flex">
          <h1 className="text-[#4F81D1] font-semibold text-[28px] mx-6">
            Calendar
          </h1>
          <div className="flex items-center text-[18px]">
            <label className="text-[#637799] mx-6 typ-1">
              <input
                type="radio"
                name="type"
                className="text-[green] opacity-0"
              />
              <span className="absolute h-[25px] w-[25px] rounded-[50%] bg-[#eee] hover:bg-[#ccc] checked:bg-[#2196F3] chk-1">
                <span className="chk-11"></span>
              </span>
              <span className="pl-7">To-do-List</span>
            </label>
            <label className="text-[#637799] mx-6 typ-2">
              <input type="radio" name="type" className="opacity-0" />
              <span className="absolute h-[25px] w-[25px] rounded-[50%] bg-[#eee] hover:bg-[#ccc] checked:bg-[#2196F3] chk-2"></span>
              <span className="pl-7">Attendance</span>
            </label>
          </div>
        </div>
        <div className="flex border-[0.5px] rounded border-[#637799]">
          <div
            className="w-[300px] border-r-[0.5px] p-[15px] border-[#637799]"
            style={{ paddingRight: currentState === 2 ? "" : "65px" }}
          >
            <div>
              <OrdinaryCalendar currentDate={currentDate} />
              <StaticShowCase />
            </div>
            {/* <div></div> */}
          </div>
          <div className="" style={{ width: "calc(100% - 300px)" }}>
            <div className="flex items-center justify-between py-2 px-8 h-[100px] border-b-[0.5px] border-[#637799]">
              <div className="flex items-center">
                <button
                  className="btn-1 bg-[#4F81D1] hover:bg-[#789dda]"
                  style={{
                    background: themeMode === "light" ? "#4F81D1" : "#0148B7",
                  }}
                >
                  Today
                </button>
                <div className="navi-btn-container" style={{ margin: "5px" }}>
                  <button
                    className="navi-btn btn-2 hov"
                    style={{ borderStyle: "none" }}
                    onClick={goToPreviousMonth}
                  >
                    {/* <svg width="7" height="9" viewBox="0 0 7 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.392632 4.11293L5.22358 0.00292969L6.12402 0.768999L2.19353 4.11293L6.12402 7.45686L5.22358 8.22293L0.392632 4.11293Z" fill="#637799" />
                            </svg> */}
                    <span>{`<`}</span>
                  </button>
                  <button
                    className="navi-btn btn-2 hov"
                    style={{ borderStyle: "none" }}
                    onClick={goToNextMonth}
                  >
                    {/* <svg width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.8769 4.10777L1.04596 8.21777L0.145508 7.4517L4.076 4.10777L0.145508 0.763843L1.04596 -0.00222686L5.8769 4.10777Z" fill="#637799" />
                            </svg> */}
                    <span>{`>`}</span>
                  </button>
                </div>
                <h1 className="mx-4">
                  {months[currentDate.getMonth()]}, {currentDate.getFullYear()}
                </h1>
              </div>
              <div className="flex items-center">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  className="cursor-pointer mx-4"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.5427 17.577L10.2619 11.2962C9.76195 11.7091 9.18695 12.0321 8.53695 12.2655C7.88695 12.4988 7.21451 12.6155 6.51965 12.6155C4.81048 12.6155 3.36396 12.0237 2.1801 10.8401C0.99623 9.65655 0.404297 8.21041 0.404297 6.50169C0.404297 4.79296 0.99608 3.34628 2.17965 2.16167C3.36321 0.977065 4.80936 0.384766 6.5181 0.384766C8.22681 0.384766 9.67348 0.9767 10.8581 2.16057C12.0427 3.34443 12.635 4.79095 12.635 6.50012C12.635 7.21422 12.5151 7.89627 12.2754 8.54627C12.0356 9.19627 11.7158 9.76165 11.3158 10.2424L17.5965 16.5232L16.5427 17.577ZM6.51965 11.1155C7.80811 11.1155 8.89946 10.6684 9.7937 9.77417C10.6879 8.87993 11.135 7.78858 11.135 6.50012C11.135 5.21165 10.6879 4.1203 9.7937 3.22607C8.89946 2.33183 7.80811 1.88472 6.51965 1.88472C5.23118 1.88472 4.13983 2.33183 3.2456 3.22607C2.35138 4.1203 1.90427 5.21165 1.90427 6.50012C1.90427 7.78858 2.35138 8.87993 3.2456 9.77417C4.13983 10.6684 5.23118 11.1155 6.51965 11.1155Z"
                    fill="#637799"
                  />
                </svg>
                <div className="flex">
                  <button
                    className={`rounded-l-[50px] btn-2 border-[0.5px] border-[#637799] text-[#232D40] py-1 px-5 hover:bg-slate-300 ${
                      currentState === 0 ? "bg-[#D8DFEB]" : ""
                    }`}
                    onClick={() => setCurrentState(0)}
                  >
                    Day
                  </button>
                  <button
                    className={`border-y-[0.5px] btn-2 border-[#637799] text-[#232D40] py-1 px-5 hover:bg-slate-300 ${
                      currentState === 1 ? "bg-[#D8DFEB]" : ""
                    }`}
                    onClick={() => setCurrentState(1)}
                  >
                    Week
                  </button>
                  <button
                    className={`rounded-r-[50px] btn-2 border-[0.5px] border-[#637799] text-[#232D40] py-1 px-5 hover:bg-slate-300 ${
                      currentState === 2 ? "bg-[#D8DFEB]" : ""
                    }`}
                    onClick={() => setCurrentState(2)}
                  >
                    Month
                  </button>
                </div>
              </div>
            </div>
            <div className="" style={{ height: "calc(100% - 100px)" }}>
              {currentState === 0 ? <DaywiseCalendar /> : null}
              {currentState === 1 ? <WeekwiseCalendar /> : null}
              {currentState === 2 ? <MonthlyCalendar /> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedCalendar;
