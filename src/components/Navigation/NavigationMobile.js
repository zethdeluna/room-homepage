import React, { useRef, useEffect } from 'react';
import './NavigationMobile.scss';
import hamburgerIcon from '../../images/icon-hamburger.svg';
import closeIcon from '../../images/icon-close.svg';

function NavigationMobile() {
    const menuRef = useRef();
    const darkenRef = useRef();

    const openMenu = (e) => {
        e.preventDefault();
        menuRef.current.classList.add("active");

        darkenRef.current.style.height = "200vh";
        setTimeout(() => {
            // darken background (let height )
            darkenRef.current.classList.add("active");
        }, 50);
    };

    const closeMenu = (e) => {
        e.preventDefault();
        menuRef.current.classList.remove("active");
        // remove darkened background
        darkenRef.current.classList.remove("active");
        setTimeout(() => {
            darkenRef.current.style.height = "0";
        }, 400);
    };

    // close menu when user scrolls
    useEffect(() => {
        window.onscroll = (e) => {
            closeMenu(e);
        };
    });

    return  (
        <div id="navMobile">
            <button onClick={openMenu} className="hamburger">
                <img src={hamburgerIcon} alt="menu button"/>
            </button>
            <div ref={menuRef} className="menu">
                <ul>
                    <li className="close">
                        <button onClick={closeMenu}>
                            <img src={closeIcon} alt="close button"/>
                        </button>
                    </li>
                    <li><a href="/">home</a></li>
                    <li><a href="/">shop</a></li>
                    <li><a href="/">about</a></li>
                    <li><a href="/">contact</a></li>
                </ul>
            </div>
            <div ref={darkenRef} className="darkenPage"></div>
        </div>
    )
}

export default NavigationMobile;