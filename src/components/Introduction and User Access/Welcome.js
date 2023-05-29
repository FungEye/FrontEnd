import "./css/Welcome.css";
import "./css/WelcomeButton.css";
import { useNavigate } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { useAuthUser, useIsAuthenticated } from "react-auth-kit";

function Welcome() {
  const navigate = useNavigate();
  const isAuthenticated = useIsAuthenticated();
  const auth = useAuthUser();
  let username = null;

  if (isAuthenticated()) {
    username = auth().name;
  }

  function handleClick(event) {
    if (isAuthenticated()) {
      navigate("/overview");
    } else {
      navigate("/login");
    }
  }

  return (
    <div className="welcome-container">
      <h1 className="welcome-text">
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
            delay: 100,
            strings: [`Welcome to FungEye${username ? `, ${username}!` : "!"}`],
          }}
        />
      </h1>
      <h3 className="motto">Empowering you to grow mushrooms like a pro.</h3>
      <button className="button-54" onClick={handleClick}>
        {isAuthenticated() ? "See my overview!" : "Log in/Register"}
      </button>
    </div>
  );
}

export default Welcome;

