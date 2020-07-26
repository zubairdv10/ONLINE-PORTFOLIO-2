import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
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

            <h4 style={{ color: "white" }}>Where my interest came from:</h4>
            <hr style={{ borderTop: "3px solid white", width: "100%" }} />
            <p>
              I've never known how a person makes games or websites and I always
              wanted to find out , I did a tech support course last year but
              that didn't work out , i was interested in what they were doing
              but it just wasn't what I wanted to do , but one day my friend
              came to my house and we spoke and he showed me what his doing at
              university , I was intrigued, he showed the different coding
              languages and did examples of a few , I told him I had to apply to
              a course that does this , but unfortunately no university accepted
              and then I came across Life Choices Academy and I knew this was my
              chance to get a little taste of what coding is and how it works ,
              by my surprise I learnt allot more that I bargained for and I am
              really happy that they accepted me and showed the different
              languages and how to code.
            </p>
          </Cell>

          <Cell className="about-right-col" col={8}>
            <h2 className="font1">Hobbies</h2>
            <Hobbies
              Hobby={
                <img
                  src="https://thumbs.dreamstime.com/b/rugby-ball-icon-dark-background-label-rugby-ball-icon-178556999.jpg"
                  alt=""
                  className="img"
                />
              }
              hobby="Rugby"
            />
            <Hobbies
              Hobby={
                <img
                  src="https://previews.123rf.com/images/pxlprostudio/pxlprostudio1904/pxlprostudio190401940/120469142-gaming-icon-on-background-for-graphic-and-web-design-simple-vector-sign-internet-concept-symbol-for-.jpg"
                  alt=""
                  className="img"
                />
              }
              hobby="Gaming"
            />
            <Hobbies
              Hobby={
                <img
                  src="https://www.pngkit.com/png/detail/233-2331668_get-reading-icon.png"
                  alt=""
                  className="img"
                />
              }
              hobby="Reading"
            />

            <Hobbies
              Hobby={
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT8SNMGUy6MGfbM1K4RR7uSs7rRsMLLC4jUaw&usqp=CAU"
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
