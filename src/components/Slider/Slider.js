import React, { useState, useEffect, useRef } from 'react';
import './Slider.scss';
import iconArrow from '../../images/icon-arrow.svg';
import leftButton from '../../images/icon-angle-left.svg';
import rightButton from '../../images/icon-angle-right.svg';
import hero1 from '../../images/desktop-image-hero-1.jpg';
import hero2 from '../../images/desktop-image-hero-2.jpg';
import hero3 from '../../images/desktop-image-hero-3.jpg';

function Slider() {
    const heroRef = useRef();
    const headerRef = useRef();
    const textRef = useRef();

    const [page, setPage] = useState(1);

    // change states
    const nextPage = (e) => {
        e.preventDefault();
        heroRef.current.classList.add("out");
        headerRef.current.classList.add("out");
        textRef.current.classList.add("out");
        setTimeout(() => {
            page < 3 ? setPage(page + 1) : setPage(1);
        }, 200);
    };

    const previousPage = (e) => {
        e.preventDefault();
        heroRef.current.classList.add("out");
        headerRef.current.classList.add("out");
        textRef.current.classList.add("out");
        setTimeout(() => {
            page > 1 ? setPage(page - 1) : setPage(3);
        }, 200);
    };

    // different headers
    const header1 = "Discover innovative ways to decorate";
    const header2 = "We are available all across the globe";
    const header3 = "Manufactured with the best materials";

    // different texts
    const text1 = "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.";
    const text2 = "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.";
    const text3 = "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.";

    // switch between slider pages
    useEffect(() => {
        heroRef.current.classList.remove("out");
        headerRef.current.classList.remove("out");
        textRef.current.classList.remove("out");
        if (page === 1) {
            heroRef.current.src = hero1;
            headerRef.current.textContent = header1;
            textRef.current.textContent = text1;
        } else if (page === 2) {
            heroRef.current.src = hero2;
            headerRef.current.textContent = header2;
            textRef.current.textContent = text2;
        } else if (page === 3) {
            heroRef.current.src = hero3;
            headerRef.current.textContent = header3;
            textRef.current.textContent = text3;
        }
    });

    return (
        <div id="sliderContainer">
            <img ref={heroRef} src="" alt="hero" className="hero"/>
            <div className="sliderText">
                <h2 ref={headerRef} className="header">{header1}</h2>
                <p ref={textRef} className="text">{text1}</p>
                <div className="btnContainer">
                    <button className="shopNow">shop now<img src={iconArrow} alt="arrow"/></button>
                </div>
                <div className="pageSwitch">
                    <button onClick={previousPage} className="previousPage"><img src={leftButton} alt="left button arrow" /></button>
                    <button onClick={nextPage} className="nextPage"><img src={rightButton} alt="right button arrow" /></button>
                </div> 
            </div>
        </div>
    )
}

export default Slider;