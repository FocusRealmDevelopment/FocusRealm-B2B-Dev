import React from 'react';
import dayjs from 'dayjs';

const DayWrapper = ({ day, events }) => {
    const timeSlots = Array.from({ length: 11 }, (_, i) => i + 7); // Array of hours from 7 to 17

    const formatTime = (hour) => {
        const time = dayjs().hour(hour).minute(0);
        return time.format('h A'); // Format time as 1 AM, 2 AM
    };

    const renderEvents = (hour) => {
        const event = events.find((event) => dayjs(event.time).hour() === hour);
        if (event) {
            return (
                <div key={event.title} className="p-4 border rounded-lg bg-green-100">
                    <p className="font-bold">{event.title}</p>
                    <p>{dayjs(event.time).format('h:mm A')} - {dayjs(event.time).add(event.duration, 'hour').format('h:mm A')}</p>
                    <p>{event.description}</p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="flex flex-col w-full items-center gap-4 p-4">
            <div className="w-full flex justify-between items-center py-2">
                {/* <p className="text-2xl font-semibold">{day.format('MMMM YYYY')}</p> */}
                <p className="text-2xl font-semibold text-[#0148B7]">{day.format('MMMM DD')}</p>
            </div>

            <div className="w-full grid grid-cols-1 gap-4">
                {timeSlots.map((hour) => (
                    <div key={hour} className="flex items-start">
                        <div className="w-16 p-2 text-right border-r">
                            {formatTime(hour)}
                        </div>
                        <div className="w-full p-2">
                            {renderEvents(hour)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DayWrapper;
