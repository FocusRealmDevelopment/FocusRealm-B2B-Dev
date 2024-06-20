import Rectangle56 from "../../assets/images/Rectangle56.png";

const Present = () => {
    return (
        <div className="mx-12 my-4 w-4/5  border p-4 rounded-[20px]">
            <div className="flex flex-col">
                <div className="flex justify-between items-center ">
                    <h1 className="whitespace nowrap text-[16px] font-medium leading-6 text-[#444444]">What's Going on</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="border rounded-full w-[30px] h-[30px] p-2 bg-[#dce6f6]">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                </div>

                <div className="flex flex-col gap-3 mt-4 pb-4">
                    <div className="relative">
                        <img src={Rectangle56} alt="topicimage" className="w-full height-[820px] object-contain" />
                        <div className="absolute top-8 flex items-center right-0 border bg-[#c00000] text-white py-[8px] px-[10px] text-[12px] w-[43px] h-[24px] rounded-s-[10px]">Live</div>
                    </div>
                    <div className="flex flex-col whitespace-nowrap px-4 gap-1">
                        <h1 className="text-[14px] font-medium leading-5 text-[#0148b7]">Integration & Differentials</h1>
                        <span className="inline-flex gap-4 text-[12px] font-normal leading-[18px] text-[#666666]">Maths <p className="text-[#4f81d1]">●
                        </p>
                            12th class
                        </span>
                        <p className="text-[12px] font-normal leading-[18px] text-[#0148b7]">Started at 10.30 AM</p>
                    </div>
                    <button className="w-full bg-[#0148b7] p-2 rounded-[20px] text-white font-normal leading-5">Connect</button>
                    <p className="flex items-center justify-center gap-2 text-[#666666]">●
                        <p className="mt-1 text-white bg-[#4f81d1] w-[18px] text-hidden h-[7px] rounded-[20px]"></p>
                        ●
                        ●
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Present;