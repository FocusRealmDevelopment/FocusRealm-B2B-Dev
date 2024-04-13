import { useEffect, useState } from "react";
import '../Calendar.css'

const WeekwiseCalendar = () => {
  const [weeks, setWeeks] = useState([]);
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const generateWeekdays = (startDate) => {
    const weekdays = [];
    const currentDate = new Date(startDate);

    for (let i = 0; i < 7; i++) {
      weekdays.push({
        date: new Date(currentDate),
        day: daysOfWeek[currentDate.getDay()],
        month: currentDate.getMonth(),
        number: String(currentDate.getDate()).padStart(2, '0'),
        year: currentDate.getFullYear()
      });
      currentDate.setDate(currentDate.getDate() + 1);
    }
    setWeeks(weekdays);
  }

  const prev = () => {
    const newStartDate = new Date(weeks[0].date);
    newStartDate.setDate(newStartDate.getDate() - 1);

    const newWeeks = [...weeks];
    newWeeks.pop();
    newWeeks.unshift({
      date: newStartDate,
      day: daysOfWeek[newStartDate.getDay()],
      month: newStartDate.getMonth(),
      number: String(newStartDate.getDate()).padStart(2, '0'),
      year: newStartDate.getFullYear()
    });

    setWeeks(newWeeks);
    console.log(weeks);
  }

  const next = () => {
    const newStartDate = new Date(weeks[weeks.length - 1].date);
    newStartDate.setDate(newStartDate.getDate() + 1);

    const newWeeks = [...weeks];
    newWeeks.shift();
    newWeeks.push({
      date: newStartDate,
      day: daysOfWeek[newStartDate.getDay()],
      month: newStartDate.getMonth(),
      number: String(newStartDate.getDate()).padStart(2, '0'),
      year: newStartDate.getFullYear()
    });

    setWeeks(newWeeks);
    console.log(weeks);
  }
  useEffect(() => {
    generateWeekdays(new Date());
  }, []);
  return (
    <div className="">
      <div className="calendar-week-3">
        {weeks.map((wk, e) => {
          return (
            <div key={e} className="" style={{ height: '80px' }}>
              <div className="calendar-day-3">
                <p className="date-num">{wk.number}</p>
                <div className="flex justify-center items-center w-full">
                  <p>{wk.day}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <div></div>
      </div>
    </div>
  )
}

export default WeekwiseCalendar