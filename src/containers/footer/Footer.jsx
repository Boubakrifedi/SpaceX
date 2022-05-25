import React from "react";
import SocialMedia from "../../components/social media/SocialMedia";
import "./Footer.css"
export default function Footer() {

  const getCurrentYear = () => {
    return new Date().getFullYear();
  }

  return (
    <div className="footer">
      <p> <span >SPACEX</span> © {getCurrentYear()} </p>
      <SocialMedia />
    </div>
  );
}
