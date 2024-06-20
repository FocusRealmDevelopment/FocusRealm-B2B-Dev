import { getEvent } from "../../../calendar/Day/getEvent";
import DayWrapper from "../../../calendar/Day/DayWrapper";
import dayjs from "dayjs";
import { useEffect, useRef, useState } from "react";
import Createtask from './taskcreation/createtask.jsx';

const TeacherCalendar = () => {

    const [currentDate, setCurrentDate] = useState(dayjs());
    const dropdownref = useRef();
    const [dropdown, setdropdown] = useState(false);
    const [popup,setpopup] = useState(false);
    const events = getEvent(currentDate);

    const handlePrevious = () => {
          setCurrentDate(prevDate => prevDate.subtract(1, 'month'));
      };
    
      const handleNext = () => {
          setCurrentDate(prevDate => prevDate.add(1, 'month'));
      };

      const handlepopup = () => {
         setpopup(prev => !prev)
      }

    

    const handledropdown = () => {
        setdropdown(prev => !prev)
    }

    const handleClickOutside = (event) => {
         if(dropdownref.current&& !dropdownref.current.contains(event.target)){
            setdropdown(false)
         }
    }

    useEffect(() => {
        if (dropdown) {
          document.addEventListener('mousedown', handleClickOutside);
        } else {
          document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [dropdown]);



    return (
        <div className="flex flex-col  w-full flex-grow   gap-8 p-4" >

            <div className="flex items-center justify-between">
                <div className="flex gap-2 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 p-2 border rounded-full">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                    <p className="font-normal text-[20px] text-[#000000] leading-[30px]">Calendar</p>
                </div>

                <div className="relative w-1/7 flex flex-col justify-between items-center" ref={dropdownref}>
                    <div className="flex" onClick={handledropdown}>
                        <label className="py-[6px] px-[15px] bg-[#0148b7] text-white inline-flex rounded-[20px] gap-1 text-[14px] font-normal leading-[21px]">
                            Create
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </label>
                    </div>

                    {dropdown && (
                        <div className="absolute top-full text-nowrap flex flex-col gap-2 border w-full rounded-lg py-2 leading-[21px] font-normal bg-white ">
                            <h1 className="text-[14px] border-b p-1 border-dotted border-[#cccccc] cursor-pointer" onClick={handlepopup}>Task</h1>
                            <h2 className="text-[14px] border-b p-1 border-dotted border-[#cccccc] cursor-pointer">Assignment</h2>
                            <h3 className="text-[14px] p-1 cursor-pointer">Study Session</h3>
                        </div>
                    )}
                </div>
            </div>


            <div className="flex justify-between items-center w-full">
                <div className="text-[#0148b7] py-2 px-6 bg-[#dce6f6] rounded-full cursor-pointer" onClick={() => {setCurrentDate(dayjs())}}>
                    Today
                </div>

                <div className="flex items-center justify-center gap-2">
          <svg onClick={handlePrevious} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" className="w-6 h-6 cursor-pointer" >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
          <p className="font-normal text-[18px] text-[#000000]">{currentDate.format('MMMM YYYY')} 
          </p>
          <svg onClick={handleNext} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" className="w-6 h-6 cursor-pointer">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </div>

                <div className="flex w-1/7 items-center font-normal text-[14px] leading-[21px] rounded-full border ">
                    <p className="border-r px-2 cursor-pointer bg-[#dce6f6] rounded-l-full py-2" >Day</p>
                    <p
                        className="px-2 cursor-pointer "
                    >
                        Week
                    </p>
                    <span
                        className="cursor-pointer px-2  "
                    >
                        Month
                    </span>
                </div>
            </div>



            <div className="w-full flex flex-grow ">
                <DayWrapper events={events} day={currentDate} />
            </div>

            {popup && <Createtask/>}

        </div>
    )
}

export default TeacherCalendar;