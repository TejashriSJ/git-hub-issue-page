import { faDisplay } from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <h1 className="header-heading">Git Hub Errors Page</h1>
        <nav>
          <ul className="issue-header">
            <li>Author</li>
            <li>Label</li>
            <li>Projects</li>
            <li>Milestones</li>
            <li>Assigne</li>
            <li>sort</li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default Header;
