import "./css/Welcome.css";
import "./css/WelcomeButton.css";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  function handleClick(event) {
    navigate("/dashboard");
  }

  return (
    <div className="welcomeContainer">
      <div>
        <h1 className="text">Welcome!</h1>
        <button className="button-54" onClick={handleClick}>
          Set up a box!
        </button>
      </div>
    </div>
  );
}

export default Welcome;
