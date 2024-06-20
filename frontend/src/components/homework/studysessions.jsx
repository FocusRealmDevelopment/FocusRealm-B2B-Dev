/* eslint-disable react/prop-types */
import { useState } from "react";
import { studySessionsData } from "./data";

const Studysessions = ({
  section = "Study Sessions",
  data = studySessionsData,
}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleHeight = () => {
    setExpanded(!expanded);
  };

  const statusColors = {
    Completed: "text-[#00c020]",
    Paused: "text-[#edab00]",
    Watching: "text-[#df0000]",
    Pending: "text-[#0148b7]",
  };

  const headings = ["Subject", "Topic", "Status", "Assigned", "Due", "Time"];
  return (
    <div className="flex justify-center mt-8 mb-4">
      <div className="border w-full rounded-[20px] py-4">
        <div className="flex justify-between items-center font-medium px-6">
          <h1 className="text-center text-[18px] leading-7">{section}</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 cursor-pointer"
            onClick={toggleHeight}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 15.75 7.5-7.5 7.5 7.5"
            />
          </svg>
        </div>
        {expanded && (
          <div className="relative">
            <table className="mt-4 mx-4">
              <thead>
                <tr className="text-center">
                  {headings.map((item, index) => (
                    <th
                      key={item}
                      className={`font-normal text-[13px] text-[#0148b7] leading-5 py-2 ${
                        index === 0 ? "px-0" : "px-8"
                      }`}
                    >
                      {item}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.length > 0 ? (
                  data.map((item, index) => (
                    <tr
                      key={index}
                      className={`whitespace-nowrap ${
                        index !== data.length - 1 ? "border-b" : ""
                      }`}
                    >
                      <td className="font-normal text-[13px] text-[#666666] leading-5 py-2">
                        {item.Subject || "N/A"}
                      </td>
                      <td className="font-normal text-[13px] text-[#666666] leading-5 px-6 py-2">
                        {item.Topic || "N/A"}
                      </td>
                      <td
                        className={`font-normal text-[13px] leading-5 px-8 py-2 ${
                          statusColors[item.Status]
                        }`}
                      >
                        {item.Status || "N/A"}
                      </td>
                      <td className="font-normal text-[13px] text-[#666666] leading-5 px-6 py-2">
                        {item.Assigned || "N/A"}
                      </td>
                      <td className="font-normal text-[13px] text-[#666666] leading-5 px-6 py-2">
                        {item.due || "N/A"}
                      </td>
                      <td className="font-normal text-[13px] text-[#666666] leading-5 px-6 py-2">
                        {item.Time || "N/A"}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center py-4 text-[#666666]">
                      No data available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Studysessions;
