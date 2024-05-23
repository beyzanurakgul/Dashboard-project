import React from 'react';
import { FcHome, FcConferenceCall, FcSurvey, FcClock, FcRating, FcApprove, FcBarChart } from "react-icons/fc";




interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => (

  <div className={`fixed top-1/2 left-0 transform rounded-md -translate-y-1/2 h-92  w-36 bg-white flex flex-col transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-48'}`}>
    <nav className="flex-1 justify-center p-4">
      <ul>
        <li className="mb-4">
          <a href="#" className="relative cursor-pointer group" title="Home">
            <button className='flex items-center justify-center w-full h-10 text-4xl font-black border-b-2 border-gray-300 hover:border-indigo-500 pb-2'>
              <FcHome />
            </button> 
          </a>
        </li>
        <li className="mb-4">
        <a href="#TopEmployees" className="relative cursor-pointer group" title="Top Employees">
        
        
            <button className='flex items-center justify-center w-full h-10 text-4xl font-black border-b-2 border-gray-300 hover:border-indigo-500 pb-2'>
              <FcRating />
            </button> 
          
            </a>
        </li>
        <li className="mb-4">
        <a href="#Teams" className="relative cursor-pointer group" title="Team">
          
            <button className='flex items-center justify-center w-full h-10 text-4xl font-black border-b-2 border-gray-300 hover:border-indigo-500 pb-2'>
              <FcConferenceCall />
            </button> 
            </a>
        </li>
        <li className="mb-4">
        <a href="#TopSkills" className="relative cursor-pointer group" title="Top Skills">
            <button className='flex items-center justify-center w-full h-10 text-4xl font-black border-b-2 border-gray-300 hover:border-indigo-500 pb-2'>
              <FcApprove />
            </button> 
          </a>
        </li>
        <li className="mb-4">
        <a href="#SkillsInDevelopment" className="relative cursor-pointer group" title="Employee Skills Chart">
            <button className='flex items-center justify-center w-full h-10 text-4xl font-black border-b-2 border-gray-300 hover:border-indigo-500 pb-2'>
              <FcBarChart />
            </button> 
            </a>
        </li>
        <li className="mb-4">
        <a href="#Courses" className="relative cursor-pointer group" title="Courses">
            <button className='flex items-center justify-center w-full h-10 text-4xl font-black border-b-2 border-gray-300 hover:border-indigo-500 pb-2'>
              <FcSurvey />
            </button> 
            </a>
        </li>
        <li className="mb-4">
        <a href="#ActivityHours" className="relative cursor-pointer group" title="Activity Hours">
            <button className='flex items-center justify-center w-full h-10 text-4xl font-black  border-gray-300 hover:border-indigo-500 pb-2'>
              <FcClock />
            </button> 
            </a>
        </li>
      </ul>
    </nav>
  </div>
  
);

export default Sidebar;
