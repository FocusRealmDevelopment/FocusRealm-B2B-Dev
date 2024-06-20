import React, { useState } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { RiKey2Line } from 'react-icons/ri';
import { IoEyeOffOutline } from 'react-icons/io5';
import logo from '../images/logo.png';
import loginImage from '../images/login.png';



import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearErrors, loginStudent} from "../../../actions/studentAction";
import Loader from "../../../Loader/Loader"
import {useAlert} from "react-alert"

const TeacherLogin = () => {
 


    const navigate = useNavigate ();
    const dispatch=useDispatch();
    const alert=useAlert()

    const { error, loading, isAuthenticated } = useSelector(
        (state) => state.teacher
    );
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const loginSubmit = (e) => {
        e.preventDefault();
        dispatch(loginStudent(loginEmail,loginPassword))
      };

      useEffect(()=>{
        if(error){
            alert.error(error)
            dispatch(clearErrors);
        }
    
    
        if(isAuthenticated){
            navigate("/teacher/account")
        }
    
      },[dispatch,alert,error,navigate,isAuthenticated])
        


    return (
        <>
      

        {
         loading ? <Loader/>:
        <div className="bg-white rounded-[20px] w-[90vw] max-w-[1200px] mx-auto relative top-[10vh] h-[80vh] flex overflow-hidden shadow-lg">
            <div className="w-full md:w-1/2 p-8 flex flex-col justify-center items-center bg-white">
                <img src={logo} alt="Focus Realm Logo" className="mb-6" />
                <h1 className="text-center text-2xl font-semibold mb-6">Welcome to Focus Realm Portal</h1>
                <form method="post"  onSubmit={loginSubmit} className="w-full max-w-sm flex flex-col">
                    <label className="text-sm font-medium text-gray-600 mb-1">Username</label>
                    <div className="relative mb-4">
                        <MdOutlineEmail className="absolute top-3 left-3 text-blue-700" />
                        <input type="email" required  value={loginEmail}  onChange={(e) => setLoginEmail(e.target.value)} placeholder="Email address" className="pl-10 w-full rounded-[20px] bg-[#F5F5F5] h-12" />
                    </div>
                    <label className="text-sm font-medium text-gray-600 mb-1">Password</label>
                    <div className="relative mb-4">
                        <RiKey2Line className="absolute top-3 left-3 text-blue-700" />
                        <input type="password" required value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} placeholder="*************" className="pl-10 w-full rounded-[20px] bg-[#F5F5F5] h-12" />
                        <IoEyeOffOutline className="absolute top-3 right-3 text-gray-600" />
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center">
                            <input type="checkbox" className="mr-2 h-4 w-4" />
                            <span className="text-sm text-gray-600">Remember me</span>
                        </div>
                        <span className="text-sm text-gray-600 cursor-pointer">Forgot password?</span>
                    </div>
                    <button className="bg-blue-700 w-full h-12 rounded-[20px] text-white text-sm font-medium">Login Now</button>
                </form>
                <div className="text-center text-sm text-gray-600 mt-4">
                    Having an access code? <button className="text-blue-700 cursor-pointer">Login here</button>
                </div>
                <div className="text-center text-sm text-gray-600 mt-2">
                    New to Focus Realm? <button className="text-blue-700 cursor-pointer" onClick={() => navigate("/teachersignup")}>Create an account</button>
                </div>
            </div>
            <div className="w-full md:w-1/2 flex items-center justify-center bg-blue-700 text-white p-8">
                <div className="text-center">
                    <img src={loginImage} alt="Focus Realm Welcome" className="mb-6" />
                    <h1 className="text-2xl font-bold mb-4">Welcome to the Focus Realm</h1>
                    <p className="text-lg">"Step into Focus Realm, Where Distractions Fade and Learning Thrives!"</p>
                </div>
            </div>
        </div>
         }
         </>

    );
};

export default TeacherLogin