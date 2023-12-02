import React from "react";
import "../styles/Navbar.css";
import Dropdown from "./Dropdown";

const Navbar = () => {
  return (
    <>
      <div className="Navbarcontainer">
        <div className="Navbar-logo">
          <img src="/Users/shubhamlutade/Documents/ReactJs Projects/Application-Components/reusablecomponents/src/styles/logo.png" alt="Navbar Logo" />
        </div>
        <div className="Navbar-options">
          <span>
            Home <i class="fa fa-home" aria-hidden="true"></i>
          </span>
          <span>About</span>
          <span>
            Services <i class="fa fa-yelp" aria-hidden="true"></i>
          </span>
          <span>
            Contact <i class="fa fa-phone-square" aria-hidden="true"></i>
          </span>

          <span className="dp"> 
            <Dropdown
              dropdown={[
                {
                  icon: <i class="fa fa-home" aria-hidden="true"></i>,
                  link: "Home",
                },
                {
                  icon: <i class="fa fa-user" aria-hidden="true"></i>,
                  link: "User",
                },
                {
                  icon: <i class="fa fa-sign-out" aria-hidden="true"></i>,
                  link: "Logout",
                },
              ]}
              label = "Profile"
            />
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
