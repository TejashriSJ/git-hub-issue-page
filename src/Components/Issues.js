import React, { Component } from "react";
import Issue from "./Issue";

class Issues extends Component {
  state = { Issues: [], isLoading: true, isError: false };
  componentDidMount() {
    fetch(
      `https://api.github.com/repos/rails/rails/issues?page=${this.props.pageNumber}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ Issues: data, isLoading: false });
      })
      .catch((err) => {
        this.setState({ isLoading: false, isError: true });
        console.log(err);
      });
  }
  componentDidUpdate() {
    fetch(
      `https://api.github.com/repos/rails/rails/issues?page=${this.props.pageNumber}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ Issues: data, isLoading: false });
      })
      .catch((err) => {
        this.setState({ isLoading: false, isError: true });
        console.log(err);
      });
  }

  render() {
    if (this.state.isLoading) {
      return <h1>Loading ...</h1>;
    } else if (this.state.isError) {
      return <h1>Error in fetching the data</h1>;
    } else {
      return this.state.Issues.map((issue) => {
        return <Issue key={issue.id} issue={issue} />;
      });
    }
  }
}
export default Issues;
