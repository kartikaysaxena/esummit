import React, { useState, useEffect } from 'react';
import esummit from '../static/esummit-1.png'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{ margin: '2rem 8rem'}}>
            <a className="navbar-brand" href="#">
                <img src={esummit} alt="" style={{ height: '4rem', width: 'auto' }} />
            </a>
            <button className="navbar-toggler" type="button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
                <ul className="navbar-nav ml-auto mr-auto nav-links">
                    <li className="nav-item">
                        <a className="nav-link" style={{ color: 'white' }} href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"  style={{ color: 'white' }} href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"  style={{ color: 'white' }} href="/events">Events</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"  style={{ color: 'white' }} href="#team">Team</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
