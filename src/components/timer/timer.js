import React, { Component } from "react";
import { formatDistanceToNowStrict } from "date-fns";

export default class Timer extends Component {
  state = {
    time: this.props.time,
  };

  componentDidMount() {
    this.updateTime(this.props.time);
    this.interval = setInterval(this.updateTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateTime = (time) => {
    let newTime = time + 1000;
    this.setState({
      time: newTime,
    });
  };

  render() {
    let { time } = this.props;
    const timer = formatDistanceToNowStrict(time);

    return <>{timer}</>;
  }
}
