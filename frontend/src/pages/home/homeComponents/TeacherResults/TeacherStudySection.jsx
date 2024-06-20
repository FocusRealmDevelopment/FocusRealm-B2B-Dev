import React, { useState, useEffect } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import axios from 'axios';

const defaultData = {
  subject: "Study Sessions",
  tests: [
    { subject: "Maths", topic: "Pythagorean theorem", status: "Submitted", assignee: "Payal", due: "2 May 2024", grade: { obtained: 45, total: 50 } },
    { subject: "English", topic: "Passive & Active Voices", status: "Submitted", assignee: "Sachin", due: "8 May 2024", grade: { obtained: 18, total: 50 } },
    { subject: "Chemistry", topic: "Molecular Energy", status: "Submitted", assignee: "Karishma", due: "11 May 2024", grade: { obtained: 49, total: 50 } },
    { subject: "Hindi", topic: "Poetic Beauty of Tulsi...", status: "Submitted", assignee: "Ameya", due: "20 May 2024", grade: { obtained: 36, total: 50 } },
    { subject: "Physics", topic: "Quantum Nature of li...", status: "Pending", assignee: "Vivek", due: "25 May 2024", grade: null },
  ]
};

const TeacherTestSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(defaultData);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  // useEffect(() => {
  //   // Adjust the URL to your API endpoint
  //   axios.get('your_api_endpoint_here')
  //     .then(response => {
  //       setData(response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data:', error);
  //     });
  // }, []);

  return (
    <div
      className={`w-full max-w-xl transition-max-height duration-400 ease-out overflow-hidden bg-white rounded-[20px] ${isOpen ? "max-h-[1000px]" : "max-h-[60px]"}`}
    >
      <div
        className="flex items-center justify-between p-5 cursor-pointer"
        onClick={toggleAccordion}
      >
        <span className="text-lg font-medium font-['Poppins']">{data.subject}</span>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </div>
      {isOpen && (
        <div className="px-5 pb-5">
          <div className="flex space-x-4">
            <div className="flex flex-col space-y-3 font-poppins font-normal text-[13px]">
              <div className="text-blue-600">Subject</div>
              {data.tests.map((test, index) => (
                <div key={index} className="text-gray-600">{test.subject}</div>
              ))}
            </div>
            <div className="flex flex-col space-y-3 font-poppins text-[13px] font-normal">
              <div className="text-blue-600">Topic</div>
              {data.tests.map((test, index) => (
                <div key={index} className="text-gray-600 border-b border-gray-200">{test.topic}</div>
              ))}
            </div>
            <div className="flex flex-col space-y-3 font-poppins text-[13px] font-normal">
              <div className="text-blue-600">Status</div>
              {data.tests.map((test, index) => (
                <div key={index} className={`text-${test.status === 'Pending' ? 'red' : 'green'}-600 border-b border-gray-200`}>{test.status}</div>
              ))}
            </div>
            <div className="flex flex-col space-y-3 font-poppins text-[13px] font-normal">
              <div className="text-blue-600">Assignee</div>
              {data.tests.map((test, index) => (
                <div key={index} className="text-gray-600 border-b border-gray-200">{test.assignee}</div>
              ))}
            </div>
            <div className="flex flex-col space-y-3 font-poppins text-[13px] font-normal">
              <div className="text-blue-600">Due</div>
              {data.tests.map((test, index) => (
                <div key={index} className="text-gray-600 border-b border-gray-200">{test.due}</div>
              ))}
            </div>
            <div className="flex flex-col space-y-3 font-poppins text-[13px] font-normal">
              <div className="text-blue-600">Grade</div>
              {data.tests.map((test, index) => (
                <div key={index} className="text-gray-600 border-b border-gray-200">{test.grade ? `${test.grade.obtained}/${test.grade.total}` : 'N/A'}</div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeacherTestSection;
