import useAppStore from '../store/useAppStore';

const StatsSummary = () => {
  const { applications } = useAppStore();

  const stats = {
    total: applications.length || 0,
    responses: applications.filter((a) => a.status === 'responded').length || 0,
    interviews: applications.filter((a) => a.status === 'interviewing').length || 0,
    offers: applications.filter((a) => a.status === 'offer').length || 0,
  };

  const { total, responses, interviews, offers } = stats;

  return (
    <div className="p-8 bg-gray-800 rounded-xl shadow-lg text-gray-100 mb-10 border border-gray-700">
      <h2 className="text-3xl font-extrabold text-center mb-8 tracking-wider select-none text-teal-400">
        Статистика — <span className="italic text-gray-300">Наше все!</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "💼 Усього заявок", value: total, color: "text-blue-400" },
          { label: "📨 Є відповіді", value: responses, color: "text-emerald-400" },
          { label: "🎤 Інтерв’ю призначено", value: interviews, color: "text-orange-400" },
          { label: "🎉 Отримано оферів", value: offers, color: "text-purple-400" },
        ].map(({ label, value, color }, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center p-5 bg-gray-700 rounded-xl border border-gray-600 shadow hover:shadow-xl hover:shadow-teal-500/30 transition-shadow duration-300 select-none"
          >
            <h3 className="text-sm font-semibold text-center text-gray-200 mb-2">
              {label}
            </h3>
            <p className={`text-4xl font-extrabold ${color} drop-shadow-md`}>
              {value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSummary;