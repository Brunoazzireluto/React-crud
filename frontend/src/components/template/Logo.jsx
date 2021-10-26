import './Logo.css';
import React from 'react';
import logo from "../../assets/img/dragon.png"
import { Link } from 'react-router-dom';

export default props =>
    <aside className="logo">
        <Link to="/" className="logo">
            <img src={logo} alt='logo' width='100px' height='100px'/>
        </Link>
    </aside>