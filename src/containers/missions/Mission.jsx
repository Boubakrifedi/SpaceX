import React from "react";
import "./Mission.css";
import Button from "../../components/button/Button";
import { Fade } from "react-reveal";
import Scrollme from "../../assets/svg/scrollme/scrollme";


export default function Mission(props) {
const section =props.section
const background = section.backgroundimg

  return (

    <div className="mission" style={{ backgroundImage: `url(${background})` }}  >
      <Fade bottom duration={1500}>
        <div className="section">
          <h4> {section.title}</h4>
          <h2> {section.action}</h2>
          <Button text={section.buttontext} href={section.buttonhref} />
        </div>
      </Fade>
      <Scrollme />
    </div>
  );
}