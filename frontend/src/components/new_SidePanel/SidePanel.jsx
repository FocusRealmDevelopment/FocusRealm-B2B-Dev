import Bg from '../../assets/images/Bg_1.png';
import Profile from '../../assets/images/profile.jpeg'
import SideNavIcon from '../iconConatiner/SideNavIcon';
import { GoHomeFill } from "react-icons/go";
import { FaCheckSquare } from "react-icons/fa";
import { FaRegCalendar } from "react-icons/fa";
import { SiGoogledocs } from "react-icons/si";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { IoHelpCircleSharp } from "react-icons/io5";



const SidePanel = () => {//backgroundImage: `url(${Bg})`,
  return (
    <div className="h-full w-[20%] flex flex-col my-[25px] bg-[#fff] rounded-3xl">
      <div className='h-full'>
        <div className="h-[15%] rounded-t-3xl" style={{ background: `url(${Bg})`, opacity: '0.8' }}>
          <div className='flex justify-center items-end'>
            <img src={Profile} alt='' className='h-[145px] w-[145px] absolute top-[120px] shadow-2xl rounded-3xl border-[4px] border-white' />
          </div>
        </div>
        <div className='flex flex-col items-center mt-[75px]'>
          <h1 className='font-semibold text-[18px] leading-[27px] text-[#222222] my-1'>Patrick Dash R</h1>
          <span className='font-[400] text-[13px] leading-[19.5px] text-[#000000] py-[2px] px-[12px] rounded-[15px] bg-[#B5E5FF] my-1'>8 Grade</span>
          <p className='font-[400] text-[12px] leading-[18px] text-[#666666] my-1'>Horizon Public School, Manali  </p>
        </div>
        <div className='px-[20px] my-[12px] w-full'>
          <SideNavIcon Svg={GoHomeFill} Name={'Home'} Path={'/'} />
          <SideNavIcon Svg={FaCheckSquare} Name={'Tasks'} Path={'/task'} />
          <SideNavIcon Svg={FaRegCalendar} Name={'Calender'} Path={'/calendar'} />
          <SideNavIcon Svg={SiGoogledocs} Name={'Forum'} Path={'/chat'} />
          <SideNavIcon Svg={AutoStoriesIcon} Name={'Homeworks'} Path={'/homework'} />
          <SideNavIcon Svg={IoHelpCircleSharp} Name={'Help'} Path={'/help'} />
        </div>
      </div>
      <div className='flex items-end px-[20px] py-[20px]'>
        <button className='flex items-center px-[25px] py-[10px] my-2'>
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.375 16.375C1.89375 16.375 1.48177 16.2036 1.13906 15.8609C0.796354 15.5182 0.625 15.1062 0.625 14.625V2.375C0.625 1.89375 0.796354 1.48177 1.13906 1.13906C1.48177 0.796354 1.89375 0.625 2.375 0.625H8.5V2.375H2.375V14.625H8.5V16.375H2.375ZM12 12.875L10.7969 11.6062L13.0281 9.375H5.875V7.625H13.0281L10.7969 5.39375L12 4.125L16.375 8.5L12 12.875Z" fill="#444444" />
          </svg>
          <span className='pl-2 font-[400] text-[14px] leading-[21px] text-[#444444]'>Logout</span>
        </button>
      </div>
    </div>
  )
}

export default SidePanel