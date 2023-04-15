import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo.png';
import './Header.css'

export const Header = () => {
    return (
        <div className="header">
            <Link to="/"> <img src={logo} className="logo" alt="logo"/> </Link>
            <nav>
                <Link to="/" className="navLink"> Create an employee </Link>
                <Link to="/current-employees" className="navLink"> Current Employees </Link>
            </nav>
        </div>
    )
}