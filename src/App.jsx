import { useState } from "react";
import MainPage from "./pages/mainPage";
import "./index.css";

function Home({ onEnter }) {
  return (
    <div className="page">
      <div className="card">
        <h1>환영합니다</h1>
        <p>시작하려면 옵션을 선택하세요</p>

        <button className="blue" onClick={onEnter}>로그인</button>
        <button className="green" onClick={onEnter}>회원가입</button>
        <button className="gray" onClick={onEnter}>게스트로 들어가기</button>
      </div>

      <button className="helpBtn">?</button>
    </div>
  );
}

export default function App() {
  const [screen, setScreen] = useState("home"); // "home" | "main"

  if (screen === "home") {
    return <Home onEnter={() => setScreen("main")} />;
  }

  return <MainPage onGoHome={() => setScreen("home")} />;
}
<MainPage onGoHome={() => setScreen("home")} />