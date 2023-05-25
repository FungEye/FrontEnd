import { useRef, useState } from "react";
import { useAuthUser, useSignOut, useIsAuthenticated } from "react-auth-kit";
import { FaBars, FaTimes } from "react-icons/fa";
import "./css/NavBar.css";
import { useNavigate } from "react-router-dom";
import "./css/General.css";

function Navbar() {
  const isAuthenticated = useIsAuthenticated();
  const auth = useAuthUser();
  const signOut = useSignOut();
  const navRef = useRef();
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false);

  function logOut() {
    if (isCollapsed) showNavbar();
    navigate("/");
    signOut();
  }

  const showNavbar = () => {
    setIsCollapsed(!isCollapsed);
    navRef.current.classList.toggle("responsive_nav");
  };

  const goTo = (path) => {
    if (isCollapsed) showNavbar();
    navigate(path);
  };

  return (
    <div className="header jc-space-between">
      <h3 className="title ultra" onClick={() => navigate("/")}>
        FungEye
      </h3>
      <nav ref={navRef}>
      <p className="navItemsText  poppins" onClick={() => goTo("/dashboard/1")}>
          Dashboard
        </p>
        <p className="navItemsText  poppins" onClick={() => goTo("/overview")}>
          Overview
        </p>
        <p className="navItemsText  poppins" onClick={() => goTo("/mushrooms")}>
          Mushrooms
        </p>

        <p className="navItemsText  poppins" onClick={() => goTo("/new")}>

          New
        </p>
        <p className="navItemsText  poppins" onClick={() => goTo("/yields")}>
          Yields
        </p>
        <p className="navItemsText  poppins" onClick={() => goTo("/guide")}>
          Guide
        </p>
        <p className="navItemsText poppins" onClick={() => goTo("/history/1")}>
          History
        </p>
        <div className="login bg-dark text-light jc-center flex-wrap">
          <p className="poppins navItemsText">
            {isAuthenticated() ? auth().name : null}
          </p>
          <p className="navItemsText">|</p>
          <p
            className="poppins navItemsText"
            onClick={() => (isAuthenticated() ? logOut() : goTo("/login"))}
          >
            {isAuthenticated() ? " Log out 🔓" : "Log in 🔒"}
          </p>
        </div>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </div>
  );
}

export default Navbar;
