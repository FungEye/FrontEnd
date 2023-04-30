import { useSignIn } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import pic from "./images/mushroom.png";
import "./css/RegisterLogin.css";
import "./css/General.css";
import ButtonPrimary from "./ButtonPrimary";
import ButtonSecondary from "./ButtonSecondary";
import Input from "./Input";
import bcrypt from "bcryptjs";
import { salt } from "./Helper";

export default function RegisterLogin() {
  //TODO Validate and handle error, make requests to mock api
  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  const signIn = useSignIn();
  const tokenJWT =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
  const navigate = useNavigate();

  function generateJWT() {
    signIn({
      token: tokenJWT,
      expiresIn: 3600,
      tokenType: "Bearer",
      authState: { name: "Kamilo" },
    });
    navigate("/box");
  }

  function registerClick() {
    if (isLogin) {
      setIsLogin(false);
    } else {
      console.log("register");
      console.log(username, password);
      const hashedPassword = bcrypt.hashSync(password, salt);
      console.log(hashedPassword);
      clearInputs();
    }
    //Here will the request to the api happen
    //if response.ok then show modal or a message
  }

  function backClick() {
    console.log("back");
    clearInputs();
    setIsLogin(true);
  }

  function loginClick() {
    console.log("login");
    console.log(username, password);
    const hashedPassword = bcrypt.hashSync(password, salt);
    console.log(hashedPassword);
    clearInputs();
  }

  function clearInputs() {
    setUsername("");
    setPassword("");
    setPassword("");
  }

  //<button onClick={generateJWT}>Login and get JWT</button>
  return (
    <div className="loginCard bg-light">
      <div className="titleInputMushroomContainer">
        <div className="titleInputContainer">
          <div className="titleContainer ultra">
            {isLogin ? "Login" : "Register"}
          </div>
          <div>
            <div className="inputContainer">
              <Input
                placeholder="Your username..."
                value={username}
                type="text"
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>
            <div className="inputContainer">
              <Input
                placeholder="Your password..."
                value={password}
                type="password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            {!isLogin ? (
              <div className="inputContainer">
                <Input
                  placeholder="Confirm password..."
                  value={confirmedPassword}
                  type="password"
                  onChange={(event) => setConfirmedPassword(event.target.value)}
                />
              </div>
            ) : null}
          </div>
        </div>
        <div className="mushroomContainer">
          <img src={pic} alt="Girl in a jacket" />
        </div>
      </div>
      <div className="buttonContainer">
        <ButtonPrimary
          text={isLogin ? "Register" : "Back"}
          onClick={isLogin ? registerClick : backClick}
        />
        <ButtonSecondary
          text={isLogin ? "Login" : "Register"}
          onClick={isLogin ? loginClick : registerClick}
        />
      </div>
    </div>
  );
}
