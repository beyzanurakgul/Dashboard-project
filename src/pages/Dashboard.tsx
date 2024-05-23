import React, { useEffect, useState } from 'react';
import { fetchData } from '../utils/fetchData';
import ActivityHours from '../sections/dashboard/ActivityHours';
import Teams from '../sections/dashboard/Teams';
import SkillsInDevelopment from '../sections/dashboard/SkillsInDevelopment';
import TopEmployees from '../sections/dashboard/TopEmployees';
import TopSkills from '../sections/dashboard/TopSkills';
import Courses from '../sections/dashboard/Courses';
import Spinner from '../components/Sipinner';

const Dashboard: React.FC = () => {
  const [data, setData] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchData('https://demotrainiq.com/case/dashboard')
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="h-screen flex items-center justify-center"><Spinner /></p>;
  if (error) return <p className="text-center text-xl text-red-500">Error: {error.message}</p>;

  return (
    <main style={{ flex: 1, padding: '10px' }}>
      <div className="container p-4">

        {/* Top Employees */}
        <section id="TopEmployees" style={{ padding: '20px', borderBottom: '1px solid #ccc' }}>
          <div className="mb-1" >
            <TopEmployees data={data.top_employees} />
          </div>
        </section>

        {/* Teams */}
        <section id="Teams" style={{ padding: '20px', borderBottom: '1px solid #ccc' }}>
          <div className="mb-1">
            <Teams data={data.teams} />
          </div>
        </section>

        {/* Top Skills and Skills in Development */}
        <div className="mb-1 flex">

          <div className="w-2/6 mr-4">
            <section id="TopSkills" style={{ padding: '20px', borderBottom: '1px solid #ccc' }}>
              <TopSkills data={data.top_skills} />
            </section>
          </div>

          <div className="w-4/6">
            <section id="SkillsInDevelopment"  style={{ padding: '20px', borderBottom: '1px solid #ccc'  }}>
              <SkillsInDevelopment data={data.skills_in_development} />
            </section>
          </div>
        </div>

        <div className="mb-1 flex">
          {/* Courses */}
          <div className="w-4/6 mr-4">
            <section id="Courses" style={{ padding: '20px', borderBottom: '1px solid #ccc' }}>
              <Courses inProgressCourses={data.in_progress_courses} upcomingCourses={data.upcoming_courses} />
            </section>
          </div>
          {/* ActivityHours */}
          <div className="w-2/6 ">
            <section id="ActivityHours" style={{ padding: '5px', borderBottom: '1px solid #ccc' }}>
              <ActivityHours data={data.activity_hours} />
            </section>
          </div>
        </div>

      </div>
    </main>
  );
};

export default Dashboard;
