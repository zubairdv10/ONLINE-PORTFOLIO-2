import React from "react";
import "./App.css";
import { Layout, Navigation, Drawer, Content, Header } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header className="header-color" title="My Portfolio" scroll>
          <Navigation>
            <Link to="/resume">My Resume</Link>
            <Link to="/aboutme">About Me</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact Info</Link>
          </Navigation>
        </Header>

        <Drawer title="Portfolio">
          <Navigation>
            <Link to="/landingpage">Zubair</Link>
            <Link to="/resume">My Resume</Link>
            <Link to="/aboutme">About Me</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact Info</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
