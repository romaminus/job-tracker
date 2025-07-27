import useAppStore from "../store/useAppStore";
import { useState } from "react";

const AddApplicationModal = () => {
  const { setIsModalOpen, addApplication } = useAppStore();

  const statusOptions = [
    "applied",
    "responded",
    "interviewing",
    "offer",
    "rejected",
  ];
  const interviewResultOptions = ["pending", "done", "failed"];

  const [formData, setFormData] = useState({
    id: new Date().getTime().toString(),
    company: "",
    position: "",
    status: statusOptions[0],
    interview: {
      date: "",
      result: interviewResultOptions[0],
      notes: "",
    },
    appliedAt: "",
    source: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("interview.")) {
      const interviewField = name.split(".")[1];
      setFormData((prevData) => ({
        ...prevData,
        interview: {
          ...prevData.interview,
          [interviewField]: value,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addApplication(formData);
    onClose();
  };

  const onClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-start justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-gray-800 p-6 rounded-xl text-gray-100 w-full max-w-md shadow-2xl border border-gray-700 relative my-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-3xl font-bold cursor-pointer select-none"
          aria-label="Close modal"
          title="Закрити модальне вікно"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold text-center mb-6 text-teal-400">
          Нова заявка
        </h2>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="company"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Компанія
            </label>
            <input
              id="company"
              name="company"
              type="text"
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
              value={formData.company}
              onChange={handleChange}
              placeholder="Назва компанії"
              required
            />
          </div>

          <div>
            <label
              htmlFor="position"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Позиція
            </label>
            <input
              id="position"
              name="position"
              type="text"
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
              value={formData.position}
              onChange={handleChange}
              placeholder="Назва позиції (наприклад, Front-End Developer)"
              required
            />
          </div>

          <div>
            <label
              htmlFor="status"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Статус заявки
            </label>
            <select
              id="status"
              name="status"
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 appearance-none transition"
              value={formData.status}
              onChange={handleChange}
            >
              {statusOptions.map((status) => (
                <option key={status} value={status}>
                  {status.charAt(0).toUpperCase() +
                    status.slice(1).replace("_", " ")}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="appliedAt"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Дата подачі
            </label>
            <input
              id="appliedAt"
              name="appliedAt"
              type="date"
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={formData.appliedAt}
              onChange={handleChange}
              required
            />
          </div>

          <div className="bg-gray-700 p-4 rounded-md border border-gray-600">
            <h3 className="text-lg font-semibold text-teal-400 mb-4">
              Деталі інтерв'ю
            </h3>

            <div className="mb-4">
              <label
                htmlFor="interviewDate"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Дата інтерв'ю
              </label>
              <input
                id="interviewDate"
                name="interview.date"
                type="date"
                className="w-full p-3 bg-gray-600 border border-gray-500 rounded-md text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
                value={formData.interview.date}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="interviewResult"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Результат інтерв'ю
              </label>
              <select
                id="interviewResult"
                name="interview.result"
                className="w-full p-3 bg-gray-600 border border-gray-500 rounded-md text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 appearance-none"
                value={formData.interview.result}
                onChange={handleChange}
              >
                {interviewResultOptions.map((result) => (
                  <option key={result} value={result}>
                    {result.charAt(0).toUpperCase() +
                      result.slice(1).replace("_", " ")}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="interviewNotes"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Нотатки по інтерв'ю
              </label>
              <textarea
                id="interviewNotes"
                name="interview.notes"
                className="w-full p-3 bg-gray-600 border border-gray-500 rounded-md text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 min-h-[80px]"
                value={formData.interview.notes}
                onChange={handleChange}
                placeholder="Додаткові нотатки про інтерв'ю"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="source"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Джерело
            </label>
            <input
              id="source"
              name="source"
              type="text"
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={formData.source}
              onChange={handleChange}
              placeholder="Звідки дізналися про вакансію (наприклад, LinkedIn, Djinni)"
            />
          </div>

          <div>
            <label
              htmlFor="notes"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Загальні нотатки
            </label>
            <textarea
              id="notes"
              name="notes"
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 min-h-[100px]"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Додаткові нотатки про заявку"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-teal-600 text-gray-100 font-semibold py-3 rounded-md hover:bg-teal-500 transition duration-200 mt-4"
            title="Додати нову заявку"
          >
            Додати заявку
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddApplicationModal;
