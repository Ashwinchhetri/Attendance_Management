import React from 'react';
import icon from '../assets/icon.ico';
import { CgUserlane } from 'react-icons/cg';
import '../style/header.css';

function Header(props) {
    return (
        <>
            <div className='header_class'>
                <div className='header_info'>
                    <div className='logo'>
                        <img src={icon} className='logo_img'></img>
                    </div>
                    <div className='desc'>Attendance Submission</div>
                    <div className='welcome'>
                        <p className='user'>Hello, <span className='hello_name'>{props.username}</span></p>
                        <CgUserlane className='iconss' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;
