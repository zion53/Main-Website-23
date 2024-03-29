import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import "./Nav.css";
import Book from "./Book";
import Logo from "./Logo";
import Cross from "./Cross";
import Hamburger from "./Hamburger";

function Nav({ icon, pic }) {
  const [active, setActive] = useState(false);
  const [activeMob, setActiveMob] = useState(false);

  const handleClick = (e) => {
    setActive(!active);
    setActiveMob(!activeMob);
    const mobile = document.getElementById("mobile");
    mobile.style.backgroundColor = "#1A1A1A";
    mobile.style.height = "100vh";
    const alcherlogo = document.getElementByClassName("AlcherLogo");
    alcherlogo.style.zIndex = "-1";
  };
  const handleClickCross = (e) => {
    setActive(!active);
    setActiveMob(!activeMob);
    const mobile = document.getElementById("mobile");
    mobile.style.background = "transparent";
    mobile.style.height = "10vh";
    const alcherlogo = document.getElementByClassName("AlcherLogo");
    alcherlogo.style.display = "block";
  };

  return (
    <>
      <div className="main">
        <header className="navHeader gradient">
          {!icon && (
            <div>
              <Link to="/">
                <Logo />
              </Link>
            </div>
          )}

          <nav className="NavigationBar">
            <ul className="NavigationList">
              <li className="Events">
                <NavLink to="/Events">
                  <b>EVENTS</b>
                </NavLink>
              </li>
              <li className="Merch">
                <NavLink to="/Merch">
                  <b>MERCH</b>
                </NavLink>
              </li>
              <li className="Campaigns">
                <NavLink to="/Campaigns">
                  <b>CAMPAIGNS</b>
                </NavLink>
              </li>
              <li className="Teams">
                <NavLink to="/Teams">
                  <b>TEAMS</b>
                </NavLink>
              </li>

              <li className="Sponsors">
                <NavLink to="/Sponsors">
                  <b>SPONSORS</b>
                </NavLink>
              </li>
              <li className="Contests">
                <NavLink to="/Contests">
                  <b>CONTESTS</b>
                </NavLink>
              </li>
            </ul>
          </nav>
          {!icon && (
            <Link className="image" to="/BookTickets">
              <Book />
            </Link>
          )}
        </header>
      </div>
      <div className="mobile" id="mobile">
        <div className="navmob">
          <div>
            <Link to="/">
              <Logo pic={pic} />
            </Link>
          </div>
          {!active ? (
            <div
              onClick={handleClick}
              style={{ cursor: "pointer", marginRight: "5%", zIndex: "2" }}
            >
              <Hamburger />
            </div>
          ) : (
            <div
              onClick={handleClickCross}
              style={{ cursor: "pointer", marginRight: "5%", zIndex: "2" }}
            >
              <Cross />
            </div>
          )}
        </div>
        {activeMob ? (
          <div className="extendednavmob" style={{ background: "#1a1a1a" }}>
            <ul className="mobileList">
              <li className="Events">
                <NavLink to="/Events" style={{ textDecoration: "#0B0B0B" }}>
                  <div className="hoverdivmob">
                    <b className="listtext listtext1 events">EVENTS</b>
                  </div>
                </NavLink>
              </li>
              <li className="Merch">
                <NavLink to="/Merch" style={{ textDecoration: "#0B0B0B" }}>
                  <div className="hoverdivmob merch">
                    <b className="listtext listtext2">MERCH</b>
                  </div>
                </NavLink>
              </li>
              <li className="Campaigns">
                <NavLink to="/Campaigns" style={{ textDecoration: "#0B0B0B" }}>
                  <div className="hoverdivmob campaigns">
                    <b className="listtext listtext3">CAMPAIGNS</b>
                  </div>
                </NavLink>
              </li>
              <li className="Teams">
                <NavLink to="/Teams" style={{ textDecoration: "#0B0B0B" }}>
                  <div className="hoverdivmob teams">
                    <b className="listtext listtext4">TEAMS</b>
                  </div>
                </NavLink>
              </li>
              {/* <li>
                <NavLink to="/Teams">
                  <b>TEAMS</b>
                </NavLink>
              </li> */}

              {/* <NavLink to="/Sponsors">
                  <b>SPONSORS</b>
                </NavLink> */}
              <li className="Contests">
                <NavLink to="/Contests" style={{ textDecoration: "#0B0B0B" }}>
                  <div className="hoverdivmob contests">
                    <b className="listtext listtext5">CONTESTS</b>
                  </div>
                </NavLink>
              </li>
              <li className="Sponsors">
                <NavLink to="/Sponsors" style={{ textDecoration: "#0B0B0B" }}>
                  <div className="hoverdivmob sponsors">
                    <b className="listtext listtext6">SPONSORS</b>
                  </div>
                </NavLink>
              </li>
            </ul>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default Nav;
