import React, { Component } from "react";
import Issue from "./Issue";

class Issues extends Component {
  render() {
    if (this.props.isLoading) {
      return <h1>Loading ...</h1>;
    } else if (this.props.isError) {
      return <h1>Error in fetching the data</h1>;
    } else {
      return this.props.issues.map((issue) => {
        return <Issue key={issue.id} issue={issue} />;
      });
    }
  }
}
export default Issues;
