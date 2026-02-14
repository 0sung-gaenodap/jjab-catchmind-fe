import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import MainPage from "./pages/mainPage";
import Home from "./pages/home";
import TopBanner from "./components/topBanner";
import BottomBanner from "./components/bottomBanner";
import "./index.css";
import "./App.css";

function AppLayout() {
  const { pathname } = useLocation();
  const isMainPage = pathname === "/mainPage";

  return (
    <div className="appShell">
      {isMainPage && <TopBanner />}

      <main className="appMain">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mainPage" element={<MainPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <BottomBanner />
    </div>
  );
}

export default function App() {
  return <AppLayout />;
}
