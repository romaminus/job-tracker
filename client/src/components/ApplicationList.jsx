import ApplicationCard from "./ApplicationCard";

const ApplicationList = ({ applications }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {applications.map((application) => (
                <ApplicationCard key={application.id} application={application} />
            ))}
        </div>
    )
}

export default ApplicationList;