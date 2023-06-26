import * as React from "react";
import { Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Reservations from "./pages/Reservations";
import Order from "./pages/Order";
import Login from "./pages/Login";
import "../components/styles/Nav.css";



function Nav() {
  return (
    <>
      <div className="navigation">
        <ul>
          <li>
            <Link to="/home" element = {<Home />} className="a">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" element = {<About />} className="a">
              About
            </Link>
          </li>
          <li>
            <Link to="/menu" element = {<Menu />} className="a">
              Menu
            </Link>
          </li>
          <li>
            <Link to="/reservations" element = {<Reservations />} className="a">
              Reservations
            </Link>
          </li>
          <li>
            <Link to="/order" element = {<Order />} className="a">
              Order Online
            </Link>
          </li>
          <li>
            <Link to="/login" element = {<Login />} className="a">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Nav;
