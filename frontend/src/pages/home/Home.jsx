import Fig from "../../assets/images/Home_Figure.png";
import Eng from "../../assets/images/eng.png";
import Che from "../../assets/images/chemistry.png";
import Hindi from "../../assets/images/hindi.png";
import Phy from "../../assets/images/physics.png";
import Sem from "../../assets/images/seminar.png";
import Bk from "../../assets/images/book_fair.png";
import Book from "../../assets/images/book.png";
// import OrdinaryCalendar from '../calendar/DetailedCalendar/OrdinaryCalendar'
const Home = () => {
  return (
    <div className="flex w-full">
      <div className="flex flex-col">
        <div className="relative px-[25px] py-[15px] mx-[25px] mt-[20px] mb-[10px] flex bg-[#a1a1fa] rounded-3xl">
          <div className="flex flex-col w-[80%]">
            <h1 className="font-[600] text-[16px] leading-[24px] text-[#FFFFFF] my-[5px]">
              NEET & IIT Entrances Are Nearby
            </h1>
            <p className="font-[400] text-[12px] leading-[18px] text-[#FFFFFF] my-[5px]">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.{" "}
            </p>
            <button className="font-[400] text-[12px] w-max px-[15px] my-[5px] py-[7px] rounded-3xl bg-white leading-[18px] text-[#000000]">
              View Details
            </button>
          </div>
          <img
            src={Fig}
            alt=""
            className="absolute h-[190px] w-auto right-0 top-[-39px]"
          />
        </div>
        <div className="flex justify-between px-[25px] items-center">
          <h1 className="font-[500] text-[18px] leading-[27px] text-[#000000]">
            Study Materials
          </h1>
          <button className="flex items-center">
            <span className="pr-3 font-[400] text-[14px] leading-[21px] text-[#014AAB]">
              View All
            </span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 7.2V4.8L11.2 8L8 11.2V8.8H4.8V7.2H8ZM8 0C12.416 0 16 3.584 16 8C16 12.416 12.416 16 8 16C3.584 16 0 12.416 0 8C0 3.584 3.584 0 8 0ZM8 14.4C11.536 14.4 14.4 11.536 14.4 8C14.4 4.464 11.536 1.6 8 1.6C4.464 1.6 1.6 4.464 1.6 8C1.6 11.536 4.464 14.4 8 14.4Z"
                fill="#014AAB"
              />
            </svg>
          </button>
        </div>
        <div className="my-[5px] flex w-full px-[25px]">
          <div className="bg-[#FFFFFF] rounded-3xl py-[12px] w-[24%] mx-[9px] flex flex-col items-center justify-center">
            <div className="h-[83px] w-[83px] rounded-[50%] bg-[#00000014] flex justify-center items-center">
              <img src={Eng} alt="" className="h-auto w-[48px]" />
            </div>
            <h1 className="font-[600] text-[15px] leading-[22.5px] text-[#222222] my-[5px]">
              English
            </h1>
            <p className="font-[400] text-[12px] leading-[18px] text-[#536380] my-[5px]">
              304 Materials
            </p>
            <button className="font-[400] text-[12px] w-max px-[15px] my-[5px] py-[7px] rounded-3xl bg-[#DCE6F6] leading-[18px] text-[#0148B7]">
              View Details
            </button>
          </div>
          <div className="bg-[#FFFFFF] rounded-3xl py-[12px] w-[24%] mx-[9px] flex flex-col items-center justify-center">
            <div className="h-[83px] w-[83px] rounded-[50%] bg-[#00000014] flex justify-center items-center">
              <img src={Che} alt="" className="h-auto w-[48px]" />
            </div>
            <h1 className="font-[600] text-[15px] leading-[22.5px] text-[#222222] my-[5px]">
              Chemistry
            </h1>
            <p className="font-[400] text-[12px] leading-[18px] text-[#536380] my-[5px]">
              442 Materials
            </p>
            <button className="font-[400] text-[12px] w-max px-[15px] my-[5px] py-[7px] rounded-3xl bg-[#DCE6F6] leading-[18px] text-[#0148B7]">
              View Details
            </button>
          </div>
          <div className="bg-[#FFFFFF] rounded-3xl py-[12px] w-[24%] mx-[9px] flex flex-col items-center justify-center">
            <div className="h-[83px] w-[83px] rounded-[50%] bg-[#00000014] flex justify-center items-center">
              <img src={Hindi} alt="" className="h-auto w-[48px]" />
            </div>
            <h1 className="font-[600] text-[15px] leading-[22.5px] text-[#222222] my-[5px]">
              Hindi
            </h1>
            <p className="font-[400] text-[12px] leading-[18px] text-[#536380] my-[5px]">
              304 Materials
            </p>
            <button className="font-[400] text-[12px] w-max px-[15px] my-[5px] py-[7px] rounded-3xl bg-[#DCE6F6] leading-[18px] text-[#0148B7]">
              View Details
            </button>
          </div>
          <div className="bg-[#FFFFFF] rounded-3xl py-[12px] w-[24%] mx-[9px] flex flex-col items-center justify-center">
            <div className="h-[83px] w-[83px] rounded-[50%] bg-[#00000014] flex justify-center items-center">
              <img src={Phy} alt="" className="h-auto w-[48px]" />
            </div>
            <h1 className="font-[600] text-[15px] leading-[22.5px] text-[#222222] my-[5px]">
              Physics
            </h1>
            <p className="font-[400] text-[12px] leading-[18px] text-[#536380] my-[5px]">
              304 Materials
            </p>
            <button className="font-[400] text-[12px] w-max px-[15px] my-[5px] py-[7px] rounded-3xl bg-[#DCE6F6] leading-[18px] text-[#0148B7]">
              View Details
            </button>
          </div>
        </div>
        <div className="flex justify-between px-[25px] items-center">
          <h1 className="font-[500] text-[18px] leading-[27px] text-[#000000]">
            Your Tests
          </h1>
          <button className="flex items-center">
            <span className="pr-3 font-[400] text-[14px] leading-[21px] text-[#014AAB]">
              View All
            </span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 7.2V4.8L11.2 8L8 11.2V8.8H4.8V7.2H8ZM8 0C12.416 0 16 3.584 16 8C16 12.416 12.416 16 8 16C3.584 16 0 12.416 0 8C0 3.584 3.584 0 8 0ZM8 14.4C11.536 14.4 14.4 11.536 14.4 8C14.4 4.464 11.536 1.6 8 1.6C4.464 1.6 1.6 4.464 1.6 8C1.6 11.536 4.464 14.4 8 14.4Z"
                fill="#014AAB"
              />
            </svg>
          </button>
        </div>
        <div className="my-[5px] flex w-full px-[25px]">
          <div className="flex flex-col bg-[#FFFFFF] rounded-3xl mx-[9px] px-[15px] py-[15px]">
            <div className="flex justify-between">
              <p className="font-[400] text-[11px] leading-[16.5px] text-[#536380] my-[5px]">
                12 Questions
              </p>
              <div className="h-[30px] w-[30px] rounded-[50%] bg-[#4F81D133] flex justify-center items-center cursor-pointer">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z"
                    fill="#222222"
                  />
                </svg>
              </div>
            </div>
            <h1 className="font-[600] text-[14px] leading-[20px] text-[#222222] my-[5px]">
              Chemistry Diagnostic Test
            </h1>
            <p className="font-[400] text-[12px] w-max px-[15px] my-[5px] py-[7px] rounded-3xl border border-[#4F81D1] leading-[18px] text-[#0148B7]">
              Chemistry
            </p>
            <div className="w-full my-2 p-[2px] relative bg-[#EEEEEE] rounded-[30px]">
              <div className="bg-[#0148B7] h-[3px] rounded-md w-[50%] z-[2]"></div>
            </div>
          </div>
          <div className="flex flex-col bg-[#FFFFFF] rounded-3xl mx-[9px] px-[15px] py-[15px]">
            <div className="flex justify-between">
              <p className="font-[400] text-[11px] leading-[16.5px] text-[#536380] my-[5px]">
                30 Questions
              </p>
              <div className="h-[30px] w-[30px] rounded-[50%] bg-[#4F81D133] flex justify-center items-center cursor-pointer">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z"
                    fill="#222222"
                  />
                </svg>
              </div>
            </div>
            <h1 className="font-[600] text-[14px] leading-[20px] text-[#222222] my-[5px]">
              Electronics - Weekly Test 03
            </h1>
            <p className="font-[400] text-[12px] w-max px-[15px] my-[5px] py-[7px] rounded-3xl border border-[#4F81D1] leading-[18px] text-[#0148B7]">
              Physics
            </p>
            <p className="font-[400] text-[11px] my-[5px] leading-[18px] text-[#536380]">
              Expires in{" "}
              <span className="font-[500] text-[11px] my-[5px] leading-[18px] text-[#0148B7]">
                3 days
              </span>
            </p>
          </div>
          <div className="flex flex-col bg-[#FFFFFF] rounded-3xl mx-[9px] px-[15px] py-[15px]">
            <div className="flex justify-between">
              <p className="font-[400] text-[11px] leading-[16.5px] text-[#536380] my-[5px]">
                12 Questions
              </p>
              <div className="h-[30px] w-[30px] rounded-[50%] bg-[#4F81D133] flex justify-center items-center cursor-pointer">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z"
                    fill="#222222"
                  />
                </svg>
              </div>
            </div>
            <h1 className="font-[600] text-[14px] leading-[20px] text-[#222222] my-[5px]">
              Chemistry Diagnostic Test
            </h1>
            <p className="font-[400] text-[12px] w-max px-[15px] my-[5px] py-[7px] rounded-3xl border border-[#4F81D1] leading-[18px] text-[#0148B7]">
              Chemistry
            </p>
            <div className="w-full my-2 p-[2px] relative bg-[#EEEEEE] rounded-[30px]">
              <div className="bg-[#0148B7] h-[3px] rounded-md w-[70%] z-[2]"></div>
            </div>
          </div>
          <div className="flex flex-col bg-[#FFFFFF] rounded-3xl mx-[9px] px-[15px] py-[15px]">
            <div className="flex justify-between">
              <p className="font-[400] text-[11px] leading-[16.5px] text-[#536380] my-[5px]">
                12 Questions
              </p>
              <div className="h-[30px] w-[30px] rounded-[50%] bg-[#4F81D133] flex justify-center items-center cursor-pointer">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z"
                    fill="#222222"
                  />
                </svg>
              </div>
            </div>
            <h1 className="font-[600] text-[14px] leading-[20px] text-[#222222] my-[5px]">
              Chemistry Diagnostic Test
            </h1>
            <p className="font-[400] text-[12px] w-max px-[15px] my-[5px] py-[7px] rounded-3xl border border-[#4F81D1] leading-[18px] text-[#0148B7]">
              Chemistry
            </p>
            <div className="w-full my-2 p-[2px] relative bg-[#EEEEEE] rounded-[30px]">
              <div className="bg-[#0148B7] h-[3px] rounded-md w-[20%] z-[2]"></div>
            </div>
          </div>
        </div>
        <div className="flex justify-between px-[25px] items-center">
          <h1 className="font-[500] text-[18px] leading-[27px] text-[#000000]">
            Study Materials
          </h1>
          <button className="flex items-center">
            <span className="pr-3 font-[400] text-[14px] leading-[21px] text-[#014AAB]">
              View All
            </span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 7.2V4.8L11.2 8L8 11.2V8.8H4.8V7.2H8ZM8 0C12.416 0 16 3.584 16 8C16 12.416 12.416 16 8 16C3.584 16 0 12.416 0 8C0 3.584 3.584 0 8 0ZM8 14.4C11.536 14.4 14.4 11.536 14.4 8C14.4 4.464 11.536 1.6 8 1.6C4.464 1.6 1.6 4.464 1.6 8C1.6 11.536 4.464 14.4 8 14.4Z"
                fill="#014AAB"
              />
            </svg>
          </button>
        </div>
        <div className="my-[25px] flex w-full px-[25px]">
          <div className="bg-[#FFFFFF] relative rounded-3xl py-[12px] px-[17px] w-[24%] mx-[9px] flex flex-col justify-center">
            <div className="h-[53px] w-[53px] absolute top-[-25px] left-[15px] rounded-[50%] bg-[#DCE6F6] flex justify-center items-center">
              <img src={Book} alt="" className="h-[34px] w-[34px]" />
            </div>
            <h1 className="font-[600] text-[14px] mt-[15px] leading-[20px] text-[#222222] my-[5px]">
              Matter and Measurement
            </h1>
            <p className="font-[400] text-[11px] my-[5px] leading-[18px] text-[#536380]">
              Due on April 28
            </p>
            <p className="font-[400] text-[12px] w-max px-[15px] my-[5px] py-[7px] rounded-3xl border border-[#4F81D1] leading-[18px] text-[#0148B7]">
              Chemistry
            </p>
            <p className="font-[400] text-[11px] my-[5px] leading-[18px] text-[#536380]">
              Teacher:{" "}
              <span className="font-[500] text-[11px] my-[5px] leading-[18px] text-[#0148B7]">
                Amrutha R
              </span>
            </p>
          </div>
          <div className="bg-[#FFFFFF] relative rounded-3xl py-[12px] px-[17px] w-[24%] mx-[9px] flex flex-col justify-center">
            <div className="h-[53px] w-[53px] absolute top-[-25px] left-[15px] rounded-[50%] bg-[#DCE6F6] flex justify-center items-center">
              <img src={Book} alt="" className="h-[34px] w-[34px]" />
            </div>
            <h1 className="font-[600] text-[14px] mt-[15px] leading-[20px] text-[#222222] my-[5px]">
              Matter and Measurement
            </h1>
            <p className="font-[400] text-[11px] my-[5px] leading-[18px] text-[#536380]">
              Due on April 28
            </p>
            <p className="font-[400] text-[12px] w-max px-[15px] my-[5px] py-[7px] rounded-3xl border border-[#4F81D1] leading-[18px] text-[#0148B7]">
              Chemistry
            </p>
            <p className="font-[400] text-[11px] my-[5px] leading-[18px] text-[#536380]">
              Teacher:{" "}
              <span className="font-[500] text-[11px] my-[5px] leading-[18px] text-[#0148B7]">
                Amrutha R
              </span>
            </p>
          </div>
          <div className="bg-[#FFFFFF] relative rounded-3xl py-[12px] px-[17px] w-[24%] mx-[9px] flex flex-col justify-center">
            <div className="h-[53px] w-[53px] absolute top-[-25px] left-[15px] rounded-[50%] bg-[#DCE6F6] flex justify-center items-center">
              <img src={Book} alt="" className="h-[34px] w-[34px]" />
            </div>
            <h1 className="font-[600] text-[14px] mt-[15px] leading-[20px] text-[#222222] my-[5px]">
              Matter and Measurement
            </h1>
            <p className="font-[400] text-[11px] my-[5px] leading-[18px] text-[#536380]">
              Due on April 28
            </p>
            <p className="font-[400] text-[12px] w-max px-[15px] my-[5px] py-[7px] rounded-3xl border border-[#4F81D1] leading-[18px] text-[#0148B7]">
              Chemistry
            </p>
            <p className="font-[400] text-[11px] my-[5px] leading-[18px] text-[#536380]">
              Teacher:{" "}
              <span className="font-[500] text-[11px] my-[5px] leading-[18px] text-[#0148B7]">
                Amrutha R
              </span>
            </p>
          </div>
          <div className="bg-[#FFFFFF] relative rounded-3xl py-[12px] px-[17px] w-[24%] mx-[9px] flex flex-col justify-center">
            <div className="h-[53px] w-[53px] absolute top-[-25px] left-[15px] rounded-[50%] bg-[#DCE6F6] flex justify-center items-center">
              <img src={Book} alt="" className="h-[34px] w-[34px]" />
            </div>
            <h1 className="font-[600] text-[14px] mt-[15px] leading-[20px] text-[#222222] my-[5px]">
              Matter and Measurement
            </h1>
            <p className="font-[400] text-[11px] my-[5px] leading-[18px] text-[#536380]">
              Due on April 28
            </p>
            <p className="font-[400] text-[12px] w-max px-[15px] my-[5px] py-[7px] rounded-3xl border border-[#4F81D1] leading-[18px] text-[#0148B7]">
              Chemistry
            </p>
            <p className="font-[400] text-[11px] my-[5px] leading-[18px] text-[#536380]">
              Teacher:{" "}
              <span className="font-[500] text-[11px] my-[5px] leading-[18px] text-[#0148B7]">
                Amrutha R
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="w-[20%] flex flex-col">
        <div className="flex flex-col bg-[#FFFFFF] rounded-3xl mx-[9px] px-[15px] py-[15px] h-[265px] w-full my-[20px]">
          <h1 className="font-[600] text-[15px] leading-[22.5px] text-[#222222] my-[5px]">
            Calendar
          </h1>
          <div className="flex h-full w-full justify-center items-center">
            <p className="font-[400] text-[12px] leading-[18px] text-[#666666] my-[5px]">
              Calendar widget here
            </p>
            {/* <OrdinaryCalendar currentDate={new Date()} /> */}
          </div>
        </div>
        <div className="flex flex-col bg-[#FFFFFF] rounded-3xl mx-[9px] w-full px-[12px] py-[15px] my-[20px]">
          <div className="flex justify-between">
            <h1 className="font-[500] text-[16px] leading-[24px] text-[#444444] my-[5px]">
              Upcoming Events
            </h1>
            <div className="h-[30px] w-[30px] rounded-[50%] bg-[#4F81D133] flex justify-center items-center cursor-pointer">
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z"
                  fill="#222222"
                />
              </svg>
            </div>
          </div>
          <div className="flex my-2">
            <img
              src={Sem}
              alt=""
              className="h-[60px] w-[60px] rounded-[20px]"
            />
            <div className="pl-3">
              <h1 className="font-[500] text-[14px] leading-[21px] text-[#0148B7]">
                Annual Seminar
              </h1>
              <p className="font-[400] text-[12px] leading-[18px] text-[#666666]">
                Seminars & Training
              </p>
              <p className="font-[400] text-[10px] leading-[15px] text-[#0148B7]">
                Jan 20 (09.00 AM-06.00 PM)
              </p>
            </div>
          </div>
          <div className="flex my-2">
            <img src={Bk} alt="" className="h-[60px] w-[60px] rounded-[20px]" />
            <div className="pl-3">
              <h1 className="font-[500] text-[14px] leading-[21px] text-[#0148B7]">
                Book Fair
              </h1>
              <p className="font-[400] text-[12px] leading-[18px] text-[#666666]">
                Exhibitions & Expo
              </p>
              <p className="font-[400] text-[10px] leading-[15px] text-[#0148B7]">
                Jan 20 (09.00 AM-06.00 PM)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
