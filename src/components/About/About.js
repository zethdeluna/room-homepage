import React from 'react';
import './About.scss';
import aboutDark from '../../images/image-about-dark.jpg';
import aboutLight from '../../images/image-about-light.jpg';

function About() {
    return (
        <div id="aboutContainer">
            <img className="darkImg" src={aboutDark} alt="dark furniture"/>
            <div className="aboutText">
                <h3 className="header">About our furniture</h3>
                <p className="text">
                    Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.
                </p>
            </div>
            <img className="lightImg" src={aboutLight} alt="light furniture"/>
        </div>
    )
}

export default About;