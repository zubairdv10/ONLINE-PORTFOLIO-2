import React, { Component } from "react";
import { Grid, Cell, ProgressBar } from "react-mdl";

class Skills extends Component {
  render() {
    return (
      <Grid>
        <Cell col={12} className="font2">
          <div>
            {this.props.skill}
            {this.props.number}

            <ProgressBar
              style={{ margin: "auto", width: "75%" }}
              progress={this.props.progress}
            />
          </div>
        </Cell>
      </Grid>
    );
  }
}

export default Skills;
