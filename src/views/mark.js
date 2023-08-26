import React from "react";
import { useState } from "react";
import Header from "../components/Header";
import { useLocation } from "react-router-dom";
import '../style/mark.css';
import student_at from '../assets/student_att.png';
import Footer from "../components/Footer";

const Mark = () => {

    let location = useLocation();

    const [inputClicked, setInputClicked] = useState(false);

    const [regno, setregno] = useState("");
    const [date, setdate] = useState("");
    const [period, setperiod] = useState("");

    const [message, setMessage] = useState({ text: "", color: "" });

    const submitform = () => {
        if (regno === "" || date === "" || period === "") {
            setMessage({ text: "Fill all the fields!", color: "red" });
        } else {
            setMessage({ text: "Submitted successfully!", color: "green" });
            setregno("");
            setperiod("");
            setdate("");
        }
        setTimeout(() => {
            setMessage({ text: "", color: "" });
        }, 7000);
    };


    const scroll = () => {
        const to = document.getElementById('attendance');
        if (to) to.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <Header username={location.state.username} />
            <div className="new_details">
                <div className="information">
                    <div className="text">
                        <p>“Education is the passport to the future, for tomorrow belongs to those who prepare for it today.” —Malcolm X</p>
                        <div className="apply">
                            <h2>Mark your attendance here</h2>
                            <button onClick={scroll}>Click Here</button>
                        </div>
                    </div>
                    <div className="image">
                        <img src={student_at}></img>
                    </div>
                </div>
            </div>
            <div className="mark_attend">
                <div className="mark_form">
                    <div className="form" id="attendance">
                        <p className="register">Registration No.</p>
                        <input type="text" className={`reg_inp ${inputClicked ? 'clicked' : ''}`} placeholder="Eg: CS304057668" onClick={() => setInputClicked(true)} value={regno}
                            onChange={(e) => {
                                setregno(e.target.value);
                            }}></input>
                        <p className="register">Subject code</p>
                        <input type="text" className={`reg_inp ${inputClicked ? 'clicked' : ''}`} placeholder="Eg: 18CSC202J" onClick={() => setInputClicked(true)} value={period}
                            onChange={(e) => {
                                setperiod(e.target.value);
                            }}></input>
                        <p className="register">Date</p>
                        <input type="date" className={`reg_inp ${inputClicked ? 'clicked' : ''}`} placeholder="Eg: MM-DD-YYYY" id="dateInput" onClick={() => setInputClicked(true)} value={date} onChange={(e) => {
                            setdate(e.target.value);
                        }} />
                        <button onClick={submitform}>Submit Details</button>
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
            <Footer />
        </>
    )
}

export default Mark;