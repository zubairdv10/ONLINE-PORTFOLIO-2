import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Hobbies extends Component {
  render() {
    return (
      <Grid>
        <Cell col={4}>
          <p>{this.props.Hobby}</p>
        </Cell>
        <Cell col={8}>
          <h4 style={{ marginTop: "0px" , fontfamily:"uni-sans" }}>{this.props.hobby}</h4>
          <p>{this.props.schoolDisc}</p>
        </Cell>
      </Grid>
    );
  }
}

export default Hobbies;
