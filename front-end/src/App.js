import React, { useState } from 'react';

import './style.css';

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false); // Початковий стан - світла тема

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode); // Змінюємо стан на протилежний
    };

    return (
        <div className={`container ${isDarkMode ? 'dark-theme' : ''}`}>
            <div className="left-pane">
                <div className="logo-left-pane"></div>
                <p className="logo-text"> SpiritPleasure</p>
                <p className="logo-text2">насолодись Україною</p>
            </div>
            <div className="right-pane">
                <div className="top-right">
                    <label className="slider">
                        <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} value="true" />
                        <span className="slider-toggle"></span>
                    </label>
                    <div className="top-text">
                        <h1 className="Create-New-Account">Create new account</h1>
                        <h2 className="subtitle"> Already registered?  <a target="" href="" className="login-text"> Login </a>
                        </h2>
                    </div>
                </div>
                <div className="bottom-right">
                    <div className="input-group">
                        <label className="Name" htmlFor="name">Name</label>
                        <input type="text" id="name" />
                    </div>
                    <div className="input-group">
                        <label className="Email" htmlFor="name">E-mail</label>
                        <input type="text" id="email" />
                    </div>
                    <div className="input-group">
                        <label className="Password" htmlFor="password">Password</label>
                        <input type="password" id="password" />
                    </div>
                    <button className="Create-Account-button">Create account</button>
                </div>
            </div>
        </div>
    );
}

export default App;
