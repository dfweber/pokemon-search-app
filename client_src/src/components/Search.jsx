import React from "react";

export default class Search extends React.Component {
  render() {
    return (
      <div className="input-field">
        {/* <label htmlFor="email">Search</label> */}
        <input
          autofocus="true"
          placeholder="Search"
          type="text"
          onChange={this.props.onChangeValue}
        />
      </div>
    );
  }
}
