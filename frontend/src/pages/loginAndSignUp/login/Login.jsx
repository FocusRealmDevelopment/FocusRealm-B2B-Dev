import React from "react";
import logo from '../images/logo.png';
import DownPart from './DownPart';
import FormPart from './FormPart';

const Login = () => {
  return (
    <div className="bg-white rounded-[20px] w-[80.5%] relative left-[10%] top-[10vh] h-[80vh]">
      <div className="absolute top-[9%] w-[34%] h-[82%] left-[4%]">
        {/* Logo */}
        <div className="flex justify-center">
          <img src={logo} alt="Focus Realm Logo" />
        </div>
        <div className="flex pt-[9%] justify-center">
          <div className="text-[rgb(34,34,34)] text-[14px] font-normal">Welcome to Focus Realm Portal</div>
        </div>
        <FormPart />
      </div>
      <DownPart />
    </div>
  );
};

export default Login;
