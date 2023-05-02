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
  //TODO Validate and handle error
  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [error, setError] = useState("");

  const signIn = useSignIn();
  const navigate = useNavigate();

  async function request(type, hashedPassword) {
    const rawResponse = await fetch(`https://72v0d.wiremockapi.cloud/${type}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: hashedPassword }),
    });
    if (rawResponse.ok) {
      const content = await rawResponse.json();
      console.log(content);
      saveToken(content.token);
    } else {
      console.log(rawResponse);
    }
  }

  function saveToken(token) {
    signIn({
      token: token,
      expiresIn: 3600,
      tokenType: "Bearer",
      authState: { name: username },
    });
    navigate("/dashboard");
  }

  async function registerClick() {
    if (isLogin) {
      setIsLogin(false);
    } else {
      if (validate()) {
        console.log("register");
        console.log(username, password);
        const hashedPassword = bcrypt.hashSync(password, salt);
        console.log(hashedPassword);
        await request("register", hashedPassword);
        clearInputs();
      }
    }
  }

  function backClick() {
    console.log("back");
    clearInputs();
    setIsLogin(true);
  }

  async function loginClick() {
    if (validate()) {
      console.log("login");
      console.log(username, password);
      const hashedPassword = bcrypt.hashSync(password, salt);
      console.log(hashedPassword);
      await request("login", hashedPassword);
      clearInputs();
    }
  }

  function clearInputs() {
    setUsername("");
    setPassword("");
    setPassword("");
    setError("");
  }

  function validate() {
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
    if (
      username === "" ||
      password === "" ||
      (confirmedPassword === "" && !isLogin)
    ) {
      setError("Fields cannot be empty.");
    } else if (password.includes(password)) {
      setError("Password cannot include your username.");
    } else if (
      !password.value.match(upperCaseLetters) ||
      !password.value.match(numbers)
    ) {
      setError(
        "Password must contain at least one number and one uppercase letter."
      );
    } else if (!isLogin && confirmedPassword !== password) {
      setError("Passwords are not the same.");
    } else {
      return true;
    }
    return false;
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
                title="Username"
                placeholder="Your username..."
                value={username}
                type="text"
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>
            <div className="inputContainer">
              <Input
                title="Password"
                placeholder="Your password..."
                value={password}
                type="password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            {!isLogin ? (
              <div className="inputContainer">
                <Input
                  title="Confirm password"
                  placeholder="Confirm password..."
                  value={confirmedPassword}
                  type="password"
                  onChange={(event) => setConfirmedPassword(event.target.value)}
                />
              </div>
            ) : null}
            {error !== "" ? (
              <span className="poppins error">{error}</span>
            ) : null}
          </div>
        </div>
        <div className="mushroomContainer">
          <img src={pic} alt="Girl in a jacket" />
        </div>
      </div>
      <div className="buttonContainer">
        <ButtonPrimary
          text={isLogin ? "Login" : "Register"}
          onClick={isLogin ? loginClick : registerClick}
        />
        <ButtonSecondary
          text={isLogin ? "Register" : "Back"}
          onClick={isLogin ? registerClick : backClick}
        />
      </div>
    </div>
  );
}
