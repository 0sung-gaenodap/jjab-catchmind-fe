import "./BottomBanner.css";

function BottomBanner() {
  return (
    <footer className="bottom-banner">
      <div className="bottom-banner__container">

        <div className="bottom-banner__links">
          <a
            href="https://github.com/0sung-gaenodap/jjab-catchmind-fe.git"
            target="_blank"
            rel="noopener noreferrer"
            className="bottom-banner__link"
          >
            GitHub
          </a>

          <span className="bottom-banner__divider">|</span>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdEqeo6ooiCSBUoeRgTcbGN2CP56hk_ziu7V9CgJRS-iJmmGg/viewform?usp=publish-editor"
            target="_blank"
            rel="noopener noreferrer"
            className="bottom-banner__link"
          >
            사이트 이용 설문
          </a>
        </div>

        <div className="bottom-banner__copyright">
          © 2026 DrawGuess. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default BottomBanner;