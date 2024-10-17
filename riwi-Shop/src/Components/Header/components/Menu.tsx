import React, { useEffect, useState } from 'react';

interface MenuProps {
    isActive: boolean;
}

const Menu: React.FC<MenuProps> = ({ isActive }) => {



        
    const [menuOpen, setMenuOpen] = useState(false);


    useEffect(() => {
        setMenuOpen(isActive);
    }, [isActive]);

    return (
        <div id="menu" className={menuOpen ? 'ActiveMenue' : 'disactiveMenue'} >
            <ul>
                <li><a href="./LandingPage.html">Home</a></li>
                <li><a href="./redirects/shopRiwi/shop.html">Shop</a></li>
                <li><a href="./redirects/contact/AboutUs.html">About</a></li>
                <li><a href="./redirects/contact/contact.html">Contact</a></li>
            </ul>
        </div>
    );
};

export default Menu;