import React, { useState } from 'react';
import GenericModal from '../../ui/GenericModal';
import GenericList from '../../ui/GenericList'; // GenericList bileşenini içe aktar
import GenericCard from '../../ui/GenericCard'; // GenericCard bileşenini içe aktar

interface Employee {
  name: string;
  title: string;
  current_score: number;
  email: string;
  lessons_taken: number;
  skills_being_developed: string[];
}

interface Team {
  title: string;
  description: string;
  overall_score: number;
  total_employee_count: number;
  employees: Employee[];
}

interface TeamsProps {
  data: Team[];
}

const Teams: React.FC<TeamsProps> = ({ data }) => {
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!data) return <p className="text-red-500">No teams data available</p>;

  const openModal = (team: Team) => {
    setSelectedTeam(team);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedTeam(null);
    setIsModalOpen(false);
  };

  const renderEmployeeItem = (employee: Employee) => (
    <div className="p-4">
      <div className="flex items-center mb-4">
        <div className="relative w-12 h-12 overflow-hidden bg-indigo-100 rounded-full dark:bg-gray-200">
          <svg
            className="w-full h-full text-indigo-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <p className="text-gray-800 ml-4">
          <span className="font-semibold"></span> {employee.name}
        </p>
      </div>

      <p className="text-gray-800">
        <span className="font-semibold">Title:</span> {employee.title}
      </p>
      <p className="text-gray-800">
        <span className="font-semibold">Current Score:</span> {employee.current_score}
      </p>
      <p className="text-gray-800">
        <span className="font-semibold">Email:</span> {employee.email}
      </p>
      <p className="text-gray-800">
        <span className="font-semibold">Lessons Taken:</span> {employee.lessons_taken}
      </p>
      <p className="text-gray-800">
        <span className="font-semibold">Skills Being Developed:</span> {employee.skills_being_developed.join(', ')}
      </p>
    </div>
  );

  return (
    <div>
      <section id="Teams">
        <GenericList
          items={data}
          title="Teams"
          renderItem={(team) => (
            <GenericCard onShowMore={() => openModal(team)}> {/* onShowMore prop'unu iletmek */}
              <div className="cursor-pointer">
                <h3 className="text-xl font-bold mb-2 text-blue-700">{team.title}</h3>
                <p className="text-gray-700 mb-2">{team.description}</p>
                <p className="text-gray-800 mb-2">
                  Overall Score: <span className="font-semibold">{team.overall_score}</span>
                </p>
                <p className="text-gray-800 mb-4">
                  Total Employee Count: <span className="font-semibold">{team.total_employee_count}</span>
                </p>
              </div>
            </GenericCard>
          )}
        />
      </section>
      {selectedTeam && (
        <GenericModal isOpen={isModalOpen} onClose={closeModal} title={selectedTeam.title}>
          <p className="text-gray-700 mb-2">{selectedTeam.description}</p>
          <p className="text-gray-800 mb-2">
            Overall Score: <span className="font-semibold">{selectedTeam.overall_score}</span>
          </p>
          <p className="text-gray-800 mb-4">
            Total Employee Count: <span className="font-semibold">{selectedTeam.total_employee_count}</span>
          </p>
          <h4 className="font-bold text-xl text-gray-900 mb-2">Employees:</h4>
          <ul>
            {selectedTeam.employees.map((employee, idx) => (
              <li key={idx} className="ml-4">
                {renderEmployeeItem(employee)}
              </li>
            ))}
          </ul>
        </GenericModal>
      )}
    </div>
  );
};

export default Teams;
