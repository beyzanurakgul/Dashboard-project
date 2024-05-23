import React from 'react';
import { AiOutlineFullscreen } from "react-icons/ai";
import { BiSolidDashboard } from "react-icons/bi";
import { BsList } from "react-icons/bs";

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <header className="bg-white shadow-md p-4 flex items-center justify-between w-full fixed top-0 left-0 z-10">
      <button onClick={toggleSidebar} className="text-blue-800 text-2xl focus:outline-none">
      <BsList />
      </button>
      <div className='text-2xl text-blue-800'><BiSolidDashboard /></div>
      <div className="flex items-center">
        <button onClick={toggleFullScreen} className="text-blue-800 text-2xl focus:outline-none mr-4">
        <AiOutlineFullscreen />
        </button>
        <div className="relative w-6 h-6 overflow-hidden bg-blue-100 rounded-full dark:bg-gray-200">
          <svg className="w-full h-full text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
