import useAppStore from '../store/useAppStore';
import { useState } from 'react';

const AddApplicationModal = () => {
    const { setIsModalOpen, addApplication } = useAppStore();
    const [formData, setFormData] = useState({
        id: new Date().getTime().toString(),
        company: '',
        position: 'Front-End Developer',
        status: '',
        interviewDate: '',
        appliedAt: '',
        source: '',
        notes: '',
    });
    const statusOptions = ['submitted', 'applied', 'interviewing', 'offer', 'rejected'];

    const onClose = () => {
        setIsModalOpen(false);
    };

    const handleSubmit = () => {
        addApplication(formData);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-xl text-black w-full max-w-md shadow-lg">
                <h2 className="text-xl font-bold mb-4">Нова заявка</h2>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="company" className="text-sm text-gray-700">Company</label>
                        <input
                            id="company"
                            type="text"
                            className="border border-gray-300 rounded-md p-2"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="position" className="text-sm text-gray-700">Position</label>
                        <input
                            id="position"
                            type="text"
                            className="border border-gray-300 rounded-md p-2"
                            value={formData.position}
                            onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                        />
                    </div>

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
                        <label htmlFor="appliedAt" className="text-sm text-gray-700">Applied At</label>
                        <input
                            id="appliedAt"
                            type="date"
                            className="border border-gray-300 rounded-md p-2"
                            value={formData.appliedAt}
                            onChange={(e) => setFormData({ ...formData, appliedAt: e.target.value })}
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="interviewDate" className="text-sm text-gray-700">Interview Date</label>
                        <input
                            id="interviewDate"
                            type="date"
                            className="border border-gray-300 rounded-md p-2"
                            value={formData.interviewDate}
                            onChange={(e) => setFormData({ ...formData, interviewDate: e.target.value })}
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="source" className="text-sm text-gray-700">Source</label>
                        <input
                            id="source"
                            type="text"
                            className="border border-gray-300 rounded-md p-2"
                            value={formData.source}
                            onChange={(e) => setFormData({ ...formData, source: e.target.value })}
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="notes" className="text-sm text-gray-700">Notes</label>
                        <textarea
                            id="notes"
                            className="border border-gray-300 rounded-md p-2"
                            value={formData.notes}
                            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                        onClick={handleSubmit}
                    >
                        Add
                    </button>
                </form>

                <button onClick={onClose} className="mt-4 bg-red-500 text-white px-4 py-2 rounded w-full cursor-pointer">
                    Close
                </button>
            </div>
        </div>
    )
}

export default AddApplicationModal;