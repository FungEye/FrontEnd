import { useSignIn } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import pic from "../mushroom.png";
import "./css/RegisterLogin.css";
import "./css/General.css";
import ButtonPrimary from "./ButtonPrimary";
import ButtonSecondary from "./ButtonSecondary";
import Input from "./Input";
import useValidate from "../hooks/useValidate";
import useHash from "../hooks/useHash";
export default function RegisterLogin() {
  const [isLogin, setIsLogin] = useState(true);
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
  const hash = useHash(password);
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

  async function registerClick() {
    if (isLogin) {
      setIsLogin(false);
      clearInputs();
    } else {
      if (validate()) {
        const hashedPassword = hash();
        if (hashedPassword !== 0) await request("register", hashedPassword);
        clearInputs();
      }
    }
  }

  function backClick() {
    clearInputs();
    setIsLogin(true);
  }

  async function loginClick() {
    if (validate()) {
      const hashedPassword = hash();
      if (hashedPassword !== 0) await request("login", hashedPassword);
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
          <div className="titleContainer ultra row align-items-center text-dark">
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
                onKeyPress={async (event) => {
                  if (event.key === "Enter") {
                    isLogin ? await loginClick() : await registerClick();
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
                  onKeyPress={async (event) => {
                    if (event.key === "Enter") {
                      await registerClick();
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
          <img className="rl-img" src={pic} alt="Girl in a jacket" />
        </div>
      </div>
      <div className="buttonContainer">
        <ButtonSecondary
          text={isLogin ? "Register" : "Back"}
          onClick={isLogin ? registerClick : backClick}
        />
        <ButtonPrimary
          text={isLogin ? "Login" : "Register"}
          onClick={isLogin ? loginClick : registerClick}
        />
      </div>
    </div>
  );
}
