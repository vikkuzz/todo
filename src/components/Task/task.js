import React, { Component } from "react";

export default class Task extends Component {
  render() {
    const { description } = this.props;

    return (
      <div className="view">
        <input className="toggle" type="checkbox"></input>
        <label>
          <span className="description">{description}</span>
          <span className="created">created 5 minutes ago</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
      </div>
    );
  }
}
