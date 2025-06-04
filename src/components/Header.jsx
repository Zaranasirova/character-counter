import React from 'react';
import logo from "../../src/assets/image/logo/logolight.png"
import LightDarkIcon from './LightDarkIcon';

const Header = () => {
    return (
        <header className='header'>
            <div className="header-wrapper container">
                <div className="logo">
                    <img src={logo} alt=""  className='logo-image'/>
                </div>
                <LightDarkIcon/>
            </div>
        </header>
    )
}

export default Header   