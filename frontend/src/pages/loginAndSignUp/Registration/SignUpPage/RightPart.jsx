import logo from "../images/signlogo.png";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./rightpart.module.css";
import { useNavigate } from "react-router-dom";
import { clearErrors,  register } from "../../../../actions/userAction";

export default function Rpart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, loading, isAuthenticated } = useSelector(state => state.user)


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
          setAvatarPreview(reader.result)
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
      navigate("/account")
    }

  }, [dispatch, error, navigate, isAuthenticated])


  return (
    <div
      className="absolute left-[50%] rounded-r-[40px] top-0 bg-[#FFFFFF] dark:bg-[#303640] w-[50%] 
h-[100%] "
    >
      <img
        src={logo}
        className="w-[20vw] absolute left-[30%] top-[2vw] h-[10vw]"
      ></img>

      <div className="flex justify-center">
        <div className="   top-[15%]  w-full h-screen">
          <form
            method="POST"
            encType="multipart/form-data"
            onSubmit={registerSubmit}
          >
            <div className="w-[390px]  h-[896px] flex-col justify-center items-center gap-[15px] absolute left-[10.5vw] top-[15vw] inline-flex">
              <div className="flex-col justify-center items-start gap-[15px] flex">
                <div className="w-[374px] h-[92px] px-2 py-[7px] bg-white bg-opacity-0 flex-col justify-start items-start flex">
                  <div className="self-stretch text-black dark:text-white text-base font-medium  tracking-wide">
                    Email
                  </div>

                  <input
                    onChange={registerDataChange}
                    value={email}
                    required
                    name="email"
                    id="email"
                    autoComplete="off"
                    type="email"
                    placeholder="Enter your Email Address"
                    className="pl-[20px] w-[374px] Bg bg-[#0020511a] h-[92px] rounded-[15px]"
                  />
                </div>
                <div className="w-[374px] h-[92px] px-2 py-[7px] bg-white bg-opacity-0 flex-col justify-start items-start flex">
                  <div className="self-stretch dark:text-white text-black text-base font-medium  tracking-wide">
                    Password
                  </div>

                  <input
                    onChange={registerDataChange}
                    name="password"
                    required
                    value={password}
                    id="password"
                    type="Password"
                    placeholder="*********"
                    className="pl-[20px] w-[374px] Bg bg-[#0020511a] h-[92px] rounded-[15px]"
                  />
                </div>
                <div className="w-[374px] h-[92px] px-2 py-[7px] bg-white bg-opacity-0 flex-col justify-start items-start flex">
                  <div className="self-stretch dark:text-white text-black text-base font-medium  tracking-wide">
                    Name
                  </div>

                  <input
                    onChange={registerDataChange}
                    value={name}
                    required
                    name="name"
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    className="pl-[20px] w-[374px] Bg bg-[#0020511a] h-[92px] rounded-[15px]"
                  />
                </div>
                <div className="self-stretch justify-start items-center gap-[15px] inline-flex">
                  <div className="h-[92px] px-2 py-[7px] bg-white bg-opacity-0 flex-col justify-start items-start inline-flex">
                    <div className="text-black text-base font-medium  dark:text-white tracking-wide">
                      Age
                    </div>
                    <input
                      onChange={registerDataChange}
                      value={age}
                      name="age"
                      id="age"
                      type="text"
                      placeholder="12"
                      pattern="[0-9]{2}"
                      required
                      className="w-[112px] Bg rounded-[15px] h-[56px] pl-[13px]  bg-[#0020511a]"
                    />
                  </div>
                  <div className="grow shrink basis-0 h-[92px] px-2 py-[7px] bg-white bg-opacity-0 flex-col justify-start items-start inline-flex">
                    <div className="text-black dark:text-white text-base font-medium  tracking-wide">
                      Gender
                    </div>

                    <select
                      required
                      onChange={registerDataChange}
                      value={gender}
                      name="gender"
                      id="gender"
                      className="w-[230px] pl-[12px] h-[56px] Bg bg-[#0020511a] rounded-[15px]"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                </div>
                <div className="self-stretch justify-start items-center gap-[15px] inline-flex">
                  <div className="grow shrink basis-0 h-[92px] px-2 py-[7px] bg-white bg-opacity-0 flex-col justify-start items-start inline-flex">
                    <div className="text-black dark:text-white text-base font-medium  tracking-wide">
                      School Name
                    </div>
                    <input
                      onChange={registerDataChange}
                      value={school}
                      name="school"
                      id="school"
                      type="text"
                      placeholder="ABES"
                      className="pl-[20px] w-[374px] Bg bg-[#0020511a] h-[92px] rounded-[15px]"
                    />
                  </div>
                </div>
                <div className="self-stretch justify-start items-center gap-[15px] inline-flex">
                  <div className="grow shrink basis-0 h-[92px] px-2 py-[7px] bg-white bg-opacity-0 flex-col justify-start items-start inline-flex">
                    <div className="text-black dark:text-white text-base font-medium  tracking-wide">
                      Batch
                    </div>
                    <input
                      onChange={registerDataChange}
                      value={batch}
                      name="batch"
                      id="batch"
                      type="text"
                      placeholder="batch_123"
                      className="pl-[20px] w-[374px] Bg bg-[#0020511a] h-[92px] rounded-[15px]"
                    />
                  </div>
                </div>
                <div className="self-stretch justify-start items-center gap-[15px] inline-flex">
                  <div className="grow shrink basis-0 h-[92px] px-2 py-[7px] bg-white bg-opacity-0 flex-col justify-start items-start inline-flex">
                    <div className="text-black dark:text-white text-base font-medium  tracking-wide">
                      Upload Photo
                    </div>
                    <input
                      onChange={registerDataChange}
                      type="file"
                      accept="image/*"
                      name="avatar"
                      id="photo"
                      placeholder="Upload your photo"
                      className={`pl-[20px] w-[374px] bg-[#0020511a]  Bg  h-[92px] rounded-[15px] ${styles.avatar}`}
                    />
                  </div>
                </div>
                <div className="w-[374px] h-[92px] px-2 py-[7px] bg-white bg-opacity-0 flex-col justify-start items-start flex">
                  <div className="self-stretch text-black text-base font-medium  dark:text-white tracking-wide">
                    Mobile Number(Student)
                  </div>
                  <input
                    onChange={registerDataChange}
                    value={studentmobile}
                    name="studentmobile"
                    type="text"
                    // pattern="[0-9]{10}"
                    required
                    placeholder="9877*****"
                    className="pl-[20px] Bg w-[374px] bg-[#0020511a] h-[92px] Bg rounded-[15px]"
                  />
                </div>
                <div className="w-[374px] h-[92px] px-2 py-[7px] bg-white bg-opacity-0 flex-col justify-start items-start flex">
                  <div className="self-stretch dark:text-white text-black text-base font-medium  tracking-wide">
                    Mobile Number(Parent)
                  </div>
                  <input
                    onChange={registerDataChange}
                    value={parentmobile}
                    name="parentmobile"
                    type="text"
                    // pattern="[0-9]{10}"
                    required
                    placeholder="9877*****"
                    className=" Bg pl-[20px] w-[374px] bg-[#0020511a] h-[92px] rounded-[15px]"
                  />
                </div>
              </div>
              <div className="w-[374px] h-[92px] px-2 py-[7px] bg-white bg-opacity-0 flex-col justify-start items-start flex">
                <input
                  name="signup"
                  value="SignUp"
                  id="signup"
                  type="submit"
                  className="self-stretch   relative w-[320px] tracking-wide bg-[#0148B7] text-white 
                  left-[1.5vw] font-semibold  text-center shadow-md shadow-[#0148B7] h-[45px]  rounded-2xl"
                />
              </div>

              <div className="w-[374px] h-[92px]   bg-white bg-opacity-0 flex-col justify-start items-start flex">
                <div className=" w-full text-[11px]   ">
                  <div className=" left-[4vw] absolute  dark:text-white ">
                    I agree to the{" "}
                    <a className="text-[#0148B7]" href="#">
                      Terms and condition
                    </a>{" "}
                    and{" "}
                    <a className="text-[#0148B7]" href="#">
                      Privacy policy
                    </a>
                  </div>

                  <input type="checkbox" className="absolute left-[3vw] " />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
