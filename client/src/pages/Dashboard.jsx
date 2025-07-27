import StatsSummary from "../components/StatsSummary";
import useAppStore from "../store/useAppStore";
import ApplicationList from "../components/ApplicationList";

const Dashboard = () => {
  const { applications } = useAppStore();

  return (
    <div className="p-6 min-h-screen text-gray-100 bg-gray-800">

      <StatsSummary />

      {applications.length > 0 ? (
        <ApplicationList applications={applications} />
      ) : (
        <p className="text-center text-gray-400 mt-10">
          Заявок ще немає
        </p>
      )}
    </div>
  );
};

export default Dashboard;