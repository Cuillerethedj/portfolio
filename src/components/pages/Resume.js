import React from 'react';
import '../../style/resume.css';
import Footer from './Footer';
import { Nav, NavItem, NavLink } from 'reactstrap';


export default function Resume() {
  return (
    <div className="resume">
      <h2 className="professional">Conclusion</h2>
      <p className="summary"> 
        Im a self motavated human with a passion for coding. I believe with my U.S.Army training,and 20+ years as a Executive Chef have the ability to to solve problems and adapt to change very well.  
      </p>
      <Nav>
    <NavItem>
    <NavLink style={{ textDecoration: "none", color: "#0D0D0D", fontSize: "25px", textAlign:"center", marginLeft: "500px", marginBottom:"200px"}} href="https://docs.google.com/document/d/1UIVBr0OgUUVkTb9fc3jhkuSvfbc1D1sn8mlFUa3AlRk/edit?usp=sharing"> Resume here</NavLink>
  </NavItem>
  </Nav>
      
      
      <Footer></Footer>
    </div>
  );
}