import Navbar from '../navbar/Navbar';
import Leftnav from '../../components/timer/leftnav';
import Events from './events';
import Work from './work';
import Studysessions from './studysessions';
import Calendar from './calendar';
import Present from './whatsgoingon';
import Homeworktable from './homeworktable';
import SidePanel from '../sidePanel/SidePanel';



const Homework  = () => {
    return (
       <div className='w-screen overflow-hidden'>
         {/* <div className='w-full mb-4'>
         <Navbar/>
         </div>
          */}
          <div className='flex gap-8'>
          {/* <div className='w-1/4 mx-4'>
            <SidePanel/>
          </div> */}
          <div className='flex flex-col w-full '>
           <Work section="Assignments"/>
           <Work section="Tests"/>
           <Studysessions/>
           <Homeworktable/>
          </div>
          {/* <div className='flex flex-col '>
            <Calendar/>
            <Events/>
            <Present/>
          </div> */}
          </div>
          
         
       </div>
    )
}

export default Homework;