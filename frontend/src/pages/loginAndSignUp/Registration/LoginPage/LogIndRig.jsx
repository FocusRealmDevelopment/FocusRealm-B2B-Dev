
import logo from '../images/signlogo.png';
import google from '../images/google.png';
import '../LogInd.css';
import Loader from "../SignUpPage/Loader"
import {Link} from 'react-router-dom';
import { Fragment, useEffect, useState } from 'react';
import {useDispatch,useSelector} from "react-redux";
import {clearErrors,login} from "../SignUpPage/userAction";
import {useAlert} from "react-alert";


// import {useHistory} from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const  LoInRi=({history})=>{
  
 
  const dispatch = useDispatch();
  const alert = useAlert();
  const {error,loading,isAuthenticated} = useSelector(state=>state.user)
   const LoginSubmit = (e)=>{
    e.preventDefault();

    dispatch(login(loginEmail,loginPassword))
   }

   useEffect(()=>{
    if(error){
      alert.error(error);
      dispatch(clearErrors());


    }
    if(isAuthenticated){
      // eslint-disable-next-line react/prop-types
      history.push("/account")
    }
   },
   [dispatch,error,alert,history,isAuthenticated]
   
   
   )

     const [loginEmail,setLoginEmail] = useState("")
     const [loginPassword,setLoginPassword] = useState("")

    return(
      <Fragment>
        {loading?<Loader/>:<Fragment>
        <div className='absolute left-[50%] w-[50%] h-[100%] '>
<div className='flex justify-center'>
<img src={logo} className='absolute w-[250px] top-[4%] h-[120px]'></img>
</div>
<form onSubmit={LoginSubmit}>
<div className="top-[25%] absolute right-[72%] text-black text-base font-semibold text-[1.1vw] tracking-wide  dark:text-white">Email</div>

<div className='flex justify-center'>
    <input type='email' onChange={(e)=>setLoginEmail(e.target.value)} required value={loginEmail} placeholder='Enter your Email Address' className='w-[57%] h-[8%] absolute top-[29.5%] rounded-[15px] pl-[50px] Bg bg-[#0020511a]'/>

    
</div>

<div className="top-[40%] absolute right-[68%] text-black text-[1.1vw] text-base font-semibold  tracking-wide dark:text-white">Password</div>

<div className='flex justify-center'>
    <input type='password' value={loginPassword} 
    onChange={(e)=>setLoginPassword(e.target.value)} required
     placeholder='********' className='w-[57%] h-[8%] absolute top-[44.5%] Bg rounded-[15px] pl-[50px] bg-[#0020511a]'/>

    
</div>


<div className="self-stretch justify-center items-center gap-[122px] inline-flex">
    <div className="grow shrink basis-0 h-10 px-[7px] py-1 bg-white bg-opacity-0 justify-start items-center gap-[3px] flex">
      
        
      <input type='checkbox' className="grow shrink basis-0 absolute top-[57%] left-[22%] "/>
      <span className='text-center text-black text-xs left-[25%] dark:text-white font-semibold absolute top-[57%] '>Remember Me</span>
    </div>
    <Link to="/password/forgot" className="absolute top-[57%] grow shrink basis-0 dark:text-white left-[65%] text-center text-black text-xs font-semibold ">Reset Password</Link>
  </div>
<Link to='/loginwithcode'>
<div className='flex justify-center'>
<input type='submit' value="Login" className='B absolute top-[64%] bg-[#0148B7] w-[50%]  dark:text-white h-[8%] rounded-[15px] '/>
</div>
</Link>

<div className="w-[280px] absolute top-[75%] left-[23.5%]  h-[23px] px-1.5 bg-white bg-opacity-0 justify-center items-center gap-0.5 inline-flex">
  <div className="w-[129px] h-[0px] border border-neutral-400"></div>
  <div className="w-5 h-[23px] text-center text-neutral-400 text-[13px] font-medium font-['Poppins']">or</div>
  <div className="w-[129px] h-[0px] border border-neutral-400"></div>
</div>

<div className='flex justify-center'>
    <button className='bg-[#0020511a] flex justify-center Bg items-center w-[57%] h-[8%] absolute rounded-[15px] top-[81%]'>
      <img src={google}></img>
    </button>
</div>
</form>


<div className=' w-full text-[15px]   '>
<div className=' dark:text-white absolute top-[90%] left-[26%]'>Dont have an account? Create an account</div>

<input type='checkbox' className='top-[91%] absolute left-[23%]'/>

</div>
























































</div>
































































</Fragment>}
      </Fragment>











    );
}

export default LoInRi;