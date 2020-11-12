import NewTaskForm from "../NewTaskForm";
import TaskList from "../TaskList";
import Footer from "../Footer";
import React, { Component } from "react";

export default class App extends Component {
  maxId = 100;

  state = {
    taskData: [
      this.createTodoItem("помыть пол"),
      this.createTodoItem("съесть вкусняшку"),
      this.createTodoItem("почесать лопатку"),
    ],
    filter: "",
  };

  createTodoItem(description) {
    return {
      description,
      done: false,
      time: Date.now(),
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
    let value = e.target.defaultValue;
    if (e.key === "Enter") {
      this.onToggleEdit(id);
      value = e.target.value;
    }
    if (e.key === "Escape") {
      this.onToggleEdit(id);
      e.target.value = e.target.defaultValue;
    }
    this.setState(({ taskData }) => {
      const idx = taskData.findIndex((el) => el.id === id);
      const oldItem = taskData[idx];
      const newItem = { ...oldItem, description: value };

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
  deleteCompletedTask = () => {
    this.setState(({ taskData }) => {
      const taskArr = taskData.filter((el) => !el.done);

      return {
        taskData: taskArr,
      };
    });
  };

  showActiveTask = () => {
    this.setState(({ taskData }) => {
      const taskArr = taskData.filter((el) => !el.done);

      return {
        active: taskArr,
      };
    });
  };

  showCompletedTask = () => {
    this.setState(({ taskData }) => {
      const taskArr = taskData.filter((el) => el.done);

      return {
        completed: taskArr,
      };
    });
  };

  showAllTask = () => {
    this.setState(({ taskData }) => {
      let newArray = [...taskData];

      return {
        all: newArray,
      };
    });
    console.log(this.state.all);
  };

  onFilterTarget = (e) => {
    e.target.className = "selected";
    const item = e.target.parentNode.parentNode;
    const arrChilds = item.childNodes;
    arrChilds.forEach((item) => {
      if (item.firstChild !== e.target) {
        item.firstChild.className = "";
      }
    });
    this.setState(() => {
      let newFilter = e.target.innerText;

      return {
        filter: newFilter,
      };
    });
  };

  render() {
    const { taskData, filter, all, active, completed } = this.state;
    const doneCount = taskData.filter((el) => el.done).length;
    //const actives = taskData.filter((el) => !el.done);
    const todoCount = taskData.length - doneCount;

    return (
      <section className="todoapp">
        <div className="header">
          <h1>Че делать?</h1>
        </div>
        <NewTaskForm onAdded={this.addItem} />
        <TaskList
          todos={taskData}
          filter={filter}
          all={all}
          active={active}
          completed={completed}
          onDeleted={(id) => this.deleteItem(id)}
          onToggleDone={this.onToggleDone}
          onToggleEdit={this.onToggleEdit}
          onEditTask={this.onEditTask}
        />
        <Footer
          doneCount={doneCount}
          todoCount={todoCount}
          showActiveTask={this.showActiveTask}
          showCompletedTask={this.showCompletedTask}
          //showAllTask={this.showAllTask}
          onFilterTarget={this.onFilterTarget}
          deleteCompletedTask={this.deleteCompletedTask}
        />
      </section>
    );
  }
}
