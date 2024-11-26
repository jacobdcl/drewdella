import React from "react";
import HeaderHome from "../../components/HeaderHome/HeaderHome.jsx";
import GoogleLogo from "../../components/GoogleLogo/GoogleLogo.jsx";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import "./HomePage.css";

function HomePage() {
  const googleLogoStyles = {
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "90vh",
    paddingLeft: "3rem",
    paddingRight: "3rem",
    height: "70%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <HeaderHome />
      <div style={{ flex: 2 }} />
      <div className="home-div">
        <div className="home-hero">
          <GoogleLogo style={googleLogoStyles} />
          <SearchBar
            feelingLucky={true}
            suggestions={[
              { name: "drew della discography", path: "/all" },
              { name: "della photos", path: "/images" },
              { name: "@thedrewdella", path: "/connect" },
              { name: "live shows nyc+", path: "/maps" },
              { name: "drew della merch", path: "https://www.drewdellamerch.com" },
            ]}
          />
        </div>
      </div>
      <div style={{ flex: 3 }} />
      <Footer />
    </div>
  );
}

export default HomePage;
