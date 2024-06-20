import React from 'react';
import "../../../../styles/global.css";
import './TeacherAssignmentWidget.css' // Ensure this path is correct

const TeacherAssignmentWidget = () => {
  return (
    <div className="teacher-assignment-widget-round-box">
      <h1 className="evaluate-assignment-text">Evaluate Assignment</h1>
      <div className='evaluate-comment-text'>Comment</div>
      <div className='evaluate-comment-box'><div className='evaluate-comment-box-text'>Comments</div></div>
      <div className='evaluate-comment-text'>Send Notice</div>
      <div className='evaluate-comment-box'><div className='evaluate-comment-box-text'>Notice</div></div>
      <div className='evaluate-comment-text'>Mark Grade</div>
      <div className='evaluate-comment-box-marks'><div className='evaluate-mark-box-text'>0</div></div>
      <div className='evaluate-submit-button'><div className='evaluate-button-text'>Submit Review</div></div>



    </div>
  );
};

export default TeacherAssignmentWidget;
