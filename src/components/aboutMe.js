import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import MyEducation from "./myEducation";
import Hobbies from "./hobbies";

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
              online portfolio . I would describe myself as a soft and gentle
              person , I'm always willing to help when I'm needed or even
              offering to help , I believe if you set your mind on something you
              will be able to achieve it with hard work and patience. I can be
              shy at first but if you get to know me you won't get me to stop
              talking, I love meeting new people and getting to know them. I'm
              willing to try new things and go to places I've never been , I
              think of it as a kind of adventure
            </p>
            <hr style={{ borderTop: "3px solid white", width: "100%" }} />
          </Cell>
          <Cell className="about-right-col" col={8}>
            <h2>Education</h2>
            <MyEducation
              yearStart={2007}
              yearEnd={2013}
              schoolName="Sunlands Primary School"
            />
            <MyEducation
              yearStart={2014}
              yearEnd={2018}
              schoolName="South Peninsula High School"
            />
            <MyEducation
              yearStart={2020}
              yearEnd={2020}
              schoolName="Life Choices Coding Academy"
            />
            <hr style={{ borderTop: "3px solid white", width: "100%" }} />

            <h2>Hobbies</h2>
            <Hobbies
              Hobby={
                <img
                  src="https://cdn.pixabay.com/photo/2019/01/29/20/41/sport-3963248_1280.jpg"
                  alt=""
                  className="img"
                />
              }
              hobby="Rugby"
            />
            <Hobbies
              Hobby={
                <img
                  src="https://cdn.pixabay.com/photo/2017/05/19/14/09/ps4-2326616_1280.jpg"
                  alt=""
                  className="img"
                />
              }
              hobby="Gaming"
            />
            <Hobbies
              Hobby={
                <img
                  src="https://cdn.pixabay.com/photo/2014/08/23/23/19/library-425730_1280.jpg"
                  alt=""
                  className="img"
                />
              }
              hobby="Reading"
            />

            <Hobbies
              Hobby={
                <img
                  src="https://cdn.pixabay.com/photo/2013/02/09/04/23/swimmers-79592_1280.jpg"
                  alt=""
                  className="img"
                />
              }
              hobby="Swimming"
            />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default AboutMe;
