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
                  "url(https://www.netclipart.com/pp/m/276-2768580_react-native-logo-png.png) center / cover",
              }}
            >
              React Project #1
            </CardTitle>
            <CardText>This is a GitHub Finder React project</CardText>
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
                  "url(https://www.netclipart.com/pp/m/276-2768580_react-native-logo-png.png) center / cover",
              }}
            >
              React Project #2
            </CardTitle>
            <CardText>This is a Contact Keeper React project</CardText>
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
                  "url(https://www.netclipart.com/pp/m/276-2768580_react-native-logo-png.png) center / cover",
              }}
            >
              React Project #3
            </CardTitle>
            <CardText>This is a IT-Logger react project</CardText>
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
                  "url(https://www.netclipart.com/pp/m/276-2768580_react-native-logo-png.png) center / cover",
              }}
            >
              React Project #4
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
