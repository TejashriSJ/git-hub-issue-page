import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Issues from "./Components/Issues";
import Header from "./Components/Header";
import NavButtons from "./Components/NavButtons";

import "./App.css";

class App extends Component {
  state = { pageNumber: 1, isLowerLimit: false, isUpperLimit: false };

  onClickNext = (event) => {
    if (this.state.pageNumber > 26) {
      this.setState({ isUpperLimit: true });
    } else {
      console.log("next");
      this.setState({ pageNumber: this.state.pageNumber + 1 });
    }
    this.setState({ isLowerLimit: false });
  };
  onClickPrevious = (event) => {
    if (this.state.pageNumber > 1) {
      this.setState({ pageNumber: this.state.pageNumber - 1 });
    } else {
      this.setState({ isLowerLimit: true });
    }
    this.setState({
      isUpperLimit: false,
    });
  };
  render() {
    return (
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Issues pageNumber={this.state.pageNumber} />}
          />
        </Routes>
        <NavButtons
          onClickNext={this.onClickNext}
          onClickPrevious={this.onClickPrevious}
          isLowerLimit={this.state.isLowerLimit}
          isUpperLimit={this.state.isUpperLimit}
          pageNumber={this.state.pageNumber}
        />
      </Router>
    );
  }
}

export default App;
