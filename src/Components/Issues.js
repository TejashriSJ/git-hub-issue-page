import React, { Component } from "react";
import Issue from "./Issue";


class Issues extends Component {
  state = { Issues: [] };
  componentDidMount() {
    fetch("https://api.github.com/repos/rails/rails/issues")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ Issues: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return this.state.Issues.map((issue) => {
      return <Issue key={Issue.id} issue={issue} />;
    });
  }
}
export default Issues;
