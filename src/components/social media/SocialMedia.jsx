import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../data";

export default function SocialMedia() {
  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }
  return (
    <div className="social-media-div">
      <a 
        className="icon-button github"
        onClick={() => openRepoinNewTab(socialMediaLinks.twitter)}
      >
        TWITTER
      </a>
      <a
        className="icon-button linkedin"
        onClick={() => openRepoinNewTab(socialMediaLinks.youtube)}
      >
        YOUTUBE
      </a>
      <a

        className="icon-button google"
        onClick={() => openRepoinNewTab(socialMediaLinks.instagram)}
      >
        INSTAGRAM
      </a>
      <a
        className="icon-button instagram"
        onClick={() => openRepoinNewTab(socialMediaLinks.flickr)}
      >
        FLICKR
      </a>
      <a
        className="icon-button instagram"
        onClick={() => openRepoinNewTab(socialMediaLinks.linkedin)}
      >
        LINKEDIN
      </a>
      <a
        className="icon-button instagram"
        onClick={() => openRepoinNewTab(socialMediaLinks.privacy)}
      >
        PRIVACY POLICY
      </a>
      {/* <a
        className="icon-button instagram"
        onClick={() => openRepoinNewTab(socialMediaLinks.suppliers)}
      >
        SUPPLIERS
      </a> */}
    </div>
  );
}
