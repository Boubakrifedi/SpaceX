import React from "react";
import "./Hamburger.css";


function Hamburgerbtn() {
    function openRepoinNewTab(url) {
        var win = window.open(url, "_blank");
        win.focus();
    }
    return (
        <div className="hamburger-menu">
            <input id="menu__toggle" type="checkbox" />
            <label className="menu__btn" htmlFor="menu__toggle">
                <span></span>
            </label>
            <ul className="menu__box">
                <li><a id="item" className="menu__item" href="/vehicles/falcon-9">FLACON 9</a></li>
                <li><a id="item" className="menu__item" href="/vehicles/falcon-heavy/">FLACON HEAVY</a></li>
                <li><a id="item" className="menu__item" href="/vehicles/dragon/">DRAGON</a></li>
                <li><a id="item" className="menu__item" href="/vehicles/starship/">STARSHIP</a></li>
                <li><a id="item" className="menu__item" href="/human-spaceflight/">HUMAN SPACELIGHT</a></li>
                <li><a id="item" className="menu__item" href="/rideshare/">RIDESHARE</a></li>
                <li><a id="item" className="menu__item" href="https://www.starlink.com/">STARLINK</a></li>
                <li><a className="menu__item" href="/mission/">MISSION</a></li>
                <li><a className="menu__item" href="/launches/">LAUNCHES</a></li>
                <li><a className="menu__item" href="/careers/">CAREERS</a></li>
                <li><a className="menu__item" href="/updates/">UPDATES</a></li>
                <li><a className="menu__item" onClick={() => openRepoinNewTab("https://shop.spacex.com/")}>SHOP</a></li>
            </ul>
        </div>
    )
}
export default Hamburgerbtn