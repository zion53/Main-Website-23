import "./Footer.css";
import HailAlcher from "./HailAlcher";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { ReactComponent as Insta } from "./Images/insta.svg";
import { ReactComponent as Facebook } from "./Images/facebook.svg";
import { ReactComponent as Youtube } from "./Images/utube.svg";
import { ReactComponent as Twitter } from "./Images/twitter.svg";
import { ReactComponent as Insta2 } from "./Images/insta2.svg";
import { ReactComponent as Facebook2 } from "./Images/facebook2.svg";
import { ReactComponent as Youtube2 } from "./Images/utube2.svg";
import { ReactComponent as Twitter2 } from "./Images/twitter2.svg";

function Footer() {
  return (
    <div className="footer_desk">
      <div className="logo_mob">
        <HailAlcher />
      </div>
      <div>
        <div className="footer_main">
          <div className="options">
            <ul type="none">
              <li>
                <NavLink to="/Events">EVENTS</NavLink>
              </li>
              <li>
                <NavLink to="/Merch">MERCH</NavLink>
              </li>
              <li>
                <NavLink to="/Campaigns">CAMPAIGNS</NavLink>
              </li>
              <li>
                <NavLink to="/Teams">TEAMS</NavLink>
              </li>
              <li>
                <NavLink to="/MUN">MUN</NavLink>
              </li>
              <li>
                <NavLink to="/Sponsors">SPONSORS</NavLink>
              </li>
              <li>
                <NavLink to="/Contests">CONTESTS</NavLink>
              </li>
            </ul>
          </div>
          <div className="logo">
            <HailAlcher />
          </div>
          <div className="details_main">
            <div className="details">
              <div className="contact">
                <div className="shareka">
                  <b>Siddant Singh</b>
                  PR Head<br></br>
                  +91 9310859978
                </div>
                <br />
                <div className="abhi">
                  <b>Danda Akshara</b>
                  PR Head<br></br>
                  +91 9908991939
                </div>
              </div>
            </div>
            <div className="socials_mob">
              <a
                className="insta"
                href="https://www.instagram.com/alcheringaiitg/"
              >
                <Insta2 />
              </a>
              <a
                className="face"
                href="https://www.facebook.com/alcheringaiitg"
              >
                <Facebook2 />
              </a>
              <a className="tweet" href="https://twitter.com/alcheringaiitg">
                <Twitter2 />
              </a>
              <a
                className="youtube"
                href="https://www.youtube.com/@alcheringaIITG"
              >
                <Youtube2 />
              </a>
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <div>
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <div className="socialIcon">
            <div className="socials_desk">
              <a
                className="insta"
                href="https://www.instagram.com/alcheringaiitg/"
              >
                <Insta />
              </a>
              <a
                className="face"
                href="https://www.facebook.com/alcheringaiitg"
              >
                <Facebook />
              </a>
              <a className="tweet" href="https://twitter.com/alcheringaiitg">
                <Twitter />
              </a>
              <a
                className="youtube"
                href="https://www.youtube.com/@alcheringaIITG"
              >
                <Youtube />
              </a>
            </div>
            <div className="inqueries">
              For Business Enqueries:{" "}
              <span style={{ fontWeight: 900 }}>alcheringa@iitg.ac.in</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
