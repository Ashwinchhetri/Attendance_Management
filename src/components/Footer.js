import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import '../style/footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-links">
                <a href="/Attendance_Management/">Home</a>
                <a href="https://ashwinchhetri.github.io/Webs_res/">About Us</a>
                <a href="https://github.com/Ashwinchhetri?tab=repositories">Services</a>
                <a href="https://ashwinchhetri.github.io/Webs_res/">Portfolio</a>
                <a href="https://ashwinchhetri.github.io/Webs_res/">Contact</a>
            </div>
            <div className="footer-social">
                <a href="https://www.linkedin.com/in/ashwin-chhetri-b76924223/" className="social-icon"><FaLinkedin /></a>
                <a href="https://www.facebook.com/" className="social-icon"><FaFacebook /></a>
                <a href="https://twitter.com/" className="social-icon"><FaTwitter /></a>
                <a href="https://www.instagram.com/" className="social-icon"><FaInstagram /></a>
            </div>
            <p className="footer-text">
                &copy; 2023 Ashwin Chhetri. All Rights Reserved.
            </p>
        </footer>
    );
};

export default Footer;
