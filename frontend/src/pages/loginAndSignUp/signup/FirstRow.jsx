import  registerDataChange  from "./Signup";

export default function FirstRow() {
  return (
    <>
      <div
        className="flex w-[90%] h-[68px] gap-5 absolute top-[32%] 
        left-[6%]  "
      >
        <div className="flex flex-col">
          <label className="Label ">Full Name</label>
          <input
            onChange={registerDataChange}
            value={name}
            required
            name="name"
            id="name"
            type="text"
            placeholder="Your full name"
            className=" pl-[20px] "
          />
        </div>

        <div className="flex  flex-col">
          <label className="Label ">Email Address</label>
          <input
            onChange={registerDataChange}
            value={email}
            required
            name="email"
            id="email"
            type="email"
            placeholder="Email Address"
            className=" pl-[20px] "
          />
        </div>

        <div className="flex  flex-col">
          <label className="Label ">Age</label>
          <input
            type="text"
            onChange={registerDataChange}
            value={age}
            name="age"
            id="age"
            
            placeholder="0"
            className="input0 pl-[20px] "
          />
        </div>

        <div className="flex  flex-col">
          <label className="Label ">Gender</label>
          <select
           required
           onChange={registerDataChange}
           value={gender}
           name="gender"
           id="gender"
           className="rounded-[25px] pl-[20px]">
            <option>Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
      </div>
    </>
  );
}
