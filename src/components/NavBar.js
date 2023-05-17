import "./css/General.css";
import "./css/NavBar.css";
import pic from "../mushroom.png";
import { useAuthUser, useSignOut, useIsAuthenticated } from "react-auth-kit";
import { useNavigate } from "react-router-dom";

const NavBar = (props) => {
  const isAuthenticated = useIsAuthenticated();
  const auth = useAuthUser();
  const navigate = useNavigate();
  const signOut = useSignOut();

  function logOut() {
    navigate("/");
    signOut();
  }
  return (
    <div className="navBar row varela bg-light text-dark jc-space-between align-items-center slightly-faded">
      <div
        onClick={() => navigate("/  ")}
        className="row jc-center align-items-center "
      >
        <p className="text-dark ultra title">FungEye</p>
        <img src={pic} alt="Girl in a jacket" className="logo" />
      </div>
      <div className="navItems row jc-space-evenly poppins ">
        <p className="navItemsText" onClick={() => navigate("/dashboard")}>
          Dashboard
        </p>
        <p className="navItemsText" onClick={() => navigate("/overview")}>
          Overview
        </p>
        <p className="navItemsText" onClick={() => navigate("/mushrooms")}>
          Mushrooms
        </p>
        <p className="navItemsText" onClick={() => navigate("/chooseBox")}>
          Boxes
        </p>
        <p className="navItemsText" onClick={() => navigate("/addnewspecies")}>
          New
        </p>
        <p className="navItemsText" onClick={() => navigate("/yields")}>
          Yields
        </p>
        <p className="navItemsText" onClick={() => navigate("/history")}>
          History
        </p>

        <p className="navItemsText" onClick={() => navigate("/guide")}>
          Guide
        </p>
      </div>
      <div className="poppins row jc-space-between align-items-center login">
        <p className="navItemsText">{isAuthenticated() ? auth().name : null}</p>
        <p
          className="navItemsText"
          onClick={() => (isAuthenticated() ? logOut() : navigate("login"))}
        >
          {isAuthenticated() ? "Log out 🔓" : "Log in 🔒"}
        </p>
      </div>
    </div>
  );
};

export default NavBar;
