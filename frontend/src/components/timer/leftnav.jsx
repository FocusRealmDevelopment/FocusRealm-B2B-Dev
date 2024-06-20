import Bg_1 from "../../assets/images/Bg_1.png";


const Leftnav = () => {
  


    return (
        <div>

            <div className="relative flex flex-col  mt-2 left-4 w-[267px]  border mb-12 rounded-lg ">

            <div>
                    <img src={Bg_1} alt="bg-image" className='relative left-1 object-contain ' />

                    <div className='flex relative items-center justify-center top-[-32px]'>
                        <img src="https://s3-alpha-sig.figma.com/img/09c6/35b4/13d4bb5e2a41b67bdae9ca0ed6a2053c?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BjzkYOc7CXo0nMZCtvfKbbjXYTTN1rrad11jAJYiWo4CWS6IVRoMJV~aG4snZkbXGLBRu7M~M4Mw6vgn1F0T1zWm4Qd0xAK~hjDqm9WM9Rz9~hvg6EfHSxDQb~cqBNMQIeGutmWzWa2Jr~4zDM7s5XUe4lloAVRn4~662FGoTesmHXJ15fEJe-KiQScYxygfAteuJXqksudJEp-67AEm02m0kFEXCNv8vA5JV8ZIt-Cxs~JpyH8OzLNH5p~hpc1XLJiZF2zhpgvB9ikhKF-6Kpmh0gWQCfr-rcNSbAXHVFBc-d~0VVwc20i3ZWRidpHPS1dOt5hqD8ILDigKHjmu3w__"
                            alt="student"
                            className='w-[145px] absolute rounded-lg h-[145px] object-fit p-[6px] border bg-white'
                        />
                    </div>
                </div>


                <div className='mt-12 flex flex-col gap-2 items-center justify-center'>
                    <p className='flex relative font-semibold text-center mt-2 leading-[27px] text-[18px]'>Patrick Dash R</p>
                    <p className='leading-[19.5px] font-normal px-3 py-1 border rounded-full bg-[#b5e5ff] text-[13px]'>8 Grade</p>
                    <p className='font-normal leading-[18px] text-[12px] text-[#666666]'>Horizon Public School,Manali</p>
                </div>

                <div className='flex flex-col gap-6 mb-24'>

                    <div className='flex mx-12  gap-2 mt-12 text-[16px] leading-[21px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                        Home
                    </div>

                    <div className='flex mx-12 gap-2 text-[14px] leading-[21px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-[21px] h-[21px]">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        Tasks
                    </div>

                    <div className='flex mx-8 gap-2 text-[14px] leading-[21px] p-3 rounded-[25px] bg-[#e1f5ff] '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[21px] h-[21px]">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                        </svg>
                        Calendar
                    </div>


                    <div className='flex mx-12 gap-2 text-[14px] leading-[21px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                        </svg>
                        Chats
                    </div>

                    <div className='flex mx-12 gap-2 text-[14px] leading-[21px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                        </svg>
                        Homeworks
                    </div>

                    <div className='flex mx-12 gap-2 text-[14px] leading-[21px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                        </svg>
                        Help
                    </div>

                </div>

                <div cursor="pointer" className='flex mx-12 gap-2 text-[14px] leading-[21px] mb-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                    </svg>
                  logout
                </div>



            </div>


        </div>
    )
}

export default Leftnav;