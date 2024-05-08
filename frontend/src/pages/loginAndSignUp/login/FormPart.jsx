
import { MdOutlineEmail } from "react-icons/md";
import { RiKey2Line } from "react-icons/ri";
import { IoEyeOffOutline } from "react-icons/io5";







export default function FormPart(){
    return(

<form method="post" className="w-full flex-col h-full pt-[10%]">

                <div className="flex flex-col">
                    
                    <label className="text-[14px] font-normal text-[#444444] ">Username</label>

                    <div className="w-full   h-[50px]">
                  


                    
                    
                    <input type="email" placeholder="Email address" className="pl-[12%] relative w-full rounded-[25px] bg-[#F5F5F5] h-[50px]"
                    
                    
                
                    
                    />
                      <MdOutlineEmail fill="#0148B7" className="relative top-[-67%] left-[5%]"/>
                    </div>
                    
                </div>


                <div className="flex pt-[5%] flex-col">
                    <label className="text-[14px] font-normal text-[#444444] ">Password</label>

                    <div className="w-full h-[50px]">
                   
                    

                    <input type="password" placeholder="*************" className="pl-[12%] w-full   
                    rounded-[25px] bg-[#F5F5F5] h-[50px]"/>
                    <RiKey2Line fill="#0148B7" className="relative bottom-[70%] left-[5%] "/>
                    </div>
                    <IoEyeOffOutline fill="#666666" className="relative top-[-4.2vh] left-[52vh]"/>
                    
                </div>


                <div  className="flex pb-[2%] justify-between">
                    <input type="checkbox" className=" justify-start"/>
                    <span className=" relative left-[-18%] text-[13px] text-[#666666]">Remember me</span>
                    <span className="   text-[13px] text-[#666666]">Forgot password?</span>
                    
                </div>


                <div className="pt-[3%]">
                    <button className="bg-[#0148B7] w-full h-[50px] rounded-[25px] font-normal text-[14px] text-[#ffffff]">Login Now</button>
                </div>

                

                <div className="flex pt-[4%]  justify-center">
                <div className="text-[#666666] text-[13px] font-normal">
                    Having an access code? 
                    
                </div>
                <a href="#" className="text-[#0148B7] pl-[3%]  text-[13px] font-normal">Login here</a>
                </div>


                <div className="flex pt-[3%] justify-center">
                <div className="text-[#666666] text-[13px] font-normal">
                    New to Focus Realm?
                </div>
                <a href="#" className="text-[#0148B7] pl-[3%] text-[13px] font-normal">Create an account</a>

                </div>

                













            </form>

);
}