import { useEffect, useState } from "react";
import useAppStore from "../store/useAppStore";

const EditModal = () => {
  const {
    setIsEditModalOpen,
    activeApplicationId,
    applications,
    updateApplication,
  } = useAppStore();

  const activeElement = applications.find((app) => app.id === activeApplicationId);
  const [formData, setFormData] = useState(null);

  const statusOptions = ['submitted', 'applied', 'interviewing', 'offer', 'rejected'];

  useEffect(() => {
    if (activeElement) {
      setFormData({ ...activeElement }); // копія, не мутація
    }
  }, [activeElement]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData) {
      updateApplication(formData.id, formData); // зберігаємо
      onClose();
    }
  };

  const onClose = () => {
    setIsEditModalOpen(false);
  };

  if (!formData) return null; // не показувати до готовності

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl text-black w-full max-w-md shadow-lg">
        <h2 className="text-xl font-bold mb-4">Edit Application</h2>
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          {[
            { id: 'company', label: 'Company' },
            { id: 'position', label: 'Position' },
            { id: 'appliedAt', label: 'Applied At', type: 'date' },
            { id: 'interviewDate', label: 'Interview Date', type: 'date' },
            { id: 'source', label: 'Source' },
          ].map(({ id, label, type = 'text' }) => (
            <div key={id} className="flex flex-col gap-1">
              <label htmlFor={id} className="text-sm text-gray-700">{label}</label>
              <input
                id={id}
                type={type}
                className="border border-gray-300 rounded-md p-2"
                value={formData[id] || ''}
                onChange={(e) => setFormData({ ...formData, [id]: e.target.value })}
              />
            </div>
          ))}

          <div className="flex flex-col gap-1">
            <label htmlFor="status" className="text-sm text-gray-700">Status</label>
            <select
              id="status"
              className="border border-gray-300 rounded-md p-2"
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
            >
              {statusOptions.map((status) => (
                <option key={status} value={status}>
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="notes" className="text-sm text-gray-700">Notes</label>
            <textarea
              id="notes"
              className="border border-gray-300 rounded-md p-2"
              value={formData.notes || ''}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            />
          </div>

          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">
            Save
          </button>
        </form>
        <button
          onClick={onClose}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded w-full cursor-pointer"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default EditModal;
