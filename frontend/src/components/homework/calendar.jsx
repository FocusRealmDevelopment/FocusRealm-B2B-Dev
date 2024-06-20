import Frame34224 from "../../assets/images/Frame34224.png";


const Calendar = () => {
    return (
        <div className="mx-12 my-4 w-4/5 overflow-hidden  border p-4 rounded-[20px]">
            <div className="flex flex-col">
                {/* <div className="flex justify-between items-center "> */}
                    <h1 className="whitespace nowrap text-[16px] text-[#222222] font-medium leading-6">Calendar</h1>
                    <div className="w-full">
                        <img src={Frame34224} alt="Calendar" className="object-contain mt-4"/>
                    </div>
                {/* </div> */}
            </div>
        </div>
    )
}

export default Calendar;