import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';
import logo from '../images/logo.png';
import loginImage from '../images/login.png';

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white rounded-[20px] w-[90vw] max-w-[1200px] mx-auto relative top-[10vh] h-[80vh] flex overflow-hidden">
      <div className="md:w-1/2 flex flex-col items-center justify-center p-6 md:p-12">
        <img src={logo} alt="Focus Realm Logo" className="mb-6" />
        <h1 className="text-2xl font-normal font-['poppins'] mb-6">Welcome to Focus Realm Portal</h1>
        <button className="flex items-center justify-center w-64 h-12 mb-4 bg-gray-200 rounded-full text-blue-700 font-normal font-['poppins']" onClick={() => navigate("/Studentlogin")}>
          <AiOutlineArrowRight className="mr-2" /> Login As Student
        </button>
        <button className="flex items-center justify-center w-64 h-12 mb-4 bg-gray-200 rounded-full text-blue-700 font-normal font-['poppins']" onClick={() => navigate("/Adminlogin")}>
          <AiOutlineArrowRight className="mr-2" /> Login As Admin
        </button>
        <button className="flex items-center justify-center w-64 h-12 mb-4 bg-gray-200 rounded-full text-blue-700 font-normal font-['poppins']" onClick={() => navigate("/Teacherlogin")}>
          <AiOutlineArrowRight className="mr-2" /> Login As Teacher
        </button>
        <div className="text-center mt-4">
          <span className="text-gray-600 font-normal font-['poppins']">New to Focus Realm?</span> <span className="text-blue-700 cursor-pointer font-normal font-['poppins']">Create an account</span>
        </div>
      </div>
      <div className="md:w-1/2 flex items-center justify-center bg-blue-700 text-white p-6 md:p-12">
        <div className="text-center">
          <img src={loginImage} alt="Focus Realm Welcome" className="mb-6" />
          <h1 className="text-2xl font-normal font-['poppins'] mb-4">Welcome to the Focus Realm</h1>
          <p className="text-lg font-normal font-['poppins']">"Step into Focus Realm, Where Distractions Fade and Learning Thrives!"</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
