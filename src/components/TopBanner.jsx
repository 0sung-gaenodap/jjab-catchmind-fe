import "./TopBanner.css";
import { useNavigate } from "react-router-dom";

function TopBanner({
  title = "DrawGuess",
  subtitle = "그림으로 소통하는 즐거움",
  userName = "게스트",
  level = 1,
  avatarText = "G",
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <header className="top-banner">
      <div className="top-banner__container">
        <div className="top-banner__left" onClick={handleClick}>
          <div className="top-banner__logo-box">
            <img
              src="/catchmind_icon.png"
              alt="logo"
              className="top-banner__logo-img"
            />
          </div>

          <div className="top-banner__brand">
            <div className="top-banner__title">{title}</div>
            <div className="top-banner__subtitle">{subtitle}</div>
          </div>
        </div>

        <div className="top-banner__right">
          <div className="top-banner__user-card">
            <div className="top-banner__user-info">
              <div className="top-banner__user-name">{userName}</div>
              <div className="top-banner__user-level">Lv. {level}</div>
            </div>

            <div className="top-banner__avatar">
              {avatarText}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default TopBanner;