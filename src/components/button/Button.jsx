import React from "react";
import "./Button.css";
import { useHistory } from "react-router-dom";


function Button(props) {
  const history = useHistory();
  return (
    <button
      className="button"
      onClick={() => {
        history.push(props.href);
      }}>
      {props.text}
    </button>
  );
}
export default Button 