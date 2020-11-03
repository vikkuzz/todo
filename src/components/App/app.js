import NewTaskForm from "../NewTaskForm";
import TaskList from "../TaskList";
import Footer from "../Footer";
import React, { Component } from "react";

export default class App extends Component {
  maxId = 100;

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

  addItem = (text) => {
    //gen id
    const newItem = {
      description: text,
      important: false,
      id: this.maxId++,
    };

    this.setState(({ taskData }) => {
      const newArr = [...taskData, newItem];

      return {
        taskData: newArr,
      };
    });
  };

  render() {
    return (
      <section className="todoapp">
        <div className="header">
          <h1>todos</h1>
        </div>
        <NewTaskForm onAdded={this.addItem} />
        <TaskList
          todos={this.state.taskData}
          onDeleted={(id) => this.deleteItem(id)}
        />
        <Footer />
      </section>
    );
  }
}
