import { useRouteError, useNavigate } from "react-router-dom";
import errorImage from "../img/hq720.jpg"; // Переконайтеся, що цей шлях до зображення вірний

const ErrorPage = () => {
  const navigate = useNavigate();
  const error = useRouteError();
  console.error("Routing error:", error);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex flex-col items-center justify-center px-6 py-10">
      <div className="max-w-md text-center space-y-6">
        <img
          src={errorImage}
          alt="Oops"
          className="mx-auto max-w-[250px] rounded-full border-4 border-teal-500 shadow-xl"
        />

        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-teal-400">
          Йой! здається, Мікі втратив керування...
        </h1>

        <p className="text-gray-300 text-lg">
          Навіть у справжніх чемпіонів бувають нокдауни.
          Але ми тут, щоб підняти його на ноги.
        </p>

        <p className="text-sm text-red-400 bg-gray-800 bg-opacity-70 p-3 rounded-lg border border-red-500 font-mono">
          "Ти ж знаєш, Мікі може загнати тебе в глухий кут, звідки не вибратися." <br />
          <span className="font-semibold block mt-2">Помилка:</span>{" "}
          {error?.error?.message || "Щось пішло не так, як ми очікували. Ну, буває."}
        </p>

        <button
          onClick={() => navigate("/")}
          className="mt-6 bg-teal-600 hover:bg-teal-500 text-gray-100 font-semibold py-3 px-8 rounded-lg shadow-lg transition transform active:scale-98"
          aria-label="Повернутися на головну"
        >
          Давай, Мікі! Повернися у ринг!
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;