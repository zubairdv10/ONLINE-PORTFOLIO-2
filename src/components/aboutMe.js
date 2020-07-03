import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class AboutMe extends Component {
  render() {
    return (
      <div className="about-background">
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://cdn.pixabay.com/photo/2017/08/25/13/36/code-geek-2680204_1280.png"
                alt="avatar"
                style={{ height: "230px" }}
              />
            </div>

            <h2 style={{ paddingTop: "2em" }}>Zubair De vries</h2>
            <h4 style={{ color: "white" }}>Jr Web Developer</h4>
            <hr style={{ borderTop: "3px solid white", width: "100%" }} />
            <p>
              Hi there, my name is Zubair I am 19 years old and this is my
              online portfolio
            </p>
          </Cell>
          <Cell className="about-right-col" col={8}>
            <h2>Education</h2>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default AboutMe;
