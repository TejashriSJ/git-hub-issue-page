import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Issues from "./Components/Issues";
import Header from "./Components/Header";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" Component={Issues} />
        </Routes>
      </Router>
    );
  }
}

export default App;
