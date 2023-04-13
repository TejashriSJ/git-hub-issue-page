import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Issues from "./Components/Issues";
import Header from "./Components/Header";

import "./App.css";

class App extends Component {
  state = { Issues: [], isLoading: true, isError: false };
  componentDidMount() {
    fetch("https://api.github.com/repos/rails/rails/issues")
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
    return (
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Issues
                issues={this.state.Issues}
                isLoading={this.state.isLoading}
                isError={this.state.isError}
              />
            }
          />
        </Routes>
      </Router>
    );
  }
}

export default App;
