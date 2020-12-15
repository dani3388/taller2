import React from "react";
import { Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="https://jikan.moe/assets/images/logo/jikan.logo.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "}
        Taller 2- Api Jikan
      </Navbar.Brand>
    </Navbar>
  );
};

export default Header;
