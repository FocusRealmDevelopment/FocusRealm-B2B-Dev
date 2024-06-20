// import React from 'react';
import "./SignUpMain.css";
import Logo from "../images/logo.png";
import { FaPaperclip } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, register } from "../../../actions/userAction";
import { schoolData } from "./data.jsx";

const Adminsignup = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { error, loading, isAuthenticated } = useSelector(
        (state) => state.user
    );

    const [user, setUser] = useState({
        email: "",
        password: "",
        name: "",
        gender: "Male",
        school: "",
        studentmobile: "",
        address: "",
        dateofbirth: "",
        pincode: "",
    });

    const {
        email,
        password,
        name,
        gender,
        school,
        dateofbirth,
        address,
        studentmobile,
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
        myForm.set("gender", gender);
        myForm.set("dateofbirth", dateofbirth);
        myForm.set("Address", address);
        myForm.set("Pincode", pincode);
        myForm.set("mobileNumber", studentmobile);
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

    console.log(user);
    console.log(avatar);

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
            <div className=" bg-white rounded-[20px] w-[80.5%] relative left-[10%] top-[10vh] h-[80vh] px-12">
                <div className="flex absolute top-4 ">
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
                        <div className="flex flex-col gap-1">
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

                        <div className="flex flex-col gap-1  ">
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

                        <div className="flex flex-col gap-1 w-1/3">
                            <label className="Label ">Gender</label>
                            <select
                                required
                                onChange={registerDataChange}
                                value={gender}
                                name="gender"
                                id="gender"
                                className="rounded-[25px] pl-[20px] w-full"
                            >
                                <option className="">Select</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex w-[90%] h-[68px] gap-5 absolute top-[47%] left-[6%]">
                        <div className="flex flex-col gap-1">
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

                        <div className="flex flex-col gap-1">
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

                        <div className="flex flex-col gap-1">
                            <label className="Label ">Date Of Birth</label>
                            <input
                                onChange={registerDataChange}
                                name="dateofbirth"
                                required
                                value={dateofbirth}
                                id="dateofbirth"
                                type="date"
                                placeholder="DD/MM/YYYY"
                                className=" pl-[20px] text-[#999999]"
                            />
                        </div>
                    </div>

                    <div className="flex w-[90%] h-[68px] gap-5 absolute top-[62%] left-[6%]">
                        <div className="flex flex-col gap-1 w-1/3">
                            <label className="Label ">School Name</label>
                            <select
                                onChange={registerDataChange}
                                value={school}
                                name="school"
                                id="school"
                                type="text"
                                placeholder="School name"
                                className="rounded-[25px] pl-[20px] w-full"
                            >
                                <option className="">Select</option>

                                {schoolData &&
                                    schoolData.map((item, index) => (
                                        <option value={item}>{item}</option>
                                    ))}
                            </select>
                        </div>

                        <div className="flex flex-col gap-1 w-2/3  ">
                            <label className="Label ">Address</label>
                            <input
                                onChange={registerDataChange}
                                name="address"
                                required
                                value={address}
                                id="address"
                                type="text"
                                placeholder="Address"
                                className=" pl-[20px] w-full "
                            />
                        </div>
                    </div>

                    <div className="flex w-[90%] h-[68px] gap-5 absolute top-[77%] left-[6%]">
                        <div className="flex flex-col gap-1">
                            <label className="Label ">Pincode</label>
                            <input
                                onChange={registerDataChange}
                                name="pincode"
                                required
                                value={pincode}
                                id="pincode"
                                type="text"
                                placeholder="PIN code"
                                className=" pl-[20px]"
                            />
                        </div>

                        <div className="flex flex-col w-1/3 gap-1">
                            <label className="Label ">Upload Id </label>
                            <label className="File text-[#999999]">
                                Choose file{" "}
                                <FaPaperclip className="absolute bottom-[1.1vw] left-[62.5%] fill-[#666666]" />
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

                        <div className="flex flex-grow justify-center relative bottom-[-25%]">
                            <input
                                name="signup"
                                value="SignUp"
                                id="signup"
                                type="submit"
                                className="text-[#ffffff] bg-[#0148B7] w-full h-[50px] rounded-[25px]"
                            />
                        </div>
                    </div>
                </form>

                <div className="flex justify-center relative bottom-[20%]">
                    <div className="text">
                        Having an Focus Realm account?{" "}
                        <button className="text-[#0148B7]" onClick={() => navigate("/Adminlogin")}>
                            Login here
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Adminsignup;
