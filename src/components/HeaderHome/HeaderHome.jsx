// HeaderHome.jsx
import React from "react";
import "./HeaderHome.css";

function HeaderHome() {
  return (
    <header className="header-home">
      <div className="header-home-left">
        <a
          href="https://www.drewdella.com"
          className="header-home-link"
          target="_blank"
        >
          About
        </a>
        <a
          href="https://drewdellamerch.com"
          className="header-home-link"
          target="_blank"
        >
          Store
        </a>
      </div>
      <div style={{ display: "flex", flex: 2 }} />
      <div className="header-home-right">
        <a
          href="mailto:drewdella@gmail.com?subject=Reaching out from the Website&body=Hi Andrew,"
          className="header-home-link"
        >
          Gmail
        </a>
        <a href="images" className="header-home-link" target="_blank">
          Images
        </a>
      </div>
    </header>
  );
}

export default HeaderHome;
