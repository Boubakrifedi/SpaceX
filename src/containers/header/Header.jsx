import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import "./Header.css"
import Logo from '../../assets/svg/logo/logo';
import useToggle from "../../assets/hooks/useToggle.ts";

const Header = () => {
  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }
  const [show, setShow] = useState(false)
  const controlNavbar = () => {
    if (window.scrollY > 175) {
      setShow(true)
    } else {
      setShow(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', controlNavbar)
    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }
  }, [])
  const [isitemadded, setIsItemAdded] = useToggle();

  return (
    <div className={`header ${show && 'hidden'}`}>
      <div id="nav-inner">
        <Logo />
        <div className="hamburger-menu">
            <input id="menu__toggle" type="checkbox" />
            <label className="menu__btn" htmlFor="menu__toggle" onClick={setIsItemAdded}>
                <span></span>
            </label>
            <ul className="menu__box">
                <li><a id="item" className="menu__item" href="/vehicles/falcon-9">FLACON 9</a></li>
                <li><a id="item" className="menu__item" href="/vehicles/falcon-heavy/">FLACON HEAVY</a></li>
                <li><a id="item" className="menu__item" href="/vehicles/dragon/">DRAGON</a></li>
                <li><a id="item" className="menu__item" href="/vehicles/starship/">STARSHIP</a></li>
                <li><a id="item" className="menu__item" href="/human-spaceflight/">HUMAN SPACELIGHT</a></li>
                <li><a id="item" className="menu__item" href="/rideshare/">RIDESHARE</a></li>
                <li><a id="item" className="menu__item" onClick={() => openRepoinNewTab("https://www.starlink.com/")}>STARLINK</a></li>
                <li><a className="menu__item" href="/mission/">MISSION</a></li>
                <li><a className="menu__item" href="/launches/">LAUNCHES</a></li>
                <li><a className="menu__item" href="/careers/">CAREERS</a></li>
                <li><a className="menu__item" href="/updates/">UPDATES</a></li>
                <li><a className={`menu__item ${isitemadded && 'hidden'}`} onClick={() => openRepoinNewTab("https://shop.spacex.com/")}>SHOP</a></li>
            </ul>
        </div>
        <div id="navigation" >
          <li id="item2">
            < Link to="/vehicles/falcon-9">FLACON 9</Link>
          </li>
          <li id="item2">
            <Link to="/vehicles/falcon-heavy/">FLACON HEAVY</Link>
          </li>
          <li id="item2">
            <Link to="/vehicles/dragon/">DRAGON</Link>
          </li>
          <li id="item2">
            <Link to="/vehicles/starship/">STARSHIP</Link>
          </li>
          <li id="item2">
            <Link to="/human-spaceflight/">HUMAN SPACELIGHT</Link>
          </li>
          <li id="item2">
            <Link to="/rideshare/">RIDESHARE</Link>
          </li>
          <li id="item2">
            <a onClick={() => openRepoinNewTab("https://www.starlink.com/")}>STARLINK</a>
          </li>
        </div>
         <div className={`nav-right ${!isitemadded && 'hidden' }`} >
          <li id="item2">
            <a onClick={() => openRepoinNewTab("https://shop.spacex.com/")}>SHOP</a>
          </li>
        </div> 
      </div>
    </div>
  );
}
export default Header;