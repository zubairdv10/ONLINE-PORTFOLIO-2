import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Skills from "./skills";

class Resume extends Component {
  render() {
    return (
      <div className="div-Background">
        <Grid>
          <Cell style={{ width: "100%" }} className="cell-Background">
            <h1>Skills</h1>
            <hr
              style={{ borderTop: "3px solid black", width: "90%" }}
              className="HR"
            />
            <Skills skill={<h2>HTML/CSS</h2>} progress={80} />
            <Skills skill={<h3>Python</h3>} progress={75} />
            <Skills skill={<h4>React</h4>} progress={75} />
            <Skills skill={<h5>JavaScript</h5>} progress={70} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
