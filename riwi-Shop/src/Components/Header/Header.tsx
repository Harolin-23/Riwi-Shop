
import React, { useState } from 'react';
import './Header.scss'

import Logo from '../../assets/logos/logo2.png'


const Header: React.FC = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        console.log(menuOpen)
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="head-v-top">
        <section className="contains-v-top">
            <a href="./LandingPage.html" className="logo-up-1">
                <img src={Logo} alt="Logo" />
            </a>
            <div className="cpmtains-aC">
                <div className="Men-AS">
                    <input 
                        type="checkbox" 
                        id="menu-toggle" 
                        checked={menuOpen} 
            
                    />
                    <label htmlFor="menu-toggle" id="menu-icon" onClick={toggleMenu}>
                        &#9776;
                    </label>
                    <div id="menu" style={{ display: menuOpen ? 'block' : 'none' }}>
                        <ul>
                            <li><a href="./LandingPage.html">Home</a></li>
                            <li><a href="./redirects/shopRiwi/shop.html">Shop</a></li>
                            <li><a href="./redirects/contact/AboutUs.html">About</a></li>
                            <li><a href="./redirects/contact/contact.html">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className="Meta-aRF">
                    <a href="../LandingPage.html" className="link1Home">Home</a>
                    <a href="./redirects/shopRiwi/shop.html" className="link1Shop">Shop</a>
                    <a href="./redirects/contact/AboutUs.html" className="link1about">About</a>
                    <a href="./redirects/contact/contact.html" className="link1contact">Contact</a>
                </div>
            </div>
            <div className="icons-top1">
                <div className="login-but btn-1">
                    <span className="material-symbols-outlined" id="account-js">person</span>
                    <p id="idiomaStatus">en</p>
                </div>
                <div className="corazon-but btn-1">
                    <span className="material-symbols-outlined" id="favorite-js">favorite</span>
                </div>
                <div className="shop-bur btn-1">
                    <span className="material-symbols-outlined" id="shopping-js">shopping_cart</span>
                </div>
            </div>
        </section>
    </header>
    );
};

export default Header;