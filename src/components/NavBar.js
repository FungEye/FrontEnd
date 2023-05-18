// import "./css/General.css";
// import "./css/NavBar.css";
// import pic from "../img/mushroom.png";
// import hamburger from "../img/hamburger.png";
// import x from "../img/x.png";
// import { useAuthUser, useSignOut, useIsAuthenticated } from "react-auth-kit";
// import { useNavigate } from "react-router-dom";
// import { useRef } from "react";

// const NavBar = (props) => {
//   const isAuthenticated = useIsAuthenticated();
//   const auth = useAuthUser();
//   const navigate = useNavigate();
//   const signOut = useSignOut();
//   const navRef = useRef();

//   function logOut() {
//     navigate("/");
//     signOut();
//   }

//   const showNavbar = () => {
//     navRef.current.classList.toggle("responsive_nav");
//   };

//   return (
//     <div className="navBar row varela bg-light text-dark jc-space-between align-items-center slightly-faded">
//       <div
//         onClick={() => navigate("/  ")}
//         className="row jc-center align-items-center "
//       >
//         <p className="text-dark ultra title">FungEye</p>
//         <img src={pic} alt="Girl in a jacket" className="logo" />
//       </div>
//       <div ref={navRef} className="navItems row jc-space-evenly poppins ">
//         <p className="navItemsText" onClick={() => navigate("/dashboard")}>
//           Dashboard
//         </p>
//         <p className="navItemsText" onClick={() => navigate("/overview")}>
//           Overview
//         </p>
//         {/* <p className="navItemsText" onClick={() => navigate("/mushrooms")}>
//           Mushrooms
//         </p>
//         <p className="navItemsText" onClick={() => navigate("/chooseBox")}>
//           Boxes
//         </p>
//         <p className="navItemsText" onClick={() => navigate("/addnewspecies")}>
//           New
//         </p>
//         <p
//           className="navItemsText"
//           onClick={() => navigate("/editaddnewspecies")}
//         >
//           Edit
//         </p>
//         <p className="navItemsText" onClick={() => navigate("/yields")}>
//           Yields
//         </p>
//         <p className="navItemsText" onClick={() => navigate("/history")}>
//           History
//         </p>

//         <p className="navItemsText" onClick={() => navigate("/guide")}>
//           Guide
//         </p>
//         <p className="navItemsText" onClick={() => navigate("/recipes")}>
//           Recipes
//         </p> */}
//       </div>
//       <div className="poppins row jc-space-between align-items-center login">
//         <p className="navItemsText">{isAuthenticated() ? auth().name : null}</p>
//         <p
//           className="navItemsText"
//           onClick={() => (isAuthenticated() ? logOut() : navigate("login"))}
//         >
//           {isAuthenticated() ? "Log out 🔓" : "Log in 🔒"}
//         </p>
//         <img
//           className="nav-btn nav-close-btn"
//           src={x}
//           alt="x"
//           width="100"
//           onClick={showNavbar}
//         />
//       </div>
//       <img
//         className="nav-btn"
//         src={hamburger}
//         alt="burger icon"
//         width="100"
//         onClick={showNavbar}
//       />
//     </div>
//   );
// };

// export default NavBar;

import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./css/NavBar.css";
import { useNavigate } from "react-router-dom";
import "./css/General.css";

function Navbar() {
  const navRef = useRef();
  const navigate = useNavigate();
  let isCollapsed = false;

  const showNavbar = () => {
    isCollapsed = !isCollapsed;
    navRef.current.classList.toggle("responsive_nav");
  };

  const goTo = (path) => {
    if (isCollapsed) showNavbar();
    navigate(path);
  };

  return (
    <div className="header">
      <h3 className="ultra">FungEye</h3>
      <nav ref={navRef}>
        <p className="navItemsText poppins" onClick={() => goTo("/dashboard")}>
          Dashboard
        </p>
        <p className="navItemsText  poppins" onClick={() => goTo("/overview")}>
          Overview
        </p>
        <p className="navItemsText  poppins" onClick={() => goTo("/mushrooms")}>
          Mushrooms
        </p>
        <p className="navItemsText  poppins" onClick={() => goTo("/chooseBox")}>
          Boxes
        </p>
        <p
          className="navItemsText  poppins"
          onClick={() => goTo("/addnewspecies")}
        >
          New
        </p>
        <p
          className="navItemsText  poppins"
          onClick={() => goTo("/editaddnewspecies")}
        >
          Edit
        </p>
        <p className="navItemsText  poppins" onClick={() => goTo("/yields")}>
          Yields
        </p>
        <p className="navItemsText  poppins" onClick={() => goTo("/history")}>
          History
        </p>
        <p className="navItemsText  poppins" onClick={() => goTo("/guide")}>
          Guide
        </p>{" "}
        <p className="navItemsText poppins" onClick={() => goTo("/recipes")}>
          Recipes
        </p>
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
