import React from 'react';
import { PieChart, Pie, Cell, Label } from 'recharts';

interface Employee {
  name: string;
  title: string;
  current_score: number;
  email: string;
}

interface TopEmployeesProps {
  data: Employee[];
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];

const TopEmployees: React.FC<TopEmployeesProps> = ({ data }) => {
  if (!data || data.length === 0) {
    return <p className="text-center text-gray-500">No top employees data available</p>;
  }

  const renderEmployeeItem = (employee: Employee, index: number) => (
    <div key={employee.email} className="flex flex-col justify-between items-center p-4 border bg-white rounded-xl shadow-sm ">
      <div className="flex items-center space-x-4 w-full p-4">
        <div className="flex-shrink-0 relative w-12 h-12 overflow-hidden bg-indigo-100 rounded-full dark:bg-gray-200">
          <svg className="w-full h-full text-indigo-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
          </svg>
        </div>
        <div className="flex-grow">
          <p className="text-lg font-semibold text-gray-900">{employee.name}</p>
          <p className="text-gray-600"><span className='font-bold'>Title:</span> {employee.title}</p>
          <p className="text-gray-600"><span className='font-bold'>Email:</span> <a href={`mailto:${employee.email}`} className="text-blue-500 hover:underline">{employee.email}</a></p>
        </div>
        <PieChart  width={60} height={60}>
          <Pie
            data={[
              { name: 'Score', value: employee.current_score },
              { name: 'Remaining', value: 10 - employee.current_score }
            ]}
            cx="50%"
            cy="50%"
            innerRadius={15}
            outerRadius={25}
            fill="#8884d8"
            dataKey="value"
            startAngle={90}
            endAngle={450}
            isAnimationActive={true} // Animasyonu etkinleştir
          >
            <Cell key={`cell-0`} fill={COLORS[index % COLORS.length]} />
            <Cell key={`cell-1`} fill="#eee" />
            <Label
              value={employee.current_score}
              position="center"
              fill="#000"
              fontSize={14}
              fontWeight="bold"
            />
          </Pie>
        </PieChart>
      </div>
    </div>
  );

  return (
    <div className="sm:w-[80vw] md:w-[87vw] lg:w-[80vw] xl:w-[82vw] mt-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Top Employees</h2>
      <div className="flex flex-wrap justify-center gap-4">{data.map(renderEmployeeItem)}</div>
    </div>
  );
};

export default TopEmployees;
