import React from "react";
import "../style/login.css";
import student from "../assets/student.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    let history = useNavigate();

    const [inputClicked, setInputClicked] = useState(false);

    const [message, setMessage] = useState({ text: "", color: "" });

    function check() {
        if (username === "" || password === "") {
            setMessage({ text: "Fill all the fields!", color: "red" });
        } else {
            history("/mark/", { state: { username: username } });
        }
        setTimeout(() => {
            setMessage({ text: "", color: "" });
        }, 7000);
    }

    return (
        <>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&family=Raleway&family=Spectral+SC:wght@300&display=swap');
            </style>
            <div className="login_page">
                <div className="login_disp">
                    <div className="home_image">
                        <img src={student} className="att_image"></img>
                    </div>
                    <div className="home_login">
                        <div className="login_email">
                            <p>UserName</p>
                            <input type="text" className={`email ${inputClicked ? 'clicked' : ''}`} value={username} placeholder="Eg: abc@xyz.edu.in" onClick={() => setInputClicked(true)} onChange={(e) => {
                                setusername(e.target.value);
                            }} />
                        </div>
                        <div className="login_pass">
                            <p>Password</p>
                            <input type="password" className={`password ${inputClicked ? 'clicked' : ''}`} value={password} placeholder="Eg: @bcD123e" onClick={() => setInputClicked(true)} onChange={(e) => {
                                setpassword(e.target.value);
                            }} />
                        </div>
                        <div className="press" onClick={check}>
                            <Link to="/Attendance_Management/" className="itsLink"> &rarr; Login</Link>
                        </div>
                        {message.text && (
                            <div className="message" style={{
                                border: `3px solid ${message.color}`,
                                borderTop: `2px solid ${message.color}`,
                                borderBottom: `2px solid ${message.color}`,
                            }}>
                                {message.text}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;