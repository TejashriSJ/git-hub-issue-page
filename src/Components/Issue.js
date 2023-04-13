import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import "./issue.css";

class Issue extends Component {
  commentsStyle = () => {
    if (this.props.issue.comments > 0) {
      return { display: "flex" };
    } else {
      return { display: "none" };
    }
  };
  issueOpenStyle = () => {
    if (this.props.issue.state === "open") {
      return { display: "block" };
    } else {
      console.log("close");
      return { display: "none" };
    }
  };
  render() {
    return (
      <div className="Issue-details">
        <div className="title-line">
          <div style={this.issueOpenStyle()}>
            <FontAwesomeIcon
              icon={faCircleExclamation}
              size="sm"
              style={{ color: "#20511f" }}
            />
          </div>

          <p className="title">{this.props.issue.title}</p>
          <div className="comment" style={this.commentsStyle()}>
            <FontAwesomeIcon
              icon={faMessage}
              size="sm"
              style={{ color: "#868c98" }}
            />
            <p className="comment-count">{this.props.issue.comments}</p>
          </div>
        </div>
        <div className="issue-details-line">
          <p>
            #{this.props.issue.number} Opended on{" "}
            {this.props.issue.created_at.slice(0, 10)} Created By{" "}
            {this.props.issue.user.login}
          </p>
        </div>
      </div>
    );
  }
}

export default Issue;
