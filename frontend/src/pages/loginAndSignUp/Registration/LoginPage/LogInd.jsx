import circle from "../images/circle.png";
import circle2 from "../images/circle2.png";
import triangle from "../images/triangle.png";
import img1 from "../images/sign5.png";
import img2 from "../images/sign6.png";
import img3 from "../images/sign4.png";
import "../LogInd.css";
import LoInRi from "./LogIndRig";

export default function LogInd() {
  return (
    <div className="A w-lvw h-screen">
      <img
        src={triangle}
        className="absolute bottom-0 left-[10px] w-[120px] h-[250px]"
      ></img>
      <img src={circle} className="w-[250px] h-[240px] absolute right-0"></img>
      <img
        src={circle2}
        className="w-[250px] h-[220px] absolute bottom-0 right-0"
      ></img>
      <div className="w-screen h-screen flex justify-center items-center">
        <div className=" C w-[85%] shadow-[#0148B7]  drop-shadow     rounded-[30px]  h-[75%]  absolute  border-[#0148B7] border-2">
          <img
            src={img1}
            className="w-[5vw] h-[90px] top-[10px] absolute left-[10px]"
          ></img>

          <img
            src={img2}
            className="w-[50px] absolute h-[140px] left-[110px] top-0"
          ></img>

          <img
            src={img3}
            className="w-[17vw] 
               h-[19vw] absolute top-[10%]  left-[150px]
         "
          ></img>
          <div className="absolute top-[60%] left-[4%]">
            <div className="font-semibold text-[2.8vw] relative  text-white">
              Welcome to the Focus Realm
            </div>
            <div className="text-[1.4vw] L  text-white relative ">
              Step into Focus Realm,Where Distractions Fade and{" "}
            </div>
            <div className="flex justify-center">
              <div className="absolute text-[1.5vw] text-white text-center ">
                Learning thrives!!
              </div>
            </div>
          </div>

          {/*  */}
          <LoInRi />

          {/*  */}
        </div>
      </div>
    </div>
  );
}
