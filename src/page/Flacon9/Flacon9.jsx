import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import "./Flacon.css"

function Flacon9() {
  const history = useHistory();

  return (
    <div id='back'>
      <p> the page is under development</p>
      <a onClick={() => {
        history.push('/');
      }}  >&laquo; Previous
      </a>
    </div>
  );
}

export default Flacon9;