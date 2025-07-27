import { Link } from "react-router-dom";

const statusLabels = {
  applied: "Подано",
  responded: "Відповідь прийшла!",
  interviewing: "Ну, інтер'ю",
  offer: "Це найм!",
  rejected: "Відбій, тебе злили",
};

const statusStyles = {
  applied: "bg-blue-800/30 text-blue-300 border border-blue-600",
  responded: "bg-emerald-800/30 text-emerald-300 border border-emerald-600",
  interviewing: "bg-orange-800/30 text-orange-300 border border-orange-600",
  offer: "bg-purple-800/30 text-purple-300 border border-purple-600",
  rejected: "bg-red-800/30 text-red-300 border border-red-600",
  unknown: "bg-gray-700/30 text-gray-400 border border-gray-600",
};

const ApplicationCard = ({ application }) => {
  const status = application.status || "unknown";
  const statusClass = statusStyles[status] || statusStyles["unknown"];

  return (
    <div className="bg-gray-800 text-gray-100 p-6 rounded-xl shadow-lg border border-gray-700 hover:shadow-xl hover:shadow-teal-500/30 transition-transform duration-200 hover:scale-[1.03]">
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-extrabold tracking-wider text-teal-400">
          {application.company}
        </h2>

        <p className="text-sm text-gray-300">
          <span className="font-semibold text-gray-400">Позиція:</span>{" "}
          {application.position}
        </p>

        <p className="text-sm text-gray-300">
          <span className="font-semibold text-gray-400">Статус:</span>{" "}
          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${statusClass}`}
          >
            {statusLabels[status] || status}
          </span>
        </p>

        <p className="text-sm text-gray-300">
          <span className="font-semibold text-gray-400">Подано:</span>{" "}
          {application.appliedAt}
        </p>

        <Link
          to={`/application/${application.id}`}
          className="mt-4 inline-block bg-teal-600 text-gray-100 font-extrabold uppercase px-6 py-2 rounded-full shadow-lg border border-teal-700 hover:shadow-teal-500/50 hover:scale-105 transition-all duration-300 text-center tracking-wider"
        >
          Переглянути
        </Link>
      </div>
    </div>
  );
};

export default ApplicationCard;