import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardActions,
  CardTitle,
  Button,
  CardText,
} from "react-mdl";
import turbo from "./Capture.PNG"

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  toggleCatergories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          <Card shadow={6} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "280px",
                background:
                  "url(https://repository-images.githubusercontent.com/201285961/937d5100-e144-11e9-9286-699d727d95ad) center / cover",
              }}
            >
              Github Finder
            </CardTitle>
            <CardText>This is a GitHub Finder made with React</CardText>
            <CardActions border>
              <a
                href="https://github.com/zubairdv10/React-project"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>GitHub</Button>
              </a>

              <a
                href="https://githubfinder23456777.netlify.app/"
                // eslint-disable-next-line
                target="_blank"
              >
                <Button colored>Live Demo</Button>
              </a>
            </CardActions>
          </Card>

          <Card shadow={6} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "280px",
                background:
                  "url(https://cdn3.f-cdn.com//files/download/112987293/8f646a.jpg) center / cover",
              }}
            >
              Contact Keeper
            </CardTitle>
            <CardText>This is a Contact Keeper made with React</CardText>
            <CardActions border>
              <a
                href="https://github.com/zubairdv10/Contact-Keeper"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>GitHub</Button>
              </a>
              <a
                href="https://remembrance-sorry-47084.herokuapp.com/register"
                // eslint-disable-next-line
                target="_blank"
              >
                <Button colored>Live Demo</Button>
              </a>
            </CardActions>
          </Card>

          <Card shadow={6} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "280px",
                background:
                  "url(https://camo.githubusercontent.com/90e3174d4ccc00e68eebec577d56a256bf7f8ad6bfccf6236a7148eefa58c82f/68747470733a2f2f692e696d6775722e636f6d2f46484f444249322e676966) center / cover",
              }}
            >
              IT Logger
            </CardTitle>
            <CardText>This is a IT-Logger made with react</CardText>
            <CardActions border>
              <a
                href="https://github.com/zubairdv10/IT-Logger"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>GitHub</Button>
              </a>
            </CardActions>
          </Card>

          <Card shadow={6} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "280px",
                background:
                <img src={turbo} alt="Avatar" className="turbo-chat"/>,
              }}
            >
              Chatting app
            </CardTitle>
            <CardText>This is a Chatting app</CardText>
            <CardActions border>
              <a
                href="https://github.com/zubairdv10/Final-Project"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>GitHub</Button>
              </a>
              <a
                href="https://5f1dc697e0fedb82c336cbc7--hopeful-beaver-144e30.netlify.app/"
                // eslint-disable-next-line
                target="_blank"
              >
                <Button colored>Live Demo</Button>
              </a>
            </CardActions>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          <Card shadow={6} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "280px",
                background:
                  "url(https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png) center / cover",
              }}
            >
              HTML Project
            </CardTitle>
            <CardText>This is a Contact project</CardText>
            <CardActions border>
              <a
                href="https://github.com/zubairdv10/HTML-and-CSS-project"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>GitHub</Button>
              </a>
            </CardActions>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2)
      return (
        <div className="projects-grid">
          <Card shadow={6} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "280px",
                background:
                  "url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png) center / cover",
              }}
            >
              Python Project #1
            </CardTitle>
            <CardText>This is a Lotto project</CardText>
            <CardActions border>
              <a
                href="https://github.com/zubairdv10/PYTHON"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>GitHub</Button>
              </a>
              <a
                href="https://repl.it/talk/share/Lotto-Project/120317"
                // eslint-disable-next-line
                target="_blank"
              >
                <Button colored>Live Demo</Button>
              </a>
            </CardActions>
          </Card>

          <Card shadow={6} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "280px",
                background:
                  "url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png) center / cover",
              }}
            >
              Python Project #2
            </CardTitle>
            <CardText>This is a Login project</CardText>
            <CardActions border>
              <a
                href="https://github.com/zubairdv10/PythonProject2"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>GitHub</Button>
              </a>
            </CardActions>
          </Card>
        </div>
      );
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>HTML/CSS</Tab>
          <Tab>Python</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCatergories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
