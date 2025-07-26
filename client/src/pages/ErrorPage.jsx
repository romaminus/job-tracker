import { useRouteError, useNavigate } from 'react-router-dom';
import errorImage from '../img/errorImage.webp';

const ErrorPage = () => {
  const navigate = useNavigate();
  const error = useRouteError();
  console.error('Routing error:', error);

  return (
    <div className="min-h-screen bg-[#362c28] text-white flex items-center justify-center px-6 py-10">
      <div className="flex flex-col items-center text-center max-w-xl space-y-6">
        <img
          src={errorImage}
          alt="Oops"
          className="max-w-[500px] rounded-lg shadow-2xl"
        />

        <h1 className="text-4xl md:text-5xl font-bold text-orange-400">
          Well, that’s not supposed to be there...
        </h1>

        <p className="text-lg text-gray-300">
          Either you took a wrong turn, or someone’s been messing around with the routes again.
          <br />
          Let’s pretend we didn’t see this and get out before it gets proper ugly.
        </p>

        <p className="text-sm text-red-400">
          {error?.error?.message || 'Something went wrong.'}
        </p>

        <button
          onClick={() => navigate('/')}
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg text-lg transition"
        >
          Take me back, before things get messy
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
