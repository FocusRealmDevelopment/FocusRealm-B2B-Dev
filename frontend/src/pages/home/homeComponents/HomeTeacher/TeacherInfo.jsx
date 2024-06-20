import React from 'react';
import "./hometeacher.css";

const TeacherInfo = ({ teacherName, className }) => {
  return (
    <div className="teacher-info">
      <h1><span className="class-text-teacher">Class:</span><span className="class-name-teacher">{className}</span></h1>
      
    </div>
  );
};

export default TeacherInfo;
