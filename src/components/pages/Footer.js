import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import '../../style/footer.css';


const Footer = (props) => {
  return (
    <div className="footer">
    <Nav>
    <NavItem>
    <NavLink style={{ textDecoration: "none", color: "#0D0D0D", fontSize: "25px" }} href="https://github.com/Cuillerethedj">Github</NavLink>
  </NavItem>
  <NavItem>
  
    <NavLink style={{ textDecoration: "none", color: "#0D0D0D", fontSize: "25px" }} href="615-512-9631">Phone: (615)512-9631</NavLink>
  </NavItem>
  <NavItem>
  
    <NavLink style={{ textDecoration: "none", color: "#0D0D0D", fontSize: "25px" }} href="https://www.linkedin.com/in/david-gauthier-366b48212/">Linkedin</NavLink>
  </NavItem>
  
</Nav>
</div>
);
}
export default Footer;