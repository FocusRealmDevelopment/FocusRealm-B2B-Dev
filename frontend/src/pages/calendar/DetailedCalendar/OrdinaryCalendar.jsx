/* eslint-disable react/prop-types */
import { Component } from "react";
import CalanderDays from "./CalendarDays";
import "../Calendar.css";
import "./DetailedCalendar.css";

export default class OrdinaryCalendar extends Component {
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
      <div className="calendar-2">
        <div className="calendar-header-2">
          <h2 style={{ margin: "5px" }}>
            {this.months[this.state.currentDay.getMonth()]},{" "}
            {this.state.currentDay.getFullYear()}
          </h2>
          <div className="navi-btn-container" style={{ margin: "5px" }}>
            <button
              className="navi-btn btn-2 hov"
              style={{ borderStyle: "none" }}
              onClick={this.goToPreviousMonth}
            >
              {/* <svg width="7" height="9" viewBox="0 0 7 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.392632 4.11293L5.22358 0.00292969L6.12402 0.768999L2.19353 4.11293L6.12402 7.45686L5.22358 8.22293L0.392632 4.11293Z" fill="#637799" />
                            </svg> */}
              <span>{`<`}</span>
            </button>
            <button
              className="navi-btn btn-2 hov"
              style={{ borderStyle: "none" }}
              onClick={this.goToNextMonth}
            >
              {/* <svg width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.8769 4.10777L1.04596 8.21777L0.145508 7.4517L4.076 4.10777L0.145508 0.763843L1.04596 -0.00222686L5.8769 4.10777Z" fill="#637799" />
                            </svg> */}
              <span>{`>`}</span>
            </button>
          </div>
        </div>
        <div className="calendar-body">
          <div className="table-header-2">
            {this.weekdays.map((weekday, e) => {
              return (
                <div key={e} className="weekday-2">
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
