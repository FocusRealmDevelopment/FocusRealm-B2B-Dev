import dayjs from "dayjs";

const Day = ({ day }) => {

    const isToday = day.isSame(dayjs(), 'day');

    return (
        <div className={`flex flex-grow flex-col border ${isToday ? 'bg-[#7fd9e9]' : ''}`}>
            <div className="flex justify-between">
                <p className={`${isToday ? 'bg-[#0148b7] text-white' : ''} "text-[13px] font-semibold text-[#444444] rounded-tr-[10px] h-[28px] rounded-bl-[10px] rounded-br-[10px] p-1 bg-[#f2f6fb]" `}>{day.format('DD')}</p>
                <p className="text-[13px] font-semibold text-[#444444] rounded-tl-[10px] h-[28px] rounded-bl-[10px] rounded-br-[10px] p-1 bg-[#f2f6fb]">{day.format('ddd').toUpperCase()}</p>
            </div>

            <div className="flex gap-1 bg-[#ffcdcd] px-[6px] py-[2px] rounded-[10px] whitespace-nowrap text-[10px] font-normal leading-3 mx-auto mt-2 text-[#222222]">
                <p>11:45 AM</p>
                <p>Maths Class</p>
            </div>

            <div className="flex gap-1 bg-[#00c020] px-[6px] py-[2px] rounded-[10px] whitespace-nowrap text-[10px] font-normal leading-3 mx-auto mt-2 text-[#222222]">
                <p>11:45 AM</p>
                <p>Maths Class</p>
            </div>

            <div className="flex gap-1 bg-[#c5dbff] px-[6px] py-[2px] rounded-[10px] whitespace-nowrap text-[10px] font-normal leading-3 mx-auto mt-2 text-[#222222]">
                <p>11:45 AM</p>
                <p>Maths Class</p>
            </div>

            <div className="flex gap-1 bg-[#edab00] px-[6px] py-[2px] rounded-[10px] whitespace-nowrap text-[10px] font-normal leading-3 mx-auto mt-2 text-[#222222] mb-4">
                <p>11:45 AM</p>
                <p>Maths Class</p>
            </div>


        </div>
    );
}

export default Day;

