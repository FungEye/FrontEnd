import "./css/Welcome.css";
import "./css/WelcomeButton.css";
import { useNavigate } from "react-router-dom";
import Typewriter from "typewriter-effect";

function Welcome() {
  const navigate = useNavigate();

  function handleClick(event) {
    navigate("/dashboard/1");
  }

  return (
    <div>
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

      <div className="footer">Fungeye 2023</div>
    </div>
  );
}

export default Welcome;
