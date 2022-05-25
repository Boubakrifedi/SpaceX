import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import "./Header.css"
import Logo from '../../assets/svg/logo/logo';
import Hamburgerbtn from '../../components/hamburgerbtn/Hamburger';

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

  return (
    <div className={`header ${show && 'hidden'}`}>
      <div id="nav-inner">
        <Logo />
        <Hamburgerbtn />
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
        {/* <div id="nav-right">
          <li id="item2">
            <a onClick={() => openRepoinNewTab("https://shop.spacex.com/")}>SHOP</a>
          </li>
        </div> */}
      </div>
    </div>
  );
}
export default Header;