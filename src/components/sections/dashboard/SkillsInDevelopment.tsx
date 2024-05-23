import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface EmployeeSkillData {
  skill: string;
  employees: number;
}

interface EmployeeSkillsChartProps {
  data: EmployeeSkillData[];
}

const EmployeeSkillsChart: React.FC<EmployeeSkillsChartProps> = ({ data }) => {
  if (!data || data.length === 0) {
    return <p className="text-gray-500">No data available</p>;
  }

  return (
    <section id="EmployeeSkillsChart" >
    <div className="bg-white shadow-lg mt-8 w-full md:w-[55vw] my-auto h-[64vh] rounded-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Employee Skills Chart</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 50, // Bottom margin increased for the XAxis label
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="skill" interval={0} angle={-45} textAnchor="end" height={60} />
          <YAxis />
          <Tooltip />
          <Bar dataKey="employees" fill="#8884d8" name="Number of Employees" />
        </BarChart>
      </ResponsiveContainer>
    </div>
    </section>
  );
};

export default EmployeeSkillsChart;
