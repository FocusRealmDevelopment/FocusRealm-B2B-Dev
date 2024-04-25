/* eslint-disable react/prop-types */
import "../Calendar.css";

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
    <div className="table-content-2">
      {weeks.map((week, index) => (
        <div key={index} className="calendar-week-2">
          {week.map((day, e) => (
            <button
              key={e}
              className={
                "calendar-day-2" +
                (day.currentMonth ? " current-2" : "") +
                (day.selected ? " selected-2" : "")
              }
              onClick={() => changeCurrentDay(day)}
              style={{ borderStyle: "none" }}
            >
              <p>{day.number}</p>
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CalanderDays;
