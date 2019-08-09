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
  render() {
    return <h1>hello! {this.mapData()}</h1>;
  }
}
