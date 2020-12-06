import React, { Component } from "react";

export default class NewTaskForm extends Component {
  state = {
    description: "",
    min: 0,
    sec: 0,
  };
  onDescriptionChange = (e) => {
    this.setState({
      description: e.target.value,
    });
  };
  onMinChange = (e) => {
    this.setState({
      min: e.target.value,
    });
  };
  onSecChange = (e) => {
    this.setState({
      sec: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAdded(this.state.description, this.state.min, this.state.sec);
    this.setState({
      description: "",
      min: "",
      sec: "",
    });
  };
  render() {
    return (
      <>
        <div style={{ display: "flex" }}>
          <form style={{ width: "70%" }}>
            <input
              style={{ width: "100%" }}
              className="new-todo"
              type="text"
              onChange={this.onDescriptionChange}
              placeholder="следующий шаг в захвате мира"
              autoFocus
              value={this.state.description}
            ></input>
          </form>
          <form style={{ width: "15%" }}>
            <input
              style={{ width: "100%" }}
              className="new-todo"
              placeholder="Min"
              onChange={this.onMinChange}
              value={this.state.min}
            />
          </form>
          <form onSubmit={this.onSubmit} style={{ width: "15%" }}>
            <input
              style={{ width: "100%" }}
              className="new-todo"
              placeholder="Sec"
              onChange={this.onSecChange}
              value={this.state.sec}
            />
          </form>
        </div>
      </>
    );
  }
}
