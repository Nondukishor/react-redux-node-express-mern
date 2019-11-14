import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss'
import Hero from './Hero';
function Header () {
    return (
     <header className="container-fluid">
        <nav className="nav-bar-wrapper">
            <div className="logo">
                <img src='' alt=""/>
            </div>

            <ul className="nav-list">
                <li className="nav-item"><Link className="nav-link" to="/">Profile</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/">Work Experience</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/">Education</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/">Skill</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/">Interest</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/">Portfolio</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/">Contact</Link></li>
            </ul>
        </nav>
        <Hero/>
    </header>
    )
}

export default Header;