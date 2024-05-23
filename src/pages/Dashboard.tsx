import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../components/Sipinner';
import TopEmployees from '../components/sections/dashboard/TopEmployees';
import Teams from '../components/sections/dashboard/Teams';
import SkillsInDevelopment from '../components/sections/dashboard/SkillsInDevelopment';
import TopSkills from '../components/sections/dashboard/TopSkills';
import Courses from '../components/sections/dashboard/Courses';
import ActivityHours from '../components/sections/dashboard/ActivityHours';
import { fetchData } from '../utils/fetchData'; // fetchData dosyasını içe aktar

const Dashboard: React.FC = () => {
  const { data, isLoading, error } = useQuery('dashboardData', () => fetchData('https://demotrainiq.com/case/dashboard'));

  if (isLoading) return <p className="h-screen flex items-center justify-center"><Spinner /></p>;
  if (error) return <p className="text-center text-xl text-red-500">Error: {(error as Error).message || 'An error occurred'}</p>; // error değişkeninin tipini Error olarak belirt

  return (
    <main style={{ flex: 1, padding: '10px' }}>
      <div className="container p-4">
        {/* Top Employees */}
        <section id="TopEmployees" style={{ padding: '20px' }}>
          <div className="mb-1">
            <TopEmployees data={data?.top_employees} />
          </div>
        </section>

        {/* Teams */}
        <section id="Teams" style={{ padding: '20px' }}>
          <div className="mb-1">
            <Teams data={data?.teams} />
          </div>
        </section>

        {/* Top Skills and Skills in Development */}
        <div className="mb-1 flex">
          <div className="w-2/6 mr-4">
            <section id="TopSkills" style={{ padding: '20px' }}>
              <TopSkills data={data?.top_skills} />
            </section>
          </div>

          <div className="w-4/6 ">
            <section id="SkillsInDevelopment" style={{ padding: '20px' }}>
              <SkillsInDevelopment data={data?.skills_in_development} />
            </section>
          </div>
        </div>

        {/* Courses */}
        <div className="mb-1 flex">
          <div className="w-4/6 mr-4">
            <section id="Courses" style={{ padding: '20px' }}>
              <Courses inProgressCourses={data?.in_progress_courses} upcomingCourses={data?.upcoming_courses} />
            </section>
          </div>
          {/* ActivityHours */}
          <div className="w-2/6 ">
            <section id="ActivityHours" style={{ padding: '5px' }}>
              <ActivityHours data={data?.activity_hours} />
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
