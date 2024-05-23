// Courses.tsx
import React from 'react';
import GenericTable from '../../ui/GenericTable';

interface Course {
  title: string;
  description: string;
  assigned_to: string;
  due_date: string;
  status: string;
}

interface CoursesProps {
  inProgressCourses?: Course[];
  upcomingCourses?: Course[];
}

const Courses: React.FC<CoursesProps> = ({ inProgressCourses = [], upcomingCourses = [] }) => {
  const combinedCourses = [...inProgressCourses, ...upcomingCourses];

  const columns = [
    { header: 'Title', accessor: 'title' as keyof Course },
    { header: 'Description', accessor: 'description' as keyof Course },
    { header: 'Assigned To', accessor: 'assigned_to' as keyof Course },
    { header: 'Due Date', accessor: 'due_date' as keyof Course },
    { header: 'Status', accessor: 'status' as keyof Course },
  ];

  return (
    <section id="Courses">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Courses</h2>
        {combinedCourses.length > 0 ? (
          <GenericTable data={combinedCourses} columns={columns} />
        ) : (
          <p className="text-gray-500">No courses available.</p>
        )}
      </div>
    </section>
  );
};

export default Courses;
