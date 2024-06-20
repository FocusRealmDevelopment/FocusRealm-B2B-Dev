import React from 'react';
import dayjs from 'dayjs';

const WeekWrapper = ({ week, currentDate }) => {
    const events = [
        { day: 0, time: '8:00 AM - 9:30 AM', title: 'Maths Class', color: 'bg-red-100', border: 'border-red-500' },
        { day: 4, time: '8:30 AM - 11:00 AM', title: 'Maths Class', color: 'bg-green-100', border: 'border-green-500' },
        { day: 4, time: '2:30 PM - 3:00 AM', title: 'Maths Class', color: 'bg-green-100', border: 'border-green-500' },
        { day: 3, time: '8:30 AM - 11:00 AM', title: 'Maths Class', color: 'bg-green-100', border: 'border-green-500' }
        // Add more events as needed
    ];

    const isToday = (day) => dayjs().isSame(day, 'day');

    return (
        <div className="flex flex-col w-full">
            <div className="grid grid-cols-8 gap-1">
                <div className="col-span-1"></div>
                {week.map((day, index) => (
                    <div
                        key={index}
                        className={`col-span-1 text-center py-2 ${isToday(day) ? 'bg-[#0148B7] text-white rounded-full' : 'bg-white text-black rounded-full'} font-semibold`}
                    >
                        {day.format('ddd DD')}
                    </div>
                ))}
            </div>
            {['7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'].map((time, idx) => (
                <div key={idx} className="grid grid-cols-8 gap-1/2 py-2 border-t border-gray-200">
                    <div className="col-span-1 text-right pr-2 text-gray-500">{time}</div>
                    {week.map((day, index) => (
                        <div key={index} className="col-span-1 h-[60px] border border-gray-200 relative font-['poppins']">
                            {events.map((event, i) => (
                                event.day === index && event.time.includes(time.split(' ')[0]) && (
                                    <div key={i} className={`absolute inset-0 ${event.color} border ${event.border} m-1 p-2 rounded-md text-sm overflow-hidden`}>
                                        {event.title}
                                    </div>
                                )
                            ))}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default WeekWrapper;
