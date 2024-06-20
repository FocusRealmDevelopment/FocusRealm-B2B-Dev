import React, { useState, useEffect } from 'react';
import "./SignUpMain.css";
import Logo from "../images/logo.png";
import { FaPaperclip } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { clearErrors, registerStudent } from "../../../actions/studentAction";


import { schoolData } from "./data.jsx";

const StudentSignup = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loading, isAuthenticated } = useSelector(
        (state) => state.student )



    const [user, setUser] = useState({
        email: "",
        password: "",
        name: "",
        age: "",
        gender: "Male",
        school: "",
        batch: "",
        dateofbirth: "",
        address: "",
        studentmobile: "",
        parentmobile: "",
        pincode: "",
    });

    const {
        email,
        password,
        name,
        age,
        gender,
        school,
        batch,
        dateofbirth,
        address,
        studentmobile,
        parentmobile,
        pincode,
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
        myForm.set("dateofbirth", dateofbirth);
        myForm.set("mobileNumber", studentmobile);
        myForm.set("Address", address);
        myForm.set("Pincode", pincode);
        myForm.set("mobileNumberParent", parentmobile);

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

        // if (error) {
        //     dispatch(clearErrors());
        // }


        if (isAuthenticated) {
            navigate("/account");
        }
    }, [dispatch,navigate, isAuthenticated]);

   


    return (
        <>
            <div className="bg-white rounded-[20px] w-[80.5%] mx-auto mt-10 h-auto py-8 px-12">
                <div className="flex relative top-4 ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-6"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                        />
                    </svg>
                </div>
                <div className="flex justify-center items-center py-4">
                    <img src={Logo} className="w-8 h-10" alt="Logo" />
                </div>

                <div className="text-center">
                    <p className="font-normal text-[#222222] text-[14px] mb-6">
                        Creating A Focus Realm Account
                    </p>
                </div>

                <form
                    method="post"
                    encType="multipart/form-data"
                    onSubmit={registerSubmit}
                    className="grid grid-cols-3 gap-6"
                >
                    <div className="flex flex-col">
                        <label className="Label">Full Name</label>
                        <input
                            onChange={registerDataChange}
                            value={name}
                            required
                            name="name"
                            id="name"
                            type="text"
                            placeholder="Your full name"
                            className="pl-[20px] py-2 rounded-[20px]"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="Label">Email Address</label>
                        <input
                            onChange={registerDataChange}
                            value={email}
                            required
                            name="email"
                            id="email"
                            type="email"
                            placeholder="Email Address"
                            className="pl-[20px] py-2 rounded-[20px]"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="Label">Gender</label>
                        <select
                            required
                            onChange={registerDataChange}
                            value={gender}
                            name="gender"
                            id="gender"
                            className="pl-[20px] rounded-[20px] w-full"
                        >
                            <option>Select</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <label className="Label">School Name</label>
                        <select
                            onChange={registerDataChange}
                            value={school}
                            name="school"
                            id="school"
                            type="text"
                            placeholder="School name"
                            className="pl-[20px] py-2 rounded-[20px] w-full"
                        >
                            <option>Select</option>
                            {schoolData &&
                                schoolData.map((item, index) => (
                                    <option key={index} value={item}>{item}</option>
                                ))}
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <label className="Label">Batch</label>
                        <input
                            onChange={registerDataChange}
                            value={batch}
                            required
                            name="batch"
                            id="batch"
                            type="text"
                            placeholder="Batch"
                            className="pl-[20px] py-2 rounded-[20px]"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="Label">Roll Number</label>
                        <input
                            onChange={registerDataChange}
                            value={user.rollnumber}
                            required
                            name="rollnumber"
                            id="rollnumber"
                            type="text"
                            placeholder="Roll Number"
                            className="pl-[20px] py-2 rounded-[20px]"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="Label">Mobile Number (Student)</label>
                        <input
                            onChange={registerDataChange}
                            value={studentmobile}
                            name="studentmobile"
                            type="text"
                            required
                            placeholder="Mobile number"
                            className="pl-[20px] py-2 rounded-[20px]"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="Label">Mobile Number (Parent)</label>
                        <input
                            onChange={registerDataChange}
                            value={parentmobile}
                            name="parentmobile"
                            type="text"
                            required
                            placeholder="Mobile number"
                            className="pl-[20px] py-2 rounded-[20px]"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="Label">Date of Birth</label>
                        <input
                            onChange={registerDataChange}
                            name="dateofbirth"
                            required
                            value={dateofbirth}
                            id="dateofbirth"
                            type="date"
                            placeholder="DD/MM/YYYY"
                            className="pl-[20px] py-2 rounded-[20px]"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="Label">Address</label>
                        <input
                            onChange={registerDataChange}
                            name="address"
                            required
                            value={address}
                            id="address"
                            type="text"
                            placeholder="Address"
                            className="pl-[20px] py-2 rounded-[20px]"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="Label">Pincode</label>
                        <input
                            onChange={registerDataChange}
                            name="pincode"
                            required
                            value={pincode}
                            id="pincode"
                            type="text"
                            placeholder="PIN code"
                            className="pl-[20px] py-2 rounded-[20px]"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="Label">Upload Photo</label>
                        <label className="File text-[#999999] flex items-center cursor-pointer">
                            <span className="mr-2">Choose file</span>
                            <FaPaperclip className="fill-[#666666]" />
                            <input
                                onChange={registerDataChange}
                                type="file"
                                accept="image/*"
                                name="avatar"
                                id="photo"
                                className="hidden"
                            />
                        </label>
                    </div>

                    <div className="flex justify-center mt-4">
                        <input
                            name="signup"
                            value="SignUp"
                            id="signup"
                            type="submit"
                            className="text-[#ffffff] bg-[#0148B7] w-full py-2 rounded-[20px]"
                        />
                    </div>
                </form>

                <div className="text-center mt-6">
                    <div className="text">
                        Having a Focus Realm account?{" "}
                        <button className="text-[#0148B7]" onClick={() => navigate("/Studentlogin")}>
                            Login here
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StudentSignup;
