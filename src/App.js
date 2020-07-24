import React from "react";
import "./App.css";
import { Layout, Navigation, Drawer, Content, Header } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header
          className="header-color"
          title={
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              My Portfolio
            </Link>
          }
          scroll
        >
          <Navigation>
            <Link to="/aboutme">About Me</Link>
            <Link to="/resume">My Resume</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/Testamonials2">Testamonials</Link>
            <Link to="/contact">Contact Info</Link>
          </Navigation>
        </Header>

        <Drawer
          title={
            <Link style={{ color: "black" }} to="/">
              Home
            </Link>
          }
        >
          <Navigation>
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
