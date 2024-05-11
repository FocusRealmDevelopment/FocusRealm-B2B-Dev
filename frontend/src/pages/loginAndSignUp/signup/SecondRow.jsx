



export default function SecondRow(){
    return(
        <>

        <div
          className="flex w-[90%] h-[68px] gap-5 absolute top-[47%] 
         left-[6%]  "
        >
          <div className="flex flex-col">
            <label className="Label ">School Name</label>
            <input
              onChange={registerDataChange}
              value={school}
              name="school"
              id="school"
              
              type="text"
              placeholder="School name"
              className=" pl-[20px] "
            />
          </div>

          <div className="flex  flex-col">
            <label className="Label ">Batch</label>
            <input
              onChange={registerDataChange}
              value={batch}
              name="batch"
              id="batch"
              type="text"
              placeholder="Batch number "
              className=" pl-[20px] "
            />
          </div>

          <div className="flex  flex-col">
            <label className="Label ">Mobile Number (Student)</label>
            <input
              onChange={registerDataChange}
              value={studentmobile}
              name="studentmobile"
              type="text"
              required
              placeholder="Mobile  number "
              className=" pl-[20px] "
            />
          </div>
        </div>
        </>
    );
}