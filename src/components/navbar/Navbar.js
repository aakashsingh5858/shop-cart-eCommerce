import React, { useState } from "react";
import "./navbar.css";
import Logo from "../../assets/images/logo/logo.png";
import Button from "../button/Button";
import { FaBars } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setHeaderFixed(true);
    } else {
      setHeaderFixed(false);
    }
  });
  console.log(headerFixed);
  return (
    <header className="header">
      <div
        className="header-container"
        style={{
          position: headerFixed ? "fixed" : "sticky",
        }}
      >
        <div className="header-logo">
          <img src={Logo} />
        </div>
        <div className="header-menu-list">
          <div className="menu-list-wrap">
            <li className="menu-list">home</li>
            <li className="menu-list">shop</li>
            <li className="menu-list">blog</li>
            <li className="menu-list">about</li>
            <li className="menu-list">contact</li>
          </div>

          <div className="list-btn">
            <li className="menu-list">
              <Button value={"create account"} className={"yellow-btn"} />
            </li>
            <li className="menu-list-btn">log in</li>
          </div>
          <div>
            {menuToggle ? (
              <IoCloseSharp
                size="2.5rem"
                className="header-bar"
                onClick={() => setMenuToggle(false)}
              />
            ) : (
              <FaBars
                size="2rem"
                className="header-bar"
                onClick={() => setMenuToggle(true)}
              />
            )}
          </div>
          <div>
            <FaInfoCircle
              size="2rem"
              className="header-info"
              onClick={() => setSocialToggle(!socialToggle)}
            />
          </div>
        </div>
      </div>
      <div className="dropList-btn-wrap">
        <div
          className="dropList-btn"
          style={{ height: socialToggle ? "4rem" : 0, overflow: "hidden" }}
        >
          <li className="menu-list">
            <Button value={"create account"} className={"yellow-btn"} />
          </li>
          <li className="menu-list-btn">log in</li>
        </div>
      </div>
      <div
        className="dropMenu-list-wrap"
        style={{ height: menuToggle ? "14rem" : 0, overflow: "hidden" }}
      >
        <li className="dropMenu-list">home</li>
        <li className="dropMenu-list">shop</li>
        <li className="dropMenu-list">blog</li>
        <li className="dropMenu-list">about</li>
        <li className="dropMenu-list">contact</li>
      </div>
    </header>
  );
};

export default Navbar;
