import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { Outlet } from "react-router";
import AddApplicationModal from "./components/AddApplicationModal";
import useAppStore from "./store/useAppStore";
import { useEffect } from "react";

function App() {
  const { isModalOpen } = useAppStore();
  const fetchApplications = useAppStore((state) => state.fetchApplications);

  useEffect(() => {
    fetchApplications();
  }, [fetchApplications]);
  return (
    <div className="flex flex-col min-h-screen text-gray-100 bg-gray-900">
      {isModalOpen && <AddApplicationModal />}
      <Header />
      <main className="flex-grow px-4 py-6 bg-gray-800 pt-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
