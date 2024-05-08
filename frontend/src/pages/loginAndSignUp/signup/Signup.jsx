// import React from 'react';

import "./SignUpMain.css";
import Logo from "../images/logo.png";
import FirstRow from "./FirstRow";
import SecondRow from "./SecondRow";
import ThirdRow from "./ThirdRow";

const Signup = () => {
  return <>
  <div
    className=" bg-white rounded-[20px] w-[80.5%] relative 
  left-[10%] top-[10vh] h-[80vh]"
  >
    {/* Logo */}

    <div className="flex justify-center relative top-[8%]">
      <img src={Logo} className=" w-[32px] h-[42px] "></img>
    </div>

    <div className="flex justify-center relative top-[14%]">
      <p className=" font-normal text-[#222222] text-[14px] ">
        Creating A Focus Realm Account
      </p>
    </div>

    {/* First Row  */}
    <form method="post" className="w-full h-full">
      <FirstRow />

      {/* Second Row */}
      <SecondRow />

      {/* Third Row */}

      <ThirdRow />

      {/* Submit button */}

      <div className="flex  justify-center relative bottom-[-69%] ">
        <button
          className="
        text-[#ffffff]
        bg-[#0148B7] w-[350px] h-[50px] rounded-[25px] "
        >
          Create Account
        </button>
      </div>
    </form>

    <div className="flex justify-center relative bottom-[20%]">
      <div className="text">
        Having an Focus Realm account?{" "}
        <a className="text-[#0148B7]" href="#">
          Login here
        </a>
      </div>
    </div>
  </div>
</>;
};

export default Signup;
