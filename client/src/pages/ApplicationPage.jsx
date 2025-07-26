import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// 🔧 Мокові дані (тимчасово, потім заміниш на фетч або пропс)
const mockApplications = [
  {
    id: 'app_001',
    company: 'Google',
    position: 'Frontend Developer',
    appliedAt: '2025-07-15',
    source: 'LinkedIn',
    status: 'interviewing',
    notes: 'Швидко відповіли, дали тестове',
    interview: {
      date: '2025-07-20',
      result: 'pending',
      notes: 'Очікую на фідбек',
    },
  },
  // можна додати ще
];

const ApplicationPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const application = mockApplications.find((a) => a.id === id);

  if (!application) {
    return (
      <div className="text-center text-red-500 text-lg mt-10">
        Заявку не знайдено.
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto bg-[#1f1f1f] p-6 rounded-xl shadow-xl text-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-serif text-gold">
          {application.company} — {application.position}
        </h2>
        <button
          onClick={() => navigate('/')}
          className="text-sm text-gray-400 hover:underline"
        >
          ⬅ Назад
        </button>
      </div>

      <div className="space-y-2">
        <p><span className="text-gray-400">📅 Дата подачі:</span> {application.appliedAt}</p>
        <p><span className="text-gray-400">📍 Джерело:</span> {application.source}</p>
        <p><span className="text-gray-400">📈 Статус:</span> <span className="text-yellow-400">{application.status}</span></p>
        <p><span className="text-gray-400">📝 Нотатки:</span> {application.notes}</p>
      </div>

      {application.interview && (
        <div className="mt-6 border-t border-gray-700 pt-4">
          <h3 className="text-xl text-gold mb-2">🎤 Інтерв’ю</h3>
          <p><span className="text-gray-400">Дата:</span> {application.interview.date}</p>
          <p><span className="text-gray-400">Результат:</span> {application.interview.result}</p>
          <p><span className="text-gray-400">Нотатки:</span> {application.interview.notes}</p>
        </div>
      )}

      <div className="mt-6">
        <button
          onClick={() => alert('В майбутньому: форма редагування')}
          className="bg-gold text-black px-4 py-2 rounded-xl hover:bg-yellow-500 transition"
        >
          ✏️ Редагувати
        </button>
      </div>
    </div>
  );
};

export default ApplicationPage;
