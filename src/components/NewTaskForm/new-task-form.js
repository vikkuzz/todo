import React, { Component } from "react";

export default class NewTaskForm extends Component {
  state = {
    description: "",
    min: "",
    sec: "",
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
    if (e.target.value > 60) {
      alert("не больше 60 секунд");
      e.target.value = "";
    }
    this.setState({
      sec: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (this.state.min.length === 0) {
      alert("введите время в минутах");
      return;
    }

    if (this.state.sec.length === 0) {
      alert("введите время в секундах");
      return;
    }

    const totalInSec = +this.state.sec + this.state.min * 60;

    this.props.onAdded(this.state.description, totalInSec);
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
          <form style={{ width: "70%" }} onSubmit={this.onSubmit}>
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
          <form style={{ width: "15%" }} onSubmit={this.onSubmit}>
            <input
              type="number"
              style={{ width: "100%" }}
              className="new-todo"
              placeholder="Min"
              onChange={this.onMinChange}
              value={this.state.min}
              required
            />
          </form>
          <form onSubmit={this.onSubmit} style={{ width: "15%" }}>
            <input
              type="number"
              max="60"
              style={{ width: "100%" }}
              className="new-todo"
              placeholder="Sec"
              onChange={this.onSecChange}
              value={this.state.sec}
              required
            />
          </form>
        </div>
      </>
    );
  }
}
