import React from "react";
import { useEffect, useState } from "react";
import "../../styles/global.css";
import styles from "./smallcalendar.module.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const SmallCalendar = () => {
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

  const [currDate, setCurrDate] = useState(new Date());
  const [currMonth, setCurrMonth] = useState(currDate.getMonth());
  const [currYear, setCurrYear] = useState(currDate.getFullYear());

  useEffect(() => {
    setCurrDate(new Date());
  }, []);

  const nextHandler = () => {
    if (currMonth === 11) {
      setCurrMonth(0);
      setCurrYear(currYear + 1);
    } else {
      setCurrMonth(currMonth + 1);
    }
  };

  const prevHandler = () => {
    if (currMonth === 0) {
      setCurrMonth(11);
      setCurrYear(currYear - 1);
    } else {
      setCurrMonth(currMonth - 1);
    }
  };

  const daysOfTheWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let [firstDayOfCurrMonth, setFirstDayOfCurrMonth] = useState(0);
  let [lastDayOfCurrMonth, setLastDayOfCurrMonth] = useState(0);
  let [lastDateOfLastMonth, setLastDateOfLastMonth] = useState(0);
  let [lastDateOfCurrMonth, setLastDateOfCurrMonth] = useState(0);
  let [days, setDays] = useState([]);

  useEffect(() => {
    setFirstDayOfCurrMonth(new Date(currYear, currMonth, 1).getDay());
    setLastDateOfCurrMonth(new Date(currYear, currMonth + 1, 0).getDate());
    setLastDayOfCurrMonth(
      new Date(currYear, currMonth, lastDateOfCurrMonth).getDay()
    );
    setLastDateOfLastMonth(new Date(currYear, currMonth, 0).getDate());
  }, [currYear, currMonth, lastDateOfCurrMonth]);

  const renderDays = () => {
    return daysOfTheWeek.map((day, index) => (
      <span className={styles.daysConatiner} key={index}>
        {day}
      </span>
    ));
  };
  const randomBoolean = (probability) => {
    return Math.random() < probability;
  };

  useEffect(() => {
    const renderDaysOfMonth = () => {
      let daysArray = [];
      let dayClass = styles.days;
      let inactiveClass = styles.inactive;
      let weekendClass = styles.weekend;
      let weekdayClass = styles.weekday;
      let redClass = styles.red;
      let j = 0;
      for (let i = firstDayOfCurrMonth; i > 0; i--) {
        let isRed = randomBoolean(0.1);
        daysArray.push(
          <span
            className={`${dayClass} ${inactiveClass} ${
              j === 0 || j === 6
                ? weekendClass
                : isRed
                ? redClass
                : weekdayClass
            }`}
          >
            {lastDateOfLastMonth - i + 1}
          </span>
        );
        j++;
        j > 6 ? (j = 0) : null;
      }
      for (let i = 1; i <= lastDateOfCurrMonth; i++) {
        let isRed = randomBoolean(0.1);
        daysArray.push(
          <span
            className={`${dayClass} ${
              j === 0 || j === 6
                ? weekendClass
                : isRed
                ? redClass
                : weekdayClass
            }`}
          >
            {i}
          </span>
        );
        j++;
        j > 6 ? (j = 0) : null;
      }
      for (let i = lastDayOfCurrMonth; i < 6; i++) {
        let isRed = randomBoolean(0.1);
        daysArray.push(
          <span
            className={`${inactiveClass} ${dayClass} ${
              j === 0 || j === 6
                ? weekendClass
                : isRed
                ? redClass
                : weekdayClass
            }`}
          >
            {i - lastDayOfCurrMonth + 1}
          </span>
        );
        j++;
        j > 6 ? (j = 0) : null;
      }

      return daysArray;
    };

    setDays(renderDaysOfMonth());
  }, [
    firstDayOfCurrMonth,
    lastDateOfCurrMonth,
    lastDateOfLastMonth,
    lastDayOfCurrMonth,
    currDate,
    currMonth,
    currYear,
  ]);
  return (
    <div className={`${styles.body} w-full`}>
      <h1 className={`text-2xl font-semibold`}>Attendace</h1>
      <div
        className={`mt-4 w-full relative flex items-center justify-center gap-3`}
      >
        <span onClick={prevHandler} className={`${styles.iconContainer}`}>
          <MdChevronLeft />
        </span>
        <span className={`poppins-medium`}>
          {months[currMonth]} {currYear}
        </span>
        <span onClick={nextHandler} className={`${styles.iconContainer}`}>
          <MdChevronRight />
        </span>
      </div>
      <div>
        <div>
          <div className={styles.calendarBody}>
            {renderDays()}
            {days.map((day, index) => (
              <React.Fragment key={index}>{day}</React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallCalendar;
