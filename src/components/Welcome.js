import "./css/Welcome.css";
import "./css/WelcomeButton.css";
import { useNavigate } from "react-router-dom";
import Typewriter from "typewriter-effect";

function Welcome() {
  const navigate = useNavigate();

  function handleClick(event) {
    navigate("/FrontEnd/box");
  }

  return (
    <div className="welcomePage">
      <div className="header"></div>

      <div className="welcomeContainer">
        <h1 className="welcomeText">
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
          Set up a box!
        </button>
      </div>

      <div className="howItWorksContainer">
        <h2 className="title">How does it work?</h2>

        <p className="paragraph">
          All you need is the grow-kit, and an account on FungEye to be able to
          track the growth of your mushrooms, and get valuable tips for your
          grows.
        </p>

        <h2 className="title">How is FungEye going to help me?</h2>

        <p className="paragraph">
          {" "}
          FungEye will track the temperature, humidity, CO2 and light within
          your box.
        </p>

        <p className="paragraph">
          The recorded measurements will be compared to the optimal conditions
          your mushroom needs for each growth phase, and inform you on the
          actions you need to perform to ensure these optimal conditions.
        </p>
      </div>

      <div className="footer">
        <p className="footerText">Fungeye 2023</p>
      </div>
    </div>
  );
}

export default Welcome;
