import img1 from '../images/sign4.png';
import img2 from '../images/sign5.png';
import img3 from '../images/sign6.png';




export default function Lpart(){
    return(

<div className='w-1/2 relative h-[100%] rounded-l-[40px] dark:bg-[#4F82D1] grow bg-[#0148B7]'>

<div className='absolute top-5 left-5'>
  <img src={img2} className='w-[8vw] h[8vw]'></img>
  </div> 
  <div className='absolute top-2 left-[143px]'>
    <img src={img3} className='w-[5vw] h-[13vw]'></img>
  </div>
<div className='absolute left-[22%] top-[11%]'>
<img src={img1} alt='image' className='w-[22vw] h-[22vw] '></img>
</div>

<div className='w-full absolute top-[33vw]'>
  <div className=' text-[#FFFFFF] text-[3vw] ml-[8%]  font-semibold '>Welcome to the Focus Realm</div>
  <p className='font-regular ml-[11%]  text-[1.5vw] text-[#FFFFFF]'>Step into Focus Realm,Where Distractions Fade and <div className='absolute left-[35%]'>Learning thrives!!</div></p>
</div>









</div>




    );

}