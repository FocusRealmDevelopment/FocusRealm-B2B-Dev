import bullseye from "../../assets/images/bullseye.png";
import frames from "../../assets/images/frames.png";

const Timer = () => {
  return (
    <div className="flex flex-col gap-12 h-11/12  relative items-center  ml-8 mt-4 rounded-lg w-4/5 border mr-4 mb-16 ">
      <div className="flex justify-center items-center mt-24 gap-2 py-8 px-4 h-[2px] bg-[#f2f6fb] border rounded-full ">
        <img src={bullseye} alt="bullseye" className="w-[14px] h-[14px]" />
        <p>
          Your video and audio will be recorded and our AI system is assessing
          your activity
        </p>
      </div>

      <div className="flex gap-2 items-center ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#0148b7"
          className="w-4 h-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
          />
        </svg>
        <p className="text-[15px] font-medium leading-[18.15px] text-[#0148b7]">
          Maths Class on Trigonometry - basics from maters
        </p>
      </div>

      <div className="flex flex-col justify-center width-[320px] height-[56px] ">
        <div className="flex font-light text-[80px]">
          <p className="text-[#999999]">00:</p>
          <p className="text-black">35</p>
          <p className="text-[#999999]">:25</p>
        </div>
      </div>

      <div className="w-[324px] height-[40px]">
        <img src={frames} alt="recording" />
      </div>

      <div className="flex gap-8 text-[#666666]">
        <div className="flex flex-col items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#666666"
            class="w-10 h-10"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <p className="text-[12px] leading-[18px] font-normal">
            Pause and continue later
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#666666"
            class="w-10 h-10"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 0 1 9 14.437V9.564Z"
            />
          </svg>
          <p className="text-[12px] leading-[18px] font-normal">Stop & exit</p>
        </div>
      </div>

      <div className="flex flex-col mt-16  w-2/3 border border-[#4f81d1] p-4 rounded-lg bg-[#f2f6fb] mb-20">
        <p className="text-[14px] font-normal leading-[21px] text-[#444444]">
          Did you know?
        </p>
        <p className="text-[12px] font-normal leading-[18px] text-[#666666]">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.
        </p>
      </div>
    </div>
  );
};

export default Timer;
