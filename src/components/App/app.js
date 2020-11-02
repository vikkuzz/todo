import AppHeader from "../AppHeader";
import TaskList from "../TaskList";
import Footer from "../Footer";
import React, { Component } from "react";

export default class App extends Component {
  state = {
    taskData: [
      { description: "Completed task", id: "01" },
      { description: "Editing task", id: "02" },
      { description: "Active task", id: "03" },
    ],
  };

  deleteItem = (id) => {
    this.setState(({ taskData }) => {
      const idx = taskData.findIndex((el) => el.id === id);

      const newArray = [...taskData.slice(0, idx), ...taskData.slice(idx + 1)];

      return {
        taskData: newArray,
      };
    });
  };

  render() {
    return (
      <section className="todoapp">
        <AppHeader />
        <TaskList
          todos={this.state.taskData}
          onDeleted={(id) => this.deleteItem(id)}
        />
        <Footer />
      </section>
    );
  }
}
