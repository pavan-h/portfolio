import React from "react";
import "../styles/home.scss";
import './About'
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";


class Home extends React.Component {

  state = {  } 
  render() { 
    return (
      <>
      <About />
      <Project />
      <Contact />
      </>
    );
  }
}
 
export default Home;
