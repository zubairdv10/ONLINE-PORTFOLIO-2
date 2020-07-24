import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Picture from "./pic.png";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src={Picture} alt="Avatar" className="avatar-img" />
            <div className="banner-text">
              <h1>Zubair De vries</h1>

              <hr />

              <p>HTML/CSS || React || Python || JavaScript</p>
              <div className="social-links">
                <a
                  href="https://github.com/zubairdv10"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
