import React from "react";
import small_logo from "../components/assets/small_logo.png";
import { Link } from "react-router-dom";
import "../components/styles/Footer.css";

function Footer() {
    return (
        <div>
            <div className="footer-back">
                <div className="footer-container">
                    <div className="logo-and-txt">
                        <img src= { small_logo } alt="Little Lemon Logo" />
                    </div>
                        <div className="footer-nav">
                            <div className="navigation">
                                <ul className="page-links">
                                    <Link to="/home">Home</Link>
                                    <Link to="/about">About</Link>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-times">
                            <h4>HOURS</h4>
                            <ul>
                                <li>Sun: 11:00-21:00</li>
                                <li>Mon-Thu: 11:00-20:00</li>
                                <li>Fri: 11:00-22:00</li>
                                <li>Sat: 10:00-22:00</li>
                            </ul>
                        </div>
                        <div className="footer-contact">
                            <h4>CONTACT</h4>
                            <ul>
                                <li>Address</li>
                                <li>Phone</li>
                                <li>Email</li>
                                <li>Social media</li>
                            </ul>
                        </div>


                </div>
            </div>
        </div>
    )
}
export default Footer;

