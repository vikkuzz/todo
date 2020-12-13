import React, { Component } from "react";

export default class SetTimer extends Component {
  state = {
    totalTime: this.props.totalInSec,
    play: false,
  };
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  startTimer = () => {
    if (this.state.totalTime > 0) {
      this.updateTime(this.state.totalTime);
      this.interval = setInterval(this.updateTime, 1000);
    } else return;
  };

  pauseTimer = () => {
    clearInterval(this.interval);
  };

  updateTime = () => {
    let newTime = this.state.totalTime - 1;

    this.setState({
      totalTime: newTime,
    });
  };

  render() {
    let { totalTime } = this.state;
    console.log(totalTime);

    let minutes = Math.floor(totalTime / 60);
    let seconds = Math.floor(totalTime % 60);

    if (totalTime < 1) {
      this.pauseTimer();
    }

    return (
      <span className="description">
        <button className="icon icon-play" onClick={this.startTimer}></button>
        <button className="icon icon-pause" onClick={this.pauseTimer}></button>

        {`${minutes}:${seconds}`}
      </span>
    );
  }
}
