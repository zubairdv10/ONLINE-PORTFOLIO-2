import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Testamonials extends Component {
  render() {
    return (
      <Grid>
        <Cell col={4}>
          <p style={{ fontSize: "30px" }}>{this.props.co_worker}</p>
        </Cell>
        <Cell col={8}>
          <h4 style={{ marginTop: "0px" }}>{this.props.statement}</h4>
        </Cell>
      </Grid>
    );
  }
}

export default Testamonials;
