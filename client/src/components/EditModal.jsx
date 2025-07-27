import { useEffect, useState } from "react";
import useAppStore from "../store/useAppStore";

const EditModal = () => {
  const {
    setIsEditModalOpen,
    activeApplicationId,
    applications,
    updateApplication,
  } = useAppStore();

  const activeElement = applications.find(
    (app) => app.id === activeApplicationId
  );

  const statusOptions = [
    "applied",
    "responded",
    "interviewing",
    "offer",
    "rejected",
  ];
  const interviewResultOptions = ["pending", "done", "failed"];

  const [formData, setFormData] = useState(null);

  useEffect(() => {
    if (activeElement) {
      setFormData({
        ...activeElement,
        interview: { ...activeElement.interview },
      });
    }
  }, [activeElement]);

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
    if (formData) {
      updateApplication(formData.id, formData);
      onClose();
    }
  };

  const onClose = () => {
    setIsEditModalOpen(false);
  };

  if (!formData) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-start justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-gray-800 p-6 rounded-xl text-gray-100 w-full max-w-lg shadow-2xl border border-gray-700 relative my-8 font-sans">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-3xl font-bold cursor-pointer select-none"
          aria-label="Close modal"
          title="Ні-ні, не жартуй — закривай!"
        >
          &times;
        </button>

        <h2 className="text-3xl font-extrabold text-center mb-6 tracking-wide drop-shadow-md text-teal-400">
          🛠️ Редагуємо твою заявку — тримайся міцніше!
        </h2>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="company"
              className="block text-gray-300 text-md font-semibold mb-1"
            >
              Компанія
            </label>
            <input
              id="company"
              name="company"
              type="text"
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
              value={formData.company || ""}
              onChange={handleChange}
              placeholder="Назва компанії (твоєї майбутньої фортеці)"
              required
            />
          </div>

          <div>
            <label
              htmlFor="position"
              className="block text-gray-300 text-md font-semibold mb-1"
            >
              Позиція
            </label>
            <input
              id="position"
              name="position"
              type="text"
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
              value={formData.position || ""}
              onChange={handleChange}
              placeholder="Яку роль хочеш відіграти?"
              required
            />
          </div>

          <div>
            <label
              htmlFor="status"
              className="block text-gray-300 text-md font-semibold mb-1"
            >
              Статус заявки
            </label>
            <select
              id="status"
              name="status"
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 appearance-none transition"
              value={formData.status || statusOptions[0]}
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
              className="block text-gray-300 text-md font-semibold mb-1"
            >
              Дата подачі
            </label>
            <input
              id="appliedAt"
              name="appliedAt"
              type="date"
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={formData.appliedAt || ""}
              onChange={handleChange}
              required
            />
          </div>

          <div className="bg-gray-700 p-5 rounded-lg border border-gray-600 shadow-inner">
            <h3 className="text-xl font-bold mb-4 text-teal-400 drop-shadow-md">
              🔎 Деталі інтерв'ю
            </h3>

            <div className="mb-4">
              <label
                htmlFor="interviewDate"
                className="block text-gray-300 font-semibold mb-1"
              >
                Дата інтерв'ю
              </label>
              <input
                id="interviewDate"
                name="interview.date"
                type="date"
                className="w-full p-3 bg-gray-600 border border-gray-500 rounded-md text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
                value={formData.interview.date || ""}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="interviewResult"
                className="block text-gray-300 font-semibold mb-1"
              >
                Результат інтерв'ю
              </label>
              <select
                id="interviewResult"
                name="interview.result"
                className="w-full p-3 bg-gray-600 border border-gray-500 rounded-md text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 appearance-none"
                value={formData.interview.result || interviewResultOptions[0]}
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
                className="block text-gray-300 font-semibold mb-1"
              >
                Нотатки по інтерв'ю
              </label>
              <textarea
                id="interviewNotes"
                name="interview.notes"
                className="w-full p-3 bg-gray-600 border border-gray-500 rounded-md text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 min-h-[80px]"
                value={formData.interview.notes || ""}
                onChange={handleChange}
                placeholder="Що сказав/запитав? Що запам'ятав?"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="source"
              className="block text-gray-300 text-md font-semibold mb-1"
            >
              Джерело (Звідки отримав кейс)
            </label>
            <input
              id="source"
              name="source"
              type="text"
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={formData.source || ""}
              onChange={handleChange}
              placeholder="Звідки дізналися про вакансію?"
            />
          </div>

          <div>
            <label
              htmlFor="notes"
              className="block text-gray-300 text-md font-semibold mb-1"
            >
              Загальні нотатки
            </label>
            <textarea
              id="notes"
              name="notes"
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 min-h-[100px]"
              value={formData.notes || ""}
              onChange={handleChange}
              placeholder="Тут можна все, що завгодно..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-teal-600 text-gray-100 font-extrabold py-3 rounded-lg hover:bg-teal-500 transition duration-300"
            title="Зберегти всі шаленства"
          >
            Зберегти зміни!
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
