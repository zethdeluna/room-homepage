import React from 'react';
import './Navigation.scss';

function Navigation() {
    return (
        <div id="navContainer">
            <ul>
                <li className="room"><a href="/">room</a></li>
                <li><a href="/">home</a></li>
                <li><a href="/">shop</a></li>
                <li><a href="/">about</a></li>
                <li><a href="/">contact</a></li>
            </ul>
        </div>
    )
}

export default Navigation;