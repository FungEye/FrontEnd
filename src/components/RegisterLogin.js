import { useSignIn } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import pic from "./images/mushroom.png";
import "./css/RegisterLogin.css";
import "./css/General.css";
import ButtonPrimary from "./ButtonPrimary";
import ButtonSecondary from "./ButtonSecondary";
import Input from "./Input";
import useValidate from "../hooks/useValidate";

export default function RegisterLogin() {
  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [error, setError] = useState("");
  const validate = useValidate({
    username,
    password,
    confirmedPassword,
    isLogin,
    setError,
  });
  const signIn = useSignIn();
  const navigate = useNavigate();

  useEffect(() => {
    clearInputs();
  }, []);

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
      saveToken(content.token);
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

  //source: https://www.educba.com/javascript-hash/
  function toHash(string) {
    var hash = 0;
    if (string.length === 0) return hash;
    for (let i = 0; i < string.length; i++) {
      let ch = string.charCodeAt(i);
      hash = (hash << 5) - hash + ch;
      hash = hash & hash;
    }
    return hash;
  }

  async function registerClick() {
    if (isLogin) {
      setIsLogin(false);
      clearInputs();
    } else {
      validate();
      if (error === "") {
        const hashedPassword = toHash(password);
        console.log(hashedPassword);
        await request("register", hashedPassword);
        clearInputs();
      }
    }
  }

  function backClick() {
    clearInputs();
    setIsLogin(true);
  }

  async function loginClick() {
    validate();
    if (error === "") {
      const hashedPassword = toHash(password);
      console.log(hashedPassword);
      await request("login", hashedPassword);
      clearInputs();
    }
  }

  function clearInputs() {
    setUsername("");
    setPassword("");
    setConfirmedPassword("");
    setError("");
  }

  return (
    <div className="loginCard bg-light">
      <div className="titleInputMushroomContainer">
        <div className="titleInputContainer">
          <div className="titleContainer ultra">
            {isLogin ? "Login" : "Register"}
          </div>
          <div className="inputsContainer">
            <div className="inputContainer">
              <Input
                title="Username"
                placeholder="Your username..."
                value={username}
                type="text"
                onChange={(event) => {
                  setUsername(event.target.value);
                  setError("");
                }}
              />
            </div>
            <div className="inputContainer">
              <Input
                title="Password"
                placeholder="Your password..."
                value={password}
                type="password"
                onChange={(event) => {
                  setPassword(event.target.value);
                  setError("");
                }}
                onKeyPress={(event) => {
                  if (event.key === "Enter") {
                    isLogin ? loginClick() : registerClick();
                  }
                }}
              />
            </div>
            {!isLogin ? (
              <div className="inputContainer">
                <Input
                  title="Confirm password"
                  placeholder="Confirm password..."
                  value={confirmedPassword}
                  type="password"
                  onChange={(event) => {
                    setConfirmedPassword(event.target.value);
                    setError("");
                  }}
                  onKeyPress={(event) => {
                    if (event.key === "Enter") {
                      registerClick();
                    }
                  }}
                />
              </div>
            ) : null}
            <div className="inputContainer">
              <span className="poppins error">{error}</span>
            </div>
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
