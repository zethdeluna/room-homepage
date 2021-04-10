import React from 'react';
import './Homepage.scss';
import Navigation from '../Navigation/Navigation.js';
import Slider from '../Slider/Slider.js';
import About from '../About/About.js';

function Homepage() {
    return (
        <div id="homepageContainer">
            <Navigation/>
            <Slider/>
            <About/>
        </div>
    )
}

export default Homepage;