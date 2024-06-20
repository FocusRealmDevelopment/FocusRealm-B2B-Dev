import React, { useState } from "react";
import { homeworkData} from './data';

const Homeworktable = ({ section = "Homework", data = homeworkData }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleHeight = () => {
    setExpanded(!expanded);
  };

  const headings = ['Subject', 'Topic', 'Status', 'Assigned', 'Due'];

  return (
    <div className="flex justify-center mt-8 mb-8">
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
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
          </svg>
        </div>
        {expanded && (
          <div className="relative">
            <table className="mt-4 mx-4">
              <thead>
                <tr className="mx-2 text-center">
                  {headings.map((item) => (
                    <th key={item} className="font-normal text-[13px] text-[#0148b7] leading-5 py-2">{item}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.length > 0 ? (
                  data.map((item, index) => (
                    <tr key={index} className={`whitespace-nowrap ${index !== data.length - 1 ? 'border-b' : ''}`}>
                      <td className="font-normal text-[13px] text-[#666666] leading-5  py-2">{item.Subject || 'N/A'}</td>
                      <td className="font-normal text-[13px] text-[#666666] leading-5 px-8 py-2">{item.Topic || 'N/A'}</td>
                      <td className={`font-normal text-[13px] leading-5 px-12 py-2 ${item.Status === "Submitted" ? 'text-[#00c020]' : 'text-[#be0000]'}`}>{item.Status || 'N/A'}</td>
                      <td className="font-normal text-[13px] text-[#666666] leading-5 px-8 py-2">{item.Assigned || 'N/A'}</td>
                      <td className="font-normal text-[13px] text-[#666666] leading-5 px-8 py-2">{item.due || 'N/A'}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center py-4 text-[#666666]">No data available</td>
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

export default Homeworktable;
