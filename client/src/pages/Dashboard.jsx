
import StatsSummary from '../components/StatsSummary';
import AddApplicationModal from '../components/AddApplicationModal';
import useAppStore from '../store/useAppStore';
import ApplicationList from '../components/ApplicationList';
import EditModal from '../components/EditModal';

const Dashboard = () => {
  const { isModalOpen, setIsModalOpen, isEditModalOpen, setIsEditModalOpen, applications } = useAppStore();

  // 👇 Підрахунок статистики
  const stats = {
    total: applications.length,
    responses: applications.filter((a) => a.status === 'responded').length,
    interviews: applications.filter((a) => a.status === 'interviewing').length,
    offers: applications.filter((a) => a.status === 'offer').length,
  };

  return (
    <div className="p-6 bg-[#0e0e0e] min-h-screen text-white">
      {isModalOpen && <AddApplicationModal />}
      {isEditModalOpen && <EditModal />}
      {/* Статистика */}
      <StatsSummary stats={stats} />

      {/* Список заявок */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {applications.length > 0 ? (
          <ApplicationList applications={applications} />
        ) : (
          <p className="col-span-full text-center text-gray-400">
            Заявок ще немає
          </p>
        )}
      </div>

      {/* Модалка додавання заявки */}
      {isModalOpen && (
        <AddApplicationModal
          onClose={() => setIsModalOpen(false)}
          onSave={(newApp) => {
            setApplications((prev) => [...prev, newApp]);
            setIsModalOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default Dashboard;
