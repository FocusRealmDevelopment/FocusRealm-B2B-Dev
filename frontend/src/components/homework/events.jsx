import event_1 from "../../assets/images/event_1.png";
import event_2 from "../../assets/images/event_2.png";

const Events = () => {

    const events = [{
        img: event_1, title: "Annual Seminars", Topic: "Seminars & Training", Time: "Jan 20(9.00 AM - 6.00 PM)"
    },
    {
        img: event_2, title: "Book Fair", Topic: "Exhibitions & Expo", Time: "Jan 20(9.00 AM - 6.00 PM)"
    }
    ]

    return (
        <div className="mx-12 my-4 w-4/5  border p-4 rounded-[20px] ">
            <div className="flex flex-col ">
                <div className="flex justify-between ">
                    <h1 className="whitespace nowrap text-[16px] font-medium leading-6 text-[#444444]">Upcoming Events</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="border rounded-full w-[30px] h-[30px] p-2 bg-[#dce6f6]">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                </div>

                {events.map((event, index) => (
                    <div
                        key={index}
                        className={`flex gap-3 items-center mt-4 pb-4 ${index !== events.length - 1 ? 'border-b' : ''}`}
                    >
                        <div>
                            <img src={event.img} alt="event1" />
                        </div>
                        <div className="flex flex-col whitespace-nowrap">
                            <h1 className="text-[14px] font-medium leading-5 text-[#0148b7]">{event.title}</h1>
                            <p className="text-[12px] text-normal leading-[18px] text-[#666666]">{event.Topic}</p>
                            <p className="text-[10px] text-normal leading-[15px] text-[#0148b7]">{event.Time}</p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Events;