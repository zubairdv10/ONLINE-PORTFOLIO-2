import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class MyEducation extends Component {
  render() {
    return (
      <Grid>
        <Cell col={4} className="font1">
          <p>
            {this.props.yearStart} - {this.props.yearEnd}
          </p>
        </Cell>
        <Cell col={8} className="font4">
          <h4 style={{ marginTop: "0px" }}>{this.props.schoolName}</h4>
        </Cell>
      </Grid>
    );
  }
}

export default MyEducation;
