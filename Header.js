// import React, { useState} from 'react';
import "../components/styles/Header.css"
import little_lemon_full from "../components/assets/little-lemon-full.png"
import Nav from "./Nav";

function Header() {
  return (
    <>
      <div className="header">
        <div className="head-logo">
            <img src= { little_lemon_full } alt="Little Lemon" />
        </div>
        <div className="navigation">
          <Nav />
        </div>
      </div>
    </>
  );
}

export default Header;

