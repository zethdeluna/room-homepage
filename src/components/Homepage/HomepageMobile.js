import React from 'react';
import './HomepageMobile.scss';
import AboutMobile from '../About/AboutMobile.js';
import NavigationMobile from '../Navigation/NavigationMobile.js';
import SliderMobile from '../Slider/SliderMobile';

function HomepageMobile() {
    return (
        <div id="mobileContainer">
            <NavigationMobile/>
            <SliderMobile/>
            <AboutMobile/>
        </div>
    )
}

export default HomepageMobile;