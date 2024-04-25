/* eslint-disable react/prop-types */
import { Component } from "react";
// import CalanderDays from './CalendarDays';
// import '../Calendar.css'

const CalanderDays = ({ day, changeCurrentDay }) => {
  let firstDayOfMonth = new Date(day.getFullYear(), day.getMonth(), 1);
  let weekdayOfFirstDay = firstDayOfMonth.getDay();
  let currentDays = [];
  for (let i = 0; i < 42; i++) {
    if (i === 0 && weekdayOfFirstDay === 0) {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 7);
    } else if (i === 0) {
      firstDayOfMonth.setDate(
        firstDayOfMonth.getDate() + (i - weekdayOfFirstDay)
      );
    } else {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
    }

    let calendarDay = {
      currentMonth: firstDayOfMonth.getMonth() === day.getMonth(),
      date: new Date(firstDayOfMonth),
      month: firstDayOfMonth.getMonth(),
      number: String(firstDayOfMonth.getDate()).padStart(2, "0"),
      selected: firstDayOfMonth.toDateString() === day.toDateString(),
      year: firstDayOfMonth.getFullYear(),
    };

    currentDays.push(calendarDay);
  }
  let weeks = [];
  let week = [];
  currentDays.forEach((day, index) => {
    week.push(day);
    if ((index + 1) % 7 === 0 || index === currentDays.length - 1) {
      weeks.push(week);
      week = [];
    }
  });
  // console.log(currentDays)
  return (
    <div className="table-content-3 h-full">
      {weeks.map((date, index) => (
        <div key={index} className="calendar-week-3 h-[16.3%]">
          {date.map((day, e) => (
            <button
              key={e}
              className={
                "calendar-day-3" +
                (day.currentMonth ? " current-3" : "") +
                (day.selected ? " selected-3" : "")
              }
              onClick={() => changeCurrentDay(day)}
            >
              <div className="flex justify-between w-full">
                <p className="date-num">{day.number}</p>
                <p className="right-edge">Holiday</p>
                {/* <p className='right-edge'>Republic Day</p> */}
                {/* { index > 7 && index % 3 === 0 ? <p className='right-edge'>Holiday</p> : null} */}
                {/* { index > 7 && index % 2 === 0 ? <p className='right-edge'>Republic Day</p> : null} */}
              </div>
              <div className="flex flex-col px-2 text-[11px] w-full">
                {/* <div className='flex bg-[#DAF2E2] items-center w-full py-[0.2px] px-3 rounded-l-[65px] border border-[#5DF590] my-1'>
                                    <span className='h-[8px] w-[8px] rounded-[50%] bg-[#5DF590]'></span>
                                    <span className='pl-2'>Event</span>
                                </div> */}
                {/* <div className='flex bg-[#FFE5E5] items-center w-full py-[0.2px] px-3 rounded-l-[65px] border border-[#FF3434] my-1'>
                                    <span className='h-[8px] w-[8px] rounded-[50%] bg-[#FF3434]'></span>
                                    <span className='pl-2'>Assignment</span>
                                </div> */}
                {/* <div className='flex bg-[#DAF2E2] items-center w-full py-[0.2px] px-3 rounded-l-[65px] border border-[#5DF590] my-1'>
                                    <span className='h-[8px] w-[8px] rounded-[50%] bg-[#5DF590]'></span>
                                    <span className='pl-2'>Event</span>
                                </div> */}
                {/* <div className='flex bg-[#FFE5E5] items-center w-full py-[0.2px] px-3 rounded-l-[65px] border border-[#FF3434] my-1'>
                                    <span className='h-[8px] w-[8px] rounded-[50%] bg-[#FF3434]'></span>
                                    <span className='pl-2'>Assignment</span>
                                </div> */}
              </div>
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

class MonthlyCalendar extends Component {
  constructor(props) {
    super(props);

    this.weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    this.months = [
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

    this.state = {
      currentDay: props.currentDate || new Date(),
    };
  }

  changeCurrentDay = (day) => {
    this.setState({ currentDay: new Date(day.year, day.month, day.number) });
  };

  goToPreviousMonth = () => {
    const { currentDay } = this.state;
    const previousMonth = new Date(
      currentDay.getFullYear(),
      currentDay.getMonth() - 1,
      1
    );
    this.setState({ currentDay: previousMonth });
  };

  goToNextMonth = () => {
    const { currentDay } = this.state;
    const nextMonth = new Date(
      currentDay.getFullYear(),
      currentDay.getMonth() + 1,
      1
    );
    this.setState({ currentDay: nextMonth });
  };

  render() {
    return (
      <div
        className="calendar-3 w-full"
        style={{ height: "calc(100% - 23px)" }}
      >
        <div className="calendar-body-3 h-full">
          <div className="table-header-3 border-b-[0.5px] border-[#637799]">
            {this.weekdays.map((weekday, e) => {
              return (
                <div key={e} className="weekday-3">
                  <p>{weekday}</p>
                </div>
              );
            })}
          </div>
          <CalanderDays
            day={this.state.currentDay}
            changeCurrentDay={this.changeCurrentDay}
          />
        </div>
      </div>
    );
  }
}

export default MonthlyCalendar;
