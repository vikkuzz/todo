import React, { Component } from "react";

export default class NewTaskForm extends Component {
  state = {
    description: "",
  };
  onDescriptionChange = (e) => {
    this.setState({
      description: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAdded(this.state.description);
    this.setState({
      description: "",
    });
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          className="new-todo"
          type="text"
          onChange={this.onDescriptionChange}
          placeholder="What needs to be done?"
          autoFocus
          value={this.state.description}
        ></input>
      </form>
    );
  }
}
