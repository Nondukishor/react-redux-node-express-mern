import React from 'react';
import  './Hero.scss';
import profile from './profile-pic.jpg'
function Hero() {
    return( 
    <div className="hero-wrapper">
        <div className="profile-img">
           <img src={profile} alt="profile"/>
        </div>

        <div className="profile-name">
            <h2>Nipu Chakraborty</h2>
        </div>

        <div className="hero-text">
            <h1>Fullstack Web Developer</h1>
        </div>
        <div className="about-me">
            <p>
            Honest -Creative -Pro-active these 3 words I describe myself. I am a LAMP & WAMP Full Stack web
            developer. My skills include Nodjs PHP, Java, C, C++, MySQL,ProssgreSQL,MongoDB, HTML, CSS, Bootstrap
            and graphics design. I also have experience with well graphics design and PHP and JavaScript popular
            framework (Laravel, lumen ,cakephp ,Reactjs,expressjs, adonisjs )’ knowledge. Currently, I am working
            with Node & Reactjs done some project with those frameworks in present respected company. I love
            coding & I want to make things that make a difference.
            </p>
        </div>
    </div>
    )
}

export default Hero;