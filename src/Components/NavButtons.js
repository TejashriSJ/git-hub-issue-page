import React, { Component } from "react";

class NavButtons extends Component {
  render() {
    return (
      <div className="nav-buttons">
        <button
          style={this.getStyleForPrevious()}
          onClick={this.props.onClickPrevious}
        >
          Previous
        </button>
        <p>Page: {this.props.pageNumber}/27</p>
        <button style={this.getStyleForNext()} onClick={this.props.onClickNext}>
          Next
        </button>
      </div>
    );
  }
  getStyleForPrevious = () => {
    if (this.props.isLowerLimit) {
      return {
        pointerEvents: "none",
        cursor: "none",
        backgroundColor: "rgb(153, 149, 149)",
      };
    }
  };
  getStyleForNext = () => {
    if (this.props.isUpperLimit) {
      return {
        pointerEvents: "none",
        cursor: "none",
        backgroundColor: "rgb(153, 149, 149)",
      };
    }
  };
}
export default NavButtons;
