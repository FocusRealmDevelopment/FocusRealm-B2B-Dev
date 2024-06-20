import { useState } from "react";
import Search from "./search.jsx";

const Createtask = () => {
    const [showPopup, setShowPopup] = useState(true);
    const [search, setSearch] = useState(false);

    const handleClosePopup = () => {
        setShowPopup(false); 
    };

    const handleSearchClick = () => {
        setSearch(prev => !prev);
    }

    return (
        <>
            {showPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="relative w-2/5 bg-white rounded-[25px] px-4 py-6 border-5 border-[#124589]">
                        <div className="absolute top-2 right-2 cursor-pointer" onClick={handleClosePopup}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>

                        <div className="flex items-center gap-2 flex-col mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#0148b7" className="size-10 rounded-full p-2 border bg-[#f5f5f5]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                            </svg>

                            <h1 className="font-bold text-[16px] leading-[24px] text-[#0148B7]">Create a Task</h1>
                        </div>

                        <form className="flex flex-col gap-[4px]">
                            <label className="text-[16px] text-[#444444]">Title</label>
                            <input type="text" placeholder="Enter a Title" className="px-4 py-2 text-[14px] outline-none w-full rounded-[25px]" />
                            <div className="flex gap-4 w-full mb-1">
                                <div className="w-1/2 flex flex-col">
                                    <label className="mb-1">Date</label>
                                    <input type="date" className="px-4 py-2 w-full rounded-[25px] outline-none" />
                                </div>

                                <div className="w-1/2 flex flex-col">
                                    <label className="mb-1">Time</label>
                                    <input type="time" className="w-full px-4 py-2 rounded-[25px] outline-none" />
                                </div>
                            </div>
                            <label>Description</label>
                            <textarea placeholder="Description" className="px-4 py-2 rounded-lg text-[14px] font-normal leading-[21px] mb-2 outline-none bg-[#f5f5f5] w-full"></textarea>
                            <label>Invite Members</label>
                            <div onClick={handleSearchClick}>
                                <Search />
                            </div>
                            <button className="px-4 text-[14px] text-white border-white rounded-[25px] py-3 mb-8 bg-[#0148b7]">Add task</button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default Createtask;
