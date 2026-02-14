import "./home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleEnter = () => {
    navigate("/mainPage");
  };

  return (
    <div className="homePage">
      <div className="homeCard">
        <div className="homeBadge">
          <img src="/catchmind_icon.png" alt="CatchMind" className="homeBadgeIcon" />
          <span>CatchMind</span>
        </div>
        <h1 className="homeTitle">환영합니다</h1>
        <p className="homeSub">시작하려면 옵션을 선택하세요</p>

        <div className="homeActions">
          <button className="homeBtn primary" onClick={handleEnter}>로그인</button>
          <button className="homeBtn secondary" onClick={handleEnter}>회원가입</button>
          <button className="homeBtn dark" onClick={handleEnter}>게스트로 들어가기</button>
        </div>
      </div>

      <button className="homeHelpBtn">?</button>
    </div>
  );
}
