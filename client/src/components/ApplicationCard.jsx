import useAppStore from "../store/useAppStore";

const ApplicationCard = ({ application }) => {
    const { setIsEditModalOpen, setActiveApplicationId } = useAppStore();

    const handleEdit = () => {
        setIsEditModalOpen(true);
        setActiveApplicationId(application.id)
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex flex-col gap-2">
                <h2 className="text-lg font-bold">{application.company}</h2>
                <p className="text-sm text-gray-500">{application.position}</p>
                <p className="text-sm text-gray-500">{application.status}</p>
                <p className="text-sm text-gray-500">{application.appliedAt}</p>
                <p className="text-sm text-gray-500">{application.source}</p>
                <p className="text-sm text-gray-500">{application.interviewDate}</p>
                <p className="text-sm text-gray-500">{application.notes}</p>
                <button
                    onClick={handleEdit}
                    className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">
                        Edit
                </button>
                <button
                    className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer">
                        Delete
                </button>
            </div>
        </div>
    )
}

export default ApplicationCard;