




export default function FirstRow(){
    return(
        <>
        <div
          className="flex w-[90%] h-[68px] gap-5 absolute top-[32%] 
        left-[6%]  "
        >
          <div className="flex flex-col">
            <label className="Label ">Full Name</label>
            <input
              type="text"
              placeholder="Your full name"
              className=" pl-[20px] "
            />
          </div>

          <div className="flex  flex-col">
            <label className="Label ">Email Address</label>
            <input
              type="email"
              placeholder="Email Address"
              className=" pl-[20px] "
            />
        </div>

        <div className="flex  flex-col">
          <label className="Label ">Age</label>
          <input type="text"  placeholder="0" className="input0 pl-[20px] " />
        </div>

        <div className="flex  flex-col">
          <label className="Label ">Gender</label>
          <select className="rounded-[25px] pl-[20px]">
            <option>Select</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        </div>
        </>
    );
}