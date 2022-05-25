import React from 'react';
import Header from "../../containers/header/Header";
import Mission from "../../containers/missions/Mission"
import Footer from "../../containers/footer/Footer"
import { missions } from "../../data"
import "./Home.css"
function Home() {
 
  return (
  
    <div className='home'>
      <Header />
      <div id="body">
         {missions.data.map((section) => {
          return (
            <Mission section={section}  key={section.action}/>
          )
        })
        } 
      </div>
      <Footer />
    </div>
  );
}

export default Home;