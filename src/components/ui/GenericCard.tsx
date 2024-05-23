import React from 'react';

interface GenericCardProps {
  children: React.ReactNode;
  onShowMore?: () => void; 
}

const GenericCard: React.FC<GenericCardProps> = ({ children, onShowMore }) => {
  return (
    <li className="relative mb-6 border list-none rounded-xl shadow-lg h-full p-1 transition-all duration-500 ease-in-out bg-gradient-to-r hover:bg-indigo-100">
      {children}
      {onShowMore && ( 
        <button
          className="absolute bottom-2 left-2 cursor-pointer text-xl font-medium before:bg-violet-600 before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100"
          onClick={onShowMore}
        >
          Show More
        </button>
      )}
    </li>
  );
};

export default GenericCard;
