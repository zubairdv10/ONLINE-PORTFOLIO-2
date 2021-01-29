import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Testamonials from "./testamonials";

class Testamonials2 extends Component {
  render() {
    return (
      <div className="div-Background">
        <Grid>
          <Cell style={{ width: "100%" }} className="cell-Background">
            <h1 className="font1">Testimonials</h1>
            <hr
              style={{ borderTop: "3px solid white", width: "90%" }}
              className="HR"
            />
            <Testamonials
              co_worker="Godwin Dzvapatsva (Head of Curriculum and Learning) -"
              statement="Zubair  has a gentle personality and has shown great interest in programming as displayed by his steady progress. He has good determination to succeed."
            />
            <hr
              style={{ borderTop: "3px solid white", width: "90%" }}
              className="HR"
            />
            <Testamonials
              co_worker="Joshua Davids (Peer and Frontend Developer) -"
              statement="Zubair is a hardworking individual, who strives to achieve his goals, he shown commitment toward his projects. With critical thinking and a keen eye for design he has shown great improvement under pressure and the ability to work in a group and alone"
            />
            <hr
              style={{ borderTop: "3px solid white", width: "90%" }}
              className="HR"
            />
            <Testamonials
              co_worker="Jaabir Esau -"
              statement="To whom it may concern it's a great privilege to work with Zubair. He is one aspiring man , Zubair has exponential talent in his work and ethics. He has brought the best out of his team members.I truly would recommend Zubair to any working environment."
            />
            <hr
              style={{ borderTop: "3px solid white", width: "90%" }}
              className="HR"
            />
            <Testamonials
              co_worker="Imtiyaaz Temoore -"
              statement="Zubair De vries is one of the most hardworking learners at lifechoice academy, he always make sure that he does his best and nothing but best"
            />
            <hr
              style={{ borderTop: "3px solid white", width: "90%" }}
              className="HR"
            />
            <Testamonials
              co_worker="Sajjaad Francis -"
              statement="You're a hard working individual who excels at everything you do, I am sure you'll be a valuable asset to any and every company out there"
            />
            <hr
              style={{ borderTop: "3px solid white", width: "90%" }}
              className="HR"
            />
            <Testamonials
              co_worker="Usama Gierdien -"
              statement="Zubair, one of the most talented individuals I've ever encountered. With extreme determination , he make sure that he completes his task and that it's 100% proper. Very hardworking as well , very often working through the night as I have witnessed this for myself."
            />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Testamonials2;
