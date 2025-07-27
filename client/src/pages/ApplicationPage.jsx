import useAppStore from "../store/useAppStore";
import { useParams, useNavigate } from "react-router-dom";
import EditModal from "../components/EditModal";

const ApplicationPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    setIsEditModalOpen,
    setActiveApplicationId,
    applications,
    isEditModalOpen,
    deleteApplication,
  } = useAppStore();

  const application = applications.find((a) => a.id === id);

  const handleEdit = () => {
    setIsEditModalOpen(true);
    setActiveApplicationId(application.id);
  };

  const handleDelete = () => {
    deleteApplication(application.id);
    navigate("/");
  };

  if (!application) {
    return (
      <div className="text-center text-red-400 text-lg mt-10">
        Заявку не знайдено.
      </div>
    );
  }

  return (
    <main
      role="main"
      className="max-w-3xl mx-auto p-6 rounded-xl border-gray-900 border-2 shadow-lg bg-gray-800 text-gray-100 hover:shadow-teal-500/30 transition-transform duration-200"
    >
      {isEditModalOpen && <EditModal />}

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-teal-400">
          {application.company} — {application.position}
        </h2>
        <button
          type="button"
          onClick={() => navigate("/")}
          className="bg-gray-700 px-4 py-2 rounded-lg text-gray-200 hover:bg-teal-600 transition duration-300 ease-in-out"
        >
          Назад
        </button>
      </div>

      <section className="space-y-3 text-gray-300">
        <p>
          <span className="font-medium text-gray-400">📅 Дата подачі:</span>{" "}
          {application.appliedAt}
        </p>
        <p>
          <span className="font-medium text-gray-400">📍 Джерело:</span>{" "}
          {application.source}
        </p>
        <p>
          <span className="font-medium text-gray-400">📈 Статус:</span>{" "}
          <span className="text-teal-400 font-semibold">
            {application.status}
          </span>
        </p>
        <p>
          <span className="font-medium text-gray-400">📝 Нотатки:</span>{" "}
          {application.notes}
        </p>
      </section>

      {application.interview && (
        <section className="mt-8 border-t border-gray-700 pt-4 text-gray-300">
          <h3 className="text-xl text-teal-400 mb-3">🎤 Інтерв’ю</h3>
          <p>
            <span className="font-medium text-gray-400">Дата:</span>{" "}
            {application.interview.date}
          </p>
          <p>
            <span className="font-medium text-gray-400">Результат:</span>{" "}
            {application.interview.result}
          </p>
          <p>
            <span className="font-medium text-gray-400">Нотатки:</span>{" "}
            {application.interview.notes}
          </p>
        </section>
      )}

      <footer className="mt-8 flex justify-end gap-3">
        <button
          onClick={handleEdit}
          className="bg-teal-600 px-4 py-2 rounded-lg text-gray-100 hover:bg-teal-500 transition duration-300 ease-in-out"
        >
          Редагувати
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-600 px-4 py-2 rounded-lg text-gray-100 hover:bg-red-500 transition duration-300 ease-in-out"
        >
          Видалити
        </button>
      </footer>
    </main>
  );
};

export default ApplicationPage;