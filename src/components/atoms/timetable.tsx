import * as React from "react";

const Timetable = () => {
  const days: string[] = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const hours: string[] = [];

  for (let i = 0; i < 2; i++) {
    hours.push("0" + (i + 8).toString() + ":00");
    hours.push("0" + (i + 8).toString() + ":30");
  }
  for (let i = 0; i < 14; i++) {
    hours.push((i + 10).toString() + ":00");
    hours.push((i + 10).toString() + ":30");
  }

  return (
    <div id="frame">
      <div id="spacer"></div>
      <div id="canvas">
        {days.map((day) => {
          return (
            <span key={day} className="days">
              {hours.map((hour) => {
                return (
                  <div key={hour} className="cells">
                    {day + " " + hour}
                  </div>
                );
              })}
            </span>
          );
        })}
      </div>
      <div id="topRuler">
        {days.map((day) => {
          return (
            <span key={day} className="dayNames">
              {day}
            </span>
          );
        })}
      </div>
      <div id="leftRuler">
        {hours.map((hour) => {
          return (
            <div key={hour} className="hours">
              {hour}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timetable;
