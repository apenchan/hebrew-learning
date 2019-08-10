import React, { Component } from "react";

export default class Homepage extends Component {
  componentDidMount() {
    this.props.getDataTest();
  }

  mapData = data => {
    let displayChores;
    const { chores } = this.props;
    if (chores && chores.length > 0) {
      displayChores = chores.map(({ chore }) => chore);
    }
    return displayChores + " ";
  };
  onClick = () =>{
  }
  render() {
    return <h1>Click here to start the test!</h1>;
  }
}
