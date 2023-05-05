import "./css/Welcome.css";
import "./css/WelcomeButton.css";
import { useNavigate } from "react-router-dom";
import Typewriter from "typewriter-effect";

function Welcome() {
  const navigate = useNavigate();

  function handleClick(event) {
    navigate("/dashboard");
  }

  return (
    <div className="welcomePage">
      <div className="header"></div>

      <div className="welcome-container">
        <h1 className="welcome-text">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 100,
              strings: ["Welcome to FungEye!"],
            }}
          />
        </h1>
        <h3 className="motto">Empowering you to grow mushrooms like a pro. </h3>
        <button className="button-54" onClick={handleClick}>
          Go to dashboard!
        </button>
      </div>

      <div className="how-it-works-container">
        <h2 className="welcome-page-title">How does it work?</h2>

        <p className="welcome-paragraph">
          All you need is the grow-kit, and an account on FungEye to be able to
          track the growth of your mushrooms, and get valuable tips for your
          grows.
        </p>

        <h2 className="welcome-page-title">How is FungEye going to help me?</h2>

        <p className="welcome-paragraph">
          {" "}
          FungEye will track the temperature, humidity, CO2 and light within
          your box.
        </p>

        <p className="welcome-paragraph">
          The recorded measurements will be compared to the optimal conditions
          your mushroom needs for each growth phase, and inform you on the
          actions you need to perform to ensure these optimal conditions.
        </p>
      </div>

      <footer className="footer">Fungeye 2023</footer>
    </div>
  );
}

export default Welcome;
