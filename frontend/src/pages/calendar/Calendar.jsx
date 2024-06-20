import React from 'react';
import { useState } from 'react';
import dayjs from 'dayjs';
import { getMonth } from './Monthview/getmonth';
import { getWeek } from './Week/getWeek';
import { getEvent } from './Day/getEvent';
import MonthWrapper from './Monthview/monthwrapper';
import WeekWrapper from './Week/WeekWrapper';
import DayWrapper from './Day/DayWrapper';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [view, setView] = useState('Month'); // Default view set to 'Month'
  const currentMonth = getMonth(currentDate.year(), currentDate.month());
  const currentWeek = getWeek(currentDate);
  const events = getEvent(currentDate);

  const handlePrevious = () => {
    if (view === 'Month') {
      setCurrentDate(prevDate => prevDate.subtract(1, 'month'));
    } else if (view === 'Week') {
      setCurrentDate(prevDate => prevDate.subtract(1, 'week'));
    }
    else {
      setCurrentDate(prevDate => prevDate.subtract(1, 'day'));
    }
  };

  const handleNext = () => {
    if (view === 'Month') {
      setCurrentDate(prevDate => prevDate.add(1, 'month'));
    } else if (view === 'Week') {
      setCurrentDate(prevDate => prevDate.add(1, 'week'));
    } else {
      setCurrentDate(prevDate => prevDate.add(1, 'day'));
    }
  };

  const handletoday = () => {
    setCurrentDate(dayjs());
  };

  const views = {
    'Month': <MonthWrapper month={currentMonth} />,
    'Week': <WeekWrapper week={currentWeek} currentDate={currentDate} />,
    'Day': <DayWrapper day={currentDate} events={events} />,
  };

  return (
    <div className="flex flex-col  w-full flex-grow  relative gap-8 p-4">
      <div className="flex gap-4 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 p-3 border rounded-full">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>
        <p className="font-normal text-[20px] text-[#000000] leading-[30px]">Calendar</p>
      </div>

      <div className="flex justify-between items-center w-full max-w-3xl">
        <div className="text-[#0148b7] py-2 px-6 bg-[#dce6f6] rounded-full cursor-pointer" onClick={handletoday}>
          Today
        </div>

        <div className="flex items-center justify-center gap-2">
          <svg onClick={handlePrevious} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" className="w-6 h-6 cursor-pointer">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
          <p className="font-normal text-[18px] text-[#000000]">
            {view === 'Month' ? currentDate.format('MMMM YYYY') : `${currentDate.startOf('week').format('MMM D')} - ${currentDate.endOf('week').format('MMM D, YYYY')}`}
          </p>
          <svg onClick={handleNext} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" className="w-6 h-6 cursor-pointer">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </div>

        <div className="flex items-center font-normal text-[14px] leading-[21px] rounded-full border">
          <p className={`border-r px-2 cursor-pointer ${view === 'Day' ? 'text-[#0148b7] py-2 px-6 bg-[#b8d0f6] rounded-full cursor-pointer' : ''}`} onClick={() => setView('Day')}>Day</p>
          <p
            className={`px-2 cursor-pointer ${view === 'Week' ? 'text-[#0148b7] py-2 px-6 bg-[#bdd4f9] rounded-full cursor-pointer' : ''}`}
            onClick={() => setView('Week')}
          >
            Week
          </p>
          <span
            className={`cursor-pointer px-2 ${view === 'Month' ? 'text-[#0148b7] py-2 px-6 bg-[#b8d0f6] rounded-full cursor-pointer' : ''}`}
            onClick={() => setView('Month')}
          >
            Month
          </span>
        </div>
      </div>

      <div className="w-full max-w-4xl">
        {views[view]}
      </div>
    </div>
  );
};

export default Calendar;
