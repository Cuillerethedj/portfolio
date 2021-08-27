import { Nav, NavItem, NavLink } from 'reactstrap';
import Footer from './Footer';
import '../../style/portfolio.css';
import meetUp from '../../style/img/meetup.png';
import topTourist from '../../style/img/TopTourist.png';
import fitnessTracker from "../../style/img/fitnessTracker.png"

const Portfolio = (props) => {
  return (
    <div className="portfolio-div">
      <h1 className="portfolio-title">My Work</h1>
      <Nav vertical>
      <img className="meetUp" src={meetUp} alt="website to hangout"/>
      {/* <img className="Meet Up" src="/Users/davidgauthier/Desktop/Class/React-Portfolio/portfolio/src/style/img/meet up.png" alt="Meet Up"></img> */}
        <NavItem>
          <NavLink style={{ textDecoration: "none", color: "#D99E89", fontSize: "50px" }} href="https://github.com/Cuillerethedj/meet-up">Meet Up</NavLink>
        </NavItem>
        <NavItem>
        {/* <img src="https://i.imgur.com/yLoMqef.png" alt="travel website"></img> */}
        <img src={topTourist} alt="website to find a place to go"/>
          <NavLink style={{ textDecoration: "none", color: "#D99E89", fontSize: "50px" }} href="https://github.com/Cuillerethedj/TopTourist">Top Tourist</NavLink>
        </NavItem>
        <NavItem>
        {/* <img src="https://i.imgur.com/kEoToXP.png" alt="fitness tracker"></img> */}
        <img src={fitnessTracker} alt="website to record your exercise"/>
          <NavLink style={{ textDecoration: "none", color: "#D99E89", fontSize: "50px" }} href="https://spoons-fitness-tracker.herokuapp.com/?id=6123b61443ae9f00160695c0">Fitness Tracker</NavLink>
        </NavItem>
        
      </Nav>
    
      
      <Footer></Footer>
    </div>
  );
}

export default Portfolio;
