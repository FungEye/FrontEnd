import { useSignIn } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import pic from "./images/mushroom.png";
import "./css/RegisterLogin.css";
import Button from "./Button";

export default function RegisterLogin() {
  const [isLogin, setIsLogin] = useState(false);

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
    console.log("register");
  }

  function backClick() {
    console.log("back");
  }

  function loginClick() {
    console.log("login");
  }
  //<button onClick={generateJWT}>Login and get JWT</button>
  return (
    <div className="loginCard">
      <div className="titleInputMushroomContainer">
        <div className="titleInputContainer">
          <div className="titleContainer">{isLogin ? "Login" : "Register"}</div>
          <div>
            <div className="inputContainer">
              <p>Username</p>
              <input type="text" id="username" />
            </div>
            <div className="inputContainer">
              <p>Password</p>
              <input type="password" id="password" />
            </div>
          </div>
        </div>
        <div className="mushroomContainer">
          <img src={pic} alt="Girl in a jacket" width="250" height="250" />
        </div>
      </div>
      <div className="buttonContainer">
        <Button
          text={isLogin ? "Register" : "Back"}
          theme="light"
          onClick={isLogin ? registerClick : backClick}
        />
        <Button
          text={isLogin ? "Login" : "Register"}
          theme="dark"
          onClick={isLogin ? loginClick : registerClick}
        />
      </div>
    </div>
  );
}
