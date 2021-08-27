import React from 'react';
import '../pages/Home';
import Footer from './Footer';
import '../../style/home.css'
export default function Home() {
  return (
    <div className="main-div">
      <h1 className="home-name">David Gauthier</h1>
      <h2 className="home-description">est 2021</h2>
    
      <Footer></Footer>
    </div>
  );
}