import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./landingpage";
import AboutMe from "./aboutMe";
import Contact from "./contact";
import Resume from "./resume";
import Projects from "./projects";
import Testamonials2 from "./Testamonials2";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
    <Route path="/Testamonials2" component={Testamonials2} />
  </Switch>
);

export default Main;
