import login from "../images/login.png";



export default function DownPart(){
    return(
<div className="h-[80vh] w-[58%] rounded-[20px] absolute bg-[#0148B7] right-0">
          <div className="flex justify-center  relative  top-[18%]">
            <img src={login} className="  w-[60%] h-[45%]"></img>
          </div>
          <div className="flex relative top-[20%] justify-center">
            <div className="text-white relative  font-semibold text-[18px]">
              Welcome to the Focus Realm
            </div>
          </div>
          <div className="flex relative top-[22%] justify-center">
            <div className="text-white relative font-[400]  text-[13px]">
              Step into Focus Realm,Where Distractions Fade and Learning
              Thrives!
            </div>
          </div>
        </div>

);
}