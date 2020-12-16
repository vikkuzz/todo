import NewTaskForm from "../NewTaskForm";
import TaskList from "../TaskList";
import Footer from "../Footer";
import React, { Component } from "react";

export default class App extends Component {
  maxId = Math.random() * 100;

  tasks = [
    this.createTodoItem("помыть пол", 6),
    this.createTodoItem("съесть вкусняшку", 6),
    this.createTodoItem("почесать лопатку", 6),
  ];

  state = {
    taskData: [],

    filter: "",
  };

  createTodoItem(description, totalInSec) {
    return {
      description,
      totalInSec: totalInSec,
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

      localStorage.state = JSON.stringify(newArray);

      return {
        taskData: newArray,
      };
    });
  };

  componentDidMount() {
    let data = null;
    if (localStorage.state) {
      data = localStorage.state;
    } else if (!localStorage.state || data.length === 0) {
      localStorage.state = JSON.stringify(this.tasks);
    }

    this.setState({
      taskData: JSON.parse(localStorage.state),
    });
  }

  componentDidUpdate() {
    localStorage.state = JSON.stringify(this.state.taskData);
  }

  addItem = (text, totalInSec) => {
    if (text.length < 1) {
      text = "новая задача";
    }
    const newItem = this.createTodoItem(text, totalInSec);

    this.setState(({ taskData }) => {
      const newArr = [...taskData, newItem];

      localStorage.state = JSON.stringify(newArr);

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

  startTimer = (id) => {
    this.setState(({ taskData }) => {
      const idx = taskData.findIndex((el) => el.id === id);
      const oldItem = taskData[idx];
      const updTime = oldItem.totalInSec - 1;

      const newItem = { ...oldItem, totalInSec: updTime };

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

    const todoCount = taskData.length - doneCount;

    //console.log(localStorage.state.length);

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
          startTimer={this.startTimer}
        />
        <Footer
          doneCount={doneCount}
          todoCount={todoCount}
          showActiveTask={this.showActiveTask}
          showCompletedTask={this.showCompletedTask}
          onFilterTarget={this.onFilterTarget}
          deleteCompletedTask={this.deleteCompletedTask}
        />
      </section>
    );
  }
}
