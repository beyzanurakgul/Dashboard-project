// Teams.tsx
import React, { useState } from 'react';
import GenericModal from '../../ui/GenericModal';
import GenericList from '../../ui/GenericList';
import GenericCard from '../../ui/GenericCard';
import { useStore } from '../../../utils/useStore';

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
  const { setData, setLoading, setError } = useStore();
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      {/* Employee item render işlevi */}
    </div>
  );

  return (
    <div>
      <section id="Teams">
        <GenericList
          items={data}
          title="Teams"
          renderItem={(team: Team) => (
            <GenericCard onShowMore={() => openModal(team)}>
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
