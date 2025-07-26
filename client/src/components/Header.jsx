import React from 'react';
import useAppStore from '../store/useAppStore';

const Header = () => {
  const { isModalOpen, setIsModalOpen } = useAppStore();

  const handleAddApplication = () => {
    setIsModalOpen(true);
  };

  return (
  <header className="bg-[#1f1f1f] text-gold p-4 shadow-md">
    <div className="flex justify-between items-center">
      <h1 className="text-3xl font-serif text-[#bfa45f]">🎩 Job Hunt Tracker</h1>
      <button
        className="bg-[#bfa45f] text-black px-4 py-2 rounded-xl hover:bg-yellow-500 transition"
        onClick={handleAddApplication}
      >
        ➕ Додати заявку
      </button>
    </div>
  </header>
  );
};

export default Header;