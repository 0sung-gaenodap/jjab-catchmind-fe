import "./BottomBanner.css";

function BottomBanner() {
  return (
    <footer className="bottom-banner">
      <div className="bottom-banner__container">

        <div className="bottom-banner__links">
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            className="bottom-banner__link"
          >
            GitHub
          </a>

          <span className="bottom-banner__divider">|</span>

          <a
            href="https://forms.gle/your-google-form"
            target="_blank"
            rel="noopener noreferrer"
            className="bottom-banner__link"
          >
            Google Form
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