// import React from 'react';
import "./SignUpMain.css";
import Logo from "../images/logo.png";
import FirstRow from "./FirstRow";
import SecondRow from "./SecondRow";
import ThirdRow from "./ThirdRow";
import { FaPaperclip } from "react-icons/fa6";

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
      <div className=" bg-white rounded-[20px] w-[80.5%] relative left-[10%] top-[10vh] h-[80vh]">
        <div className="flex justify-center relative top-[8%]">
          <img src={Logo} className=" w-[32px] h-[42px] "></img>
        </div>

        <div className="flex justify-center relative top-[14%]">
          <p className=" font-normal text-[#222222] text-[14px] ">
            Creating A Focus Realm Account
          </p>
        </div>

        <form
          method="post"
          encType="multipart/form-data"
          onSubmit={registerSubmit}
          className="w-full h-full"
        >
          <div className="flex w-[90%] h-[68px] gap-5 absolute top-[32%] left-[6%]">
            <div className="flex flex-col">
              <label className="Label ">Full Name</label>
              <input
                onChange={registerDataChange}
                value={name}
                required
                name="name"
                id="name"
                type="text"
                placeholder="Your full name"
                className=" pl-[20px]"
              />
            </div>

            <div className="flex flex-col">
              <label className="Label ">Email Address</label>
              <input
                onChange={registerDataChange}
                value={email}
                required
                name="email"
                id="email"
                type="email"
                placeholder="Email Address"
                className=" pl-[20px]"
              />
            </div>

            <div className="flex flex-col">
              <label className="Label ">Age</label>
              <input
                type="text"
                onChange={registerDataChange}
                value={age}
                name="age"
                id="age"
                placeholder="0"
                className="input0 pl-[20px]"
              />
            </div>

            <div className="flex flex-col">
              <label className="Label ">Gender</label>
              <select
                required
                onChange={registerDataChange}
                value={gender}
                name="gender"
                id="gender"
                className="rounded-[25px] pl-[20px]"
              >
                <option>Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>

          <div className="flex w-[90%] h-[68px] gap-5 absolute top-[47%] left-[6%]">
            <div className="flex flex-col">
              <label className="Label ">School Name</label>
              <input
                onChange={registerDataChange}
                value={school}
                name="school"
                id="school"
                type="text"
                placeholder="School name"
                className=" pl-[20px]"
              />
            </div>

            <div className="flex flex-col">
              <label className="Label ">Batch</label>
              <input
                onChange={registerDataChange}
                value={batch}
                name="batch"
                id="batch"
                type="text"
                placeholder="Batch number "
                className=" pl-[20px]"
              />
            </div>

            <div className="flex flex-col">
              <label className="Label ">Mobile Number (Student)</label>
              <input
                onChange={registerDataChange}
                value={studentmobile}
                name="studentmobile"
                type="text"
                required
                placeholder="Mobile  number "
                className=" pl-[20px]"
              />
            </div>
          </div>

          <div className="flex w-[90%] h-[68px] gap-5 absolute top-[62%] left-[6%]">
            <div className="flex flex-col">
              <label className="Label ">Mobile Number (Parent)</label>
              <input
                onChange={registerDataChange}
                value={parentmobile}
                name="parentmobile"
                type="text"
                required
                placeholder="Mobile number"
                className=" pl-[20px]"
              />
            </div>

            <div className="flex flex-col">
              <label className="Label ">Password</label>
              <input
                onChange={registerDataChange}
                name="password"
                required
                value={password}
                id="password"
                type="password"
                placeholder="Set password"
                className=" pl-[20px]"
              />
            </div>

            <div className="flex flex-col">
              <label className="Label ">Upload Id </label>
              <label className="File text-[#999999]">
                Choose file{" "}
                <FaPaperclip className="absolute bottom-[1.1vw] right-[2.5%] fill-[#666666]" />
                <input
                  onChange={registerDataChange}
                  type="file"
                  accept="image/*"
                  name="avatar"
                  id="photo"
                  className=" pl-[20px]"
                />
              </label>
            </div>
          </div>

          <div className="flex justify-center relative bottom-[-69%]">
            <input
              name="signup"
              value="SignUp"
              id="signup"
              type="submit"
              className="text-[#ffffff] bg-[#0148B7] w-[350px] h-[50px] rounded-[25px]"
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
