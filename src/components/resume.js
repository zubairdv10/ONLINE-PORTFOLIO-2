import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Skills from "./skills";
import Testmonials from "./testamonials";

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
            <Skills skill={<h2>HTML / CSS</h2>} progress={80} number={80} />
            <Skills skill={<h3>Python</h3>} progress={75} number={75} />
            <Skills skill={<h3>React</h3>} progress={75} number={75} />
            <Skills skill={<h5>JavaScript</h5>} progress={70} number={70} />
          </Cell>
        </Grid>
        <Grid>
          <Cell style={{ width: "100%" }} className="cell-Background">
            <h1>Testamonials</h1>
            <hr
              style={{ borderTop: "3px solid black", width: "90%" }}
              className="HR"
            />
            <Testmonials
              co_worker="Jaabir Esau -"
              statement="To whom it may concern 


Its a great privilege to work with Zubair. He is one aspiring man

Zubair has exponential talent in his work and ethics. He has brought the best out of his team members.

I truly would recommend Zubair to any working environment."
            />
            <Testmonials
              co_worker="Imtiyaaz Temoore -"
              statement="Zubair De vries is one of the most hardworking learners at lifechoice academy, he always make sure that he does his best and nothing but best"
            />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
