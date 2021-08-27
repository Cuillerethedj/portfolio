        import React from 'react';
        import Footer from './Footer';
        import '../../style/about.css';
        import davesmiling from '../../style/img/davesmiling.jpg';
        export default function About() {
        return (
        <div className="about-page">
         {/* <img className="about-img" src="/Users/davidgauthier/Desktop/Class/portfolio/portfolio/src/style/img/38B3FAEF-3D95-4EF6-8873-0C11630D643E.jpg"  alt="Happy Dave"></img> */}
        <img src={davesmiling} alt="Happy Dave"/>
        <h1 className="about-title">About</h1>
        <p className="description">
        Hi
        I'm a retired chef of 20+ years and decided to put my knives up. At that point my friend told me his story about coding and that seemed to spark something within me. So i enrolled into the UT Austin Full Stack program learning: HTML5, CSS3, JavaScript, jQuery, Bootstrap, Express.js, React.js, Node.js, Database Theory, MongoDB, MySQL, Command Line, and Git.
        I like working togetheras a team to tackle complex projects and get hands-on programming training through experiential learning opportunities with employers.
        Taking my new skills to the next level by building a portfolio of web applications, coding mobile apps, and challenging projects that showcase my knowledge.</p>
        <Footer></Footer>
        </div>
        );
        }
