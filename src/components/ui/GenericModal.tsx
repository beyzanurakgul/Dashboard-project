import React from 'react';
import { SlClose } from "react-icons/sl";

interface GenericModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const GenericModal: React.FC<GenericModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl w-8/12 h-4/6 overflow-y-auto p-6">
        <div className="flex justify-between items-center border-b pb-3">
          <h3 className="text-xl font-bold">{title}</h3>
          <button onClick={onClose} className="text-red-700 text-4xl hover:text-red-500"><SlClose /></button>
        </div>
        <div className="mt-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default GenericModal;
