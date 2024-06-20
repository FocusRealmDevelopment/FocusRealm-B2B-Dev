import focusRealmLogo from "../../assets/images/focusRealmLogo.png";
import calendar from '../../assets/images/calendar.png';
import notify from '../../assets/images/notify.png';
import Leftnav from './leftnav';
import Timer from './timer';

const Navbar = () => {
    return (

        <div className='w-full'>

            <div className="flex ">

                {/* Navbar */}
                <div className="flex w-full bg-[#D8DFEB] h-[60px] items-center justify-between px-4 gap-4">

                    <div className="flex items-center gap-2">
                        <img src={focusRealmLogo} alt="logo" className="h-full" />
                        <p className="text-[#0148b7] inline-flex gap-2 text-[20px] leading-[30px] font-medium ">Focus <p className="text-[#4f81f1]">Realm</p></p>
                    </div>

                    <div className=" w-[526px]">
                        <form className="flex  rounded-full">
                            <label className="sr-only">Search</label>
                            <div className="relative flex items-center justify-center w-full">
                                <svg
                                    className="w-4 h-4 absolute top-4 left-3 text-gray-500 dark:text-gray-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                </svg>
                                <input
                                    type="text"
                                    id="voice-search"
                                    className="bg-gray-50 border border-gray-300 font-normal leading-5 text-[13px] outline-none rounded-full block w-full ps-10 p-2.5"
                                    placeholder="Search Anything here"
                                    required
                                />
                            </div>
                        </form>
                    </div>

                    <div className="flex items-center gap-2">

                        <div className="relative bg-[#ffffff] rounded-full h-10 w-10 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#666666" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                            </svg>
                            <span className="absolute top-[-7px] left-6 flex items-center justify-center h-5 w-5 rounded-xl border border-red-500 bg-[#be0000] text-white text-[12px]">
                                12
                            </span>
                        </div>



                        <div className='relative bg-[#ffffff] rounded-full h-10 w-10 flex items-center justify-center'>
                            <img src={calendar} alt="calendar-log" className='w-4 h-4 object-fit' />
                            <span className="absolute top-[-7px] left-6 flex items-center justify-center h-5 w-5 rounded-xl border border-red-500 bg-[#be0000] text-white text-[12px]">
                                12
                            </span>
                        </div>

                        <div className='relative bg-[#ffffff] rounded-full flex items-center justify-center h-[40px] w-[39.24px]'>
                            <img src={notify} alt="notifications" className='w-[15.24px] h-4' />
                            <span className="absolute top-[-7px] left-6 flex items-center justify-center h-5 w-5 rounded-xl border border-red-500 bg-[#be0000] text-white text-[12px]">
                                12
                            </span>

                        </div>

                        <div>
                            <div className='flex items-center justify-center w-[71px] h-[74px]'>
                                <img src="https://s3-alpha-sig.figma.com/img/09c6/35b4/13d4bb5e2a41b67bdae9ca0ed6a2053c?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BjzkYOc7CXo0nMZCtvfKbbjXYTTN1rrad11jAJYiWo4CWS6IVRoMJV~aG4snZkbXGLBRu7M~M4Mw6vgn1F0T1zWm4Qd0xAK~hjDqm9WM9Rz9~hvg6EfHSxDQb~cqBNMQIeGutmWzWa2Jr~4zDM7s5XUe4lloAVRn4~662FGoTesmHXJ15fEJe-KiQScYxygfAteuJXqksudJEp-67AEm02m0kFEXCNv8vA5JV8ZIt-Cxs~JpyH8OzLNH5p~hpc1XLJiZF2zhpgvB9ikhKF-6Kpmh0gWQCfr-rcNSbAXHVFBc-d~0VVwc20i3ZWRidpHPS1dOt5hqD8ILDigKHjmu3w__"
                                    alt="student"
                                    className='h-11 w-11 rounded-full object-fit'
                                />
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>

                            </div>

                        </div>



                    </div>

                </div>
            </div>

            <div className='flex  '>
                {/* <Leftnav /> */}
                {/* <Timer /> */}
            </div>



        </div>


    );
};

export default Navbar;
