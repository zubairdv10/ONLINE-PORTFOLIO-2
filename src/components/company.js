import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class company extends Component {
  render() {
    return (
      <Grid>
        <Cell col={4} className="font1">
          <p>{this.props.company}</p>
        </Cell>
        <Cell col={8} className="font2">
          <h4 style={{ marginTop: "0px" }}>{this.props.duties}</h4>
        </Cell>
      </Grid>
    );
  }
}

export default company;
