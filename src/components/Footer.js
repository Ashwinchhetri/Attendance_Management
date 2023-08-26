import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import '../style/footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-links">
                <a>Home</a>
                <a>About Us</a>
                <a>Services</a>
                <a>Portfolio</a>
                <a>Contact</a>
            </div>
            <div className="footer-social">
                <a className="social-icon"><FaFacebook /></a>
                <a className="social-icon"><FaTwitter /></a>
                <a className="social-icon"><FaLinkedin /></a>
                <a className="social-icon"><FaInstagram /></a>
            </div>
            <p className="footer-text">
                &copy; 2023 Ashwin Chhetri. All Rights Reserved.
            </p>
        </footer>
    );
};

export default Footer;
