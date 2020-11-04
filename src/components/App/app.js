import NewTaskForm from "../NewTaskForm";
import TaskList from "../TaskList";
import Footer from "../Footer";
import React, { Component } from "react";

export default class App extends Component {
  maxId = 100;

  state = {
    taskData: [
      this.createTodoItem("first task"),
      this.createTodoItem("second task"),
      this.createTodoItem("third task"),
    ],
  };

  createTodoItem(description) {
    return {
      description,
      done: false,
      finish: false,
      edit: false,
      id: this.maxId++,
      text: this.props.description,
    };
  }

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
    const newItem = this.createTodoItem(text);

    this.setState(({ taskData }) => {
      const newArr = [...taskData, newItem];

      return {
        taskData: newArr,
      };
    });
  };
  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  }

  onToggleDone = (id) => {
    this.setState(({ taskData }) => {
      return {
        taskData: this.toggleProperty(taskData, id, "done"),
      };
    });
  };
  onToggleEdit = (id) => {
    this.setState(({ taskData }) => {
      return {
        taskData: this.toggleProperty(taskData, id, "edit"),
      };
    });
  };

  onEditTask = (id, e) => {
    if (e.key === "Enter") {
      this.onToggleEdit(id);
    }
    this.setState(({ taskData }) => {
      const idx = taskData.findIndex((el) => el.id === id);
      const oldItem = taskData[idx];
      const newItem = { ...oldItem, description: e.target.value };

      const newArray = [
        ...taskData.slice(0, idx),
        newItem,
        ...taskData.slice(idx + 1),
      ];

      return {
        taskData: newArray,
      };
    });
  };

  render() {
    const { taskData } = this.state;
    const doneCount = taskData.filter((el) => el.done).length;
    const todoCount = taskData.length - doneCount;

    return (
      <section className="todoapp">
        <div className="header">
          <h1>todos</h1>
        </div>
        <NewTaskForm onAdded={this.addItem} />
        <TaskList
          todos={taskData}
          onDeleted={(id) => this.deleteItem(id)}
          onToggleDone={this.onToggleDone}
          onToggleEdit={this.onToggleEdit}
          onEditTask={this.onEditTask}
        />
        <Footer doneCount={doneCount} />
      </section>
    );
  }
}
