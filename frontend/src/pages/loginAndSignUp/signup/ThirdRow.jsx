import { FaPaperclip } from "react-icons/fa6";





export default function ThirdRow(){
    return(
        <>

        <div
          className="flex w-[90%] h-[68px] gap-5 absolute top-[62%] 
        left-[6%]  "
        >
          <div className="flex flex-col">
            <label className="Label ">Mobile Number (Parent)</label>
            <input
              type="text"
              placeholder="Mobile number"
              className=" pl-[20px] "
            />
          </div>

          <div className="flex  flex-col">
            <label className="Label ">Password</label>
            <input
              type="password"
              placeholder="Set password"
              className=" pl-[20px] "
            />
          </div>

          <div className="flex  flex-col">
            
            <label className="Label ">Upload Id </label>
            
            <label className="File text-[#999999]">
              Choose file <FaPaperclip className="absolute 
              bottom-[1.1vw] right-[2.5%] fill-[#666666]"/>
              <input type="file" className=" pl-[20px] " />
            </label>
            
          </div>
        </div>
        </>
    );
}