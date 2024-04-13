import moment from "moment";

const DaywiseCalendar = () => {
  // Define start and end times for the weekly calendar (1 am to 11 pm)
  const startTime = moment().startOf("day").add(1, "hour");
  const endTime = moment().startOf("day").add(24, "hour");

  // Generate time slots for each hour from 1 am to 11 pm
  const timeSlots = [];
  let currentTime = startTime.clone();
  while (currentTime.isBefore(endTime)) {
    timeSlots.push(currentTime.clone());
    currentTime.add(1, "hour");
  }

  // Define the days of the week
  const daysOfWeek = [];
  let currentDate = moment().startOf("week");
  daysOfWeek.push(currentDate.clone());
  // for (let i = 0; i < 7; i++) {
  //   daysOfWeek.push(currentDate.clone());
  //   currentDate.add(1, "day");
  // }

  // Dummy event data (replace this with your actual event data)
  const events = [
    {
      title: "Meeting",
      start: moment().startOf("day").add(9, "hours").add(30, "minutes"),
      end: moment().startOf("day").add(10, "hours").add(30, "minutes"),
    },
    {
      title: "Lunch",
      start: moment().startOf("day").add(12, "hours"),
      end: moment().startOf("day").add(13, "hours"),
    },
  ];

  return (
    <div className="flex ml-[-80px]">
      {/* Render day columns */}
      <div className="w-20">
        <div className="mb-[45px] h-12 flex items-center justify-center">

        </div>
        {timeSlots.map((timeSlot, index) => (
          <div
            key={index}
            className="py-[20px] text-[14px] flex items-center justify-end pr-2 relative"
          >
            <span>{timeSlot.format("h A")}</span>
            {/* Render vertical line */}
            {/* <div
                            className="h-[1px] w-[100vh] bg-gray-300 border-gray-300 absolute left-[-1px] right-0 top-0"
                        /> */}
          </div>
        ))}
      </div>
      {/* Render day columns */}
      <div className="flex-1 grid">
      {/* <div className="flex-1 grid grid-cols-7"> */}
        {daysOfWeek.map((day) => (
          <div key={day.format("YYYY-MM-DD")} className=" border-r border-gray-300 w-full relative">
            <div className="border-b w-full border-gray-300">
              <p className="bg-[#D8DFEB] w-max py-[5px] px-[8px] text-[13px]" style={{ borderBottomRightRadius: '24px' }}>{day.format("DD")}</p>
              <snap className='uppercase text-center pb-[20px] flex justify-center items-center'>{day.format("ddd")}</snap>
              {/* <snap className=''>{day.format("ddd, MMM DD")}</snap> */}
            </div>
            {[...Array(24)].map((_, hour) => (
              <div key={hour} className="py-[24px] ml-[-15px] my-2 px-5 border-b border-gray-300"></div>
            ))}
            {/* Render events for this day */}
            {events.map((event, index) => {
              const eventStart = moment(event.start);
              const eventEnd = moment(event.end);
              if (
                eventStart.isSame(day, "day") &&
                eventEnd.isSameOrAfter(day, "day")
              ) {
                return (
                  <div
                    key={index}
                    className="bg-blue-500 z-[1] text-white rounded p-1 mt-1"
                    style={{
                      marginTop: eventStart.diff(day, "hours") * 60 + eventStart.minutes(),
                      height: eventEnd.diff(eventStart, "minutes"),
                    }}
                  >
                    {event.title}
                  </div>
                );
              }
              return null;
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DaywiseCalendar
