import circle2 from "../images/circle3.png";
import "../LogInd.css";
import circle from "../images/circle.png";
import App from "./App";

export default function FiSignUp() {
  return (
    <div className="A w-screen  h-screen">
      <img src={circle} className="absolute w-[250px] h-[240px] right-0"></img>

      <img
        src={circle2}
        className="w-[350px] h-[320px] absolute bottom-[-150px] right-0"
      ></img>

      <div className="w-[100%] h-[193%]  flex justify-center items-center">
        <App />
        <div className="w-[100%] absolute top-[101%] left-0 -z-50 h-[30vw] dark:bg-[#262B33]"></div>
      </div>
    </div>
  );
}
