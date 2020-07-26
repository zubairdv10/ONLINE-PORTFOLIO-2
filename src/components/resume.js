import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Skills from "./skills";
import MyEducation from "./myEducation";
import Company from "./company";

class Resume extends Component {
  render() {
    return (
      <div className="div-Background">
        <Grid>
          <Cell style={{ width: "100%" }} className="cell-Background">
            <h1 className="font2">Education</h1>
            <hr
              style={{ borderTop: "3px solid white", width: "90%" }}
              className="HR"
            />
            <MyEducation
              yearStart={2020}
              yearEnd={2020}
              schoolName="Life Choices Coding Academy"
            />

            <MyEducation
              yearStart={2014}
              yearEnd={2018}
              schoolName="South Peninsula High School"
            />
            <MyEducation
              yearStart={2007}
              yearEnd={2013}
              schoolName="Sunlands Primary School"
            />
          </Cell>
        </Grid>
        <Grid>
          <Cell style={{ width: "100%" }} className="cell-Background">
            <h1 className="font2">Work Experience</h1>
            <hr
              style={{ borderTop: "3px solid white", width: "90%" }}
              className="HR"
            />
            <Company
              company="Beit-Ul-Amaan"
              duties=" My duties included : I had to serve the residents breakfast, lunch and supper.
            I had to interact with them , like playing a game of chess or just getting to know them in
            general.There were sometimes when I had to wash dishes or hang up washing.I went on walks with some of residents around the neighborhood for some exercise"
            />
          </Cell>
        </Grid>
        <Grid>
          <Cell style={{ width: "100%" }} className="cell-Background">
            <h1 className="font2">Skills</h1>
            <hr
              style={{ borderTop: "3px solid white", width: "90%" }}
              className="HR"
            />
            <Skills
              skill={<h2 className="font2">HTML / CSS</h2>}
              progress={80}
              number={80}
            />
            <Skills
              skill={<h2 className="font2">Python</h2>}
              progress={75}
              number={75}
            />
            <Skills
              skill={<h2 className="font2">React</h2>}
              progress={75}
              number={75}
            />
            <Skills
              skill={<h2 className="font2">JavaScript</h2>}
              progress={70}
              number={70}
            />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
