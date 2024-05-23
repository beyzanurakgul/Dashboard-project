import React from 'react';

interface Activity {
  date: string;
  exams_completed: number;
  hours: number;
  lessons_taken: number;
}

interface ActivityHoursProps {
  data: Activity[];
}

const ActivityHours: React.FC<ActivityHoursProps> = ({ data }) => {
  if (!data || data.length === 0) {
    return <p className="text-gray-500 text-center mt-4">No activity hours data available</p>;
  }

  return (
    <section id="ActivityHours" >
    <div className="bg-white shadow-md rounded-lg p-6 w-full">
      <h2 className="text-2xl font-bold mb-4">Activity Hours</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {data.map((activity, index) => (
          <div key={index} className="bg-yellow-200 text-sm rounded-lg shadow-md p-4 sm:w-64 md:w-1/2 lg:w-1/3">
            <p className="text-gray-700">Date: {activity.date}</p>
            <p className="text-gray-700">Exams Completed: {activity.exams_completed}</p>
            <p className="text-gray-700">Hours: {activity.hours}</p>
            <p className="text-gray-700">Lessons Taken: {activity.lessons_taken}</p>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default ActivityHours;
