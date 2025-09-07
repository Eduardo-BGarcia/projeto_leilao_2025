import React from 'react';
import './Header.css';
import logo from '../../assets/logo-leilao.png';
import { FaBars, FaUserCircle } from 'react-icons/fa';

const Header = () => {
    return (
        <div className="header">
            <div className="header-left">
                <FaBars className="header-icon" />
            </div>

            <div className="header-center">
                <img className="logo" src={logo} alt="Logo do site AgroLance" />
            </div>

            <div className="header-right">
                <FaUserCircle className="header-icon" />
            </div>
        </div>
    );
}

export default Header;