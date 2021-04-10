import React from 'react';
import './AboutMobile.scss';
import aboutDark from '../../images/image-about-dark.jpg';
import aboutLight from '../../images/image-about-light.jpg';

function AboutMobile() {
    return (
        <div id="aboutMobileContainer">
            <img src={aboutDark} alt="dark furniture" className="darkImg"/>
            <div className="aboutTextMobile">
                <h3 className="header">About our furniture</h3>
                <p className="text">
                    Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.
                </p>
            </div>
            <img src={aboutLight} alt="light furniture" className="lightImg"/>
        </div>
    )
}

export default AboutMobile;