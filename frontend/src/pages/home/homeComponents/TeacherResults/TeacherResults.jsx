import React from 'react';
import TeacherAssignmentSection from './TeacherAssignmentSection';
import TeacherTestSection from './TeacherTestSection';
import TeacherStudySection from './TeacherStudySection';
import TeacherHomeworkSection from './TeacherHomeworkSection';

const sectionComponents = {
  assignment: TeacherAssignmentSection,
  test: TeacherTestSection,
  study: TeacherStudySection,
  homework: TeacherHomeworkSection,
};

const sections = [
  { type: 'assignment' },
  { type: 'test' },
  { type: 'study' },
  { type: 'homework' },
];

const TeacherResults = () => {
  return (
    <div className="space-y-8">
      {sections.map((section, index) => {
        const SectionComponent = sectionComponents[section.type];
        return SectionComponent ? (
          <SectionComponent key={index} />
        ) : null;
      })}
    </div>
  );
};

export default TeacherResults;
