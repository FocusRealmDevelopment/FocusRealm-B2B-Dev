import circle from "../images/circle.png";
import circle2 from "../images/circle2.png";
import triangle from "../images/triangle.png";
import img1 from "../images/sign5.png";
import img4 from "../images/sign4.png";
import img2 from "../images/sign6.png";
import "../LogInd.css";
import logo from "../images/signlogo.png";

export default function Lowicode() {
  return (
    <div className=" A  w-lvw h-screen">
      <img
        src={triangle}
        className="absolute bottom-0 left-[10px] w-[120px] h-[250px]"
      ></img>
      <img src={circle} className="w-[250px] h-[240px] absolute right-0"></img>
      <img
        src={circle2}
        className=" w-[250px] h-[220px] absolute bottom-0 right-0"
      ></img>
      <div className="w-screen h-screen flex justify-center items-center">
        <div className=" C w-[85%] shadow-[#0148B7]  drop-shadow     rounded-[30px]  h-[75%]  absolute  border-[#0148B7] border-2">
          <img
            src={img1}
            className="    w-[90px] h-[90px] top-[10px] absolute left-[10px]"
          ></img>

          <img
            src={img2}
            className="w-[50px] absolute h-[140px] left-[110px] top-0"
          ></img>

          <img
            src={img4}
            className="w-[15vw] self-stretch h-[15vw] absolute left-[150px] top-[110px]"
          ></img>
          <div className="absolute top-[63%] left-[4%]">
            <div className="font-semibold  text-white text-[2.7vw] ">
              Welcome to the Focus Realm
            </div>
            <div className="text-[1.3vw] L  text-white">
              Step into Focus Realm,Where Distractions Fade and{" "}
            </div>
            <div className="flex justify-center">
              <div className="absolute text-[1.3vw] text-white text-center ">
                Learning thrives!!
              </div>
            </div>
          </div>

          {/* Login with code Right side part */}

          <div className="absolute left-[50%] w-[50%] h-[100%] ">
            <div className="flex justify-center">
              <img
                src={logo}
                className="absolute w-[250px] top-[5%] h-[120px]"
              ></img>
            </div>

            <div className="flex justify-center">
              <div className="absolute top-[29%] font-medium text-[30px] text-black dark:text-white">
                Welcome!
              </div>
            </div>

            <div className="absolute  top-[49%] left-[20%]">
              <div className=" text-[#676767] dark:text-[#949494] text-[16px] ">
                Enter your access code to Log in
              </div>
            </div>

            <input
              type="text"
              placeholder="Access code"
              className=" dark:bg-[#303640] absolute top-[55%] left-[20%]"
            />

            <div className="flex justify-center">
              <div className="w-[63%] left-[20%] absolute top-[60%] h-0 border border-black"></div>
              <div className="text-[#949494] font-medium text-[10px] absolute left-[20%] top-[61%]">
                eg:222-333-444-555
              </div>
            </div>

            <button className="B absolute top-[69%] left-[19%] bg-[#0148B7]  w-[65%] h-[6%] text-white  rounded-[15px] ">
              Login
            </button>

            <div className="flex justify-center">
              <div className="absolute top-[75%] dark:text-white">
                Dont have an account?{" "}
                <a className="text-[#0148B7]" href="#">
                  Sign Up
                </a>
              </div>
            </div>
          </div>

          {/*  */}
        </div>
      </div>
    </div>
  );
}
