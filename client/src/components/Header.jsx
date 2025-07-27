
import useAppStore from "../store/useAppStore";
import { Link } from "react-router-dom";

const Header = () => {
  const { setIsModalOpen } = useAppStore();

  const handleAddApplication = () => {
    setIsModalOpen(true);
  };

  return (
    <header className="bg-gray-900 text-gray-100 p-5 shadow-md border-b border-gray-700 select-none fixed w-full z-20">
      <div className="flex justify-between items-center max-w-5xl mx-auto">
        <Link
          to="/"
          className="text-3xl sm:text-4xl font-semibold tracking-wide text-teal-400"
        >
          <span className="opacity-90">Job Hunt Tracker</span>
        </Link>
        <button
          onClick={handleAddApplication}
          className="bg-teal-600 text-gray-100 px-5 py-2.5 rounded-lg shadow-md hover:bg-teal-500 transition active:scale-[0.98]"
          title="Хапай удачу за хвіст!"
          aria-label="Додати нову заявку"
        >
          Додати
        </button>
      </div>
    </header>
  );
};

export default Header;
