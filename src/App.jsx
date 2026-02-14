import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopBanner from "./components/topBanner";
import MainPage from "./pages/mainPage";
import "./App.css";
import BottomBanner from "./components/bottomBanner";

function App() {
  return (
    <BrowserRouter>
      <TopBanner />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
      <BottomBanner />
    </BrowserRouter>
  );
}

export default App;