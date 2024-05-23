import React from 'react';

interface Skill {
  skill: string;
  employees: number;
}

interface TopSkillsProps {
  data: Skill[];
}

const TopSkills: React.FC<TopSkillsProps> = ({ data }) => {
  if (!data || data.length === 0) {
    return <p className="text-red-500 text-center mt-4">No top skills data available</p>;
  }

  return (
    <section id="TopEmployees"> 
    <div className="bg-white shadow-md rounded-lg w-full p-6 my-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Top Skills</h2>
      <ul className="space-y-4">
        {data.map((skill, index) => (
          <li key={index} className="p-4 bg-gray-100 rounded-lg shadow-inner hover:bg-indigo-200 transition">
            <p className="text-lg font-semibold text-gray-700">Skill: <span className="text-gray-900">{skill.skill}</span></p>
            <p className="text-lg text-gray-600">Employees: <span className="text-gray-800">{skill.employees}</span></p>
          </li>
        ))}
      </ul>
    </div>
    </section>
  );
};

export default TopSkills;
