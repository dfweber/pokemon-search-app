import React from "react";

export default class Cards extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <span className="card-title">{this.props.name}</span>
          <ul>{this.props.types}</ul>
        </div>
      </div>
    );
  }
}
