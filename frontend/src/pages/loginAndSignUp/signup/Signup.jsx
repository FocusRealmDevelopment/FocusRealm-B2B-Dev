// import React from 'react';

import "./SignUpMain.css";
import Logo from "../images/logo.png";
import FirstRow from "./FirstRow";
import SecondRow from "./SecondRow";
// import ThirdRow from "./ThirdRow";

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, register } from "../../../actions/userAction";



const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const [user, setUser] = useState({
    email: "",
    password: "",
    name: "",
    age: "",
    gender: "Male",
    school: "",
    batch: "",
    studentmobile: "",
    parentmobile: "",
  });

  const {
    email,
    password,
    name,
    age,
    gender,
    school,
    batch,
    studentmobile,
    parentmobile,
  } = user;

  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvatarPreview] = useState("");

  const registerSubmit = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("password", password);
    myForm.set("avatar", avatar);
    myForm.set("school", school);
    myForm.set("age", age);
    myForm.set("gender", gender);
    myForm.set("Batch", batch);
    myForm.set("mobileNumber", studentmobile);
    myForm.set("mobileNumberParent", parentmobile);
    dispatch(register(myForm));
  };

    const registerDataChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
        
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
   };
   

   
  

  useEffect(() => {
    if (error) {
      dispatch(clearErrors);
    }

    if (isAuthenticated) {
      navigate("/account");
    }
  }, [dispatch, error, navigate, isAuthenticated]);

  return (
    <>
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
        <form method="post"  encType="multipart/form-data"
            onSubmit={registerSubmit} className="w-full h-full">
          <FirstRow />

          {/* Second Row */}
          <SecondRow />

          {/* Third Row */}

          {/* <ThirdRow /> */}

          {/* Submit button */}

          <div className="flex  justify-center relative bottom-[-69%] ">
            <input
              name="signup"
              value="SignUp"
              id="signup"
              type="submit"
              className="
        text-[#ffffff]
        bg-[#0148B7] w-[350px] h-[50px] rounded-[25px] "
            />
             
            
          </div>
        </form>

        <div className="flex justify-center relative bottom-[20%]">
          <div className="text">
            Having an Focus Realm account?{" "}
            <a className="text-[#0148B7]" href="">
              Login here
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
