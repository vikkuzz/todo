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
    filter: { all: true, active: false, completed: false },
    all: [],
    active: [],
    completed: [],
  };

  createTodoItem(description) {
    return {
      description,
      done: false,

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
    const item = e.target.parentNode.parentNode;
    const arrChilds = item.childNodes;
    e.target.className = "selected";
    let id = 0;
    arrChilds.forEach((item, i, arr) => {
      if (item.firstChild !== e.target) {
        item.firstChild.className = "";
      } else {
        id = i;
      }
    });
    if (id === 0) {
      this.setState(({ filter }) => {
        filter.all = true;
        filter.active = false;
        filter.completed = false;
      });
      this.showAllTask();
    }
    if (id === 1) {
      this.setState(({ filter }) => {
        filter.all = false;
        filter.active = true;
        filter.completed = false;
      });
      this.showActiveTask();
    }
    if (id === 2) {
      this.setState(({ filter }) => {
        filter.all = false;
        filter.active = false;
        filter.completed = true;
      });
      this.showCompletedTask();
      console.log(this.state);
    }
    console.log(id);
  };

  render() {
    const { taskData, filter, all, active, completed } = this.state;
    const doneCount = taskData.filter((el) => el.done).length;
    //const actives = taskData.filter((el) => !el.done);
    const todoCount = taskData.length - doneCount;

    return (
      <section className="todoapp">
        <div className="header">
          <h1>todos</h1>
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
        />
      </section>
    );
  }
}
