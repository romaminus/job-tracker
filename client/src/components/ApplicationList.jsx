
import ApplicationCard from "./ApplicationCard";

const ApplicationList = ({ applications }) => {
  return (
    <div className="flex flex-wrap justify-center gap-6 mt-10">
      {applications.map((application) => (
        <div
          key={application.id}
          className="flex-none w-full sm:w-1/2 lg:w-1/3 xl:w-1/4"
        >
          <ApplicationCard application={application} />
        </div>
      ))}
    </div>
  );
};

export default ApplicationList;