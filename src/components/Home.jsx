import React from "react";
import "../styles/home.scss";
import './About'
import About from "./About";
import HomeProject from "./HomeProject";
import Contact from "./Contact";


class Home extends React.Component {

  state = {  } 
  render() { 
    return (
      <>
      <About />
      <HomeProject />
      <Contact />
      </>
    );
  }
}
 
export default Home;
