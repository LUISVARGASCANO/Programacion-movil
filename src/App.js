import React, { Component } from "react";
import "./styles.css";
import "./Audifono.jpg";

class ToDo extends Component {
  state = {
    task: "",
    taskList: []
  };

  removeItem = (id) => {
    this.setState({
      taskList: this.state.taskList.filter((item) => {
        return item.id !== id;
      })
    });
  };

  addItem = (event) => {
    if (this.state.task.length > 0) {
      this.setState({
        taskList: this.state.taskList.concat({
          task: this.state.task,
          id: Date.now()
        }),
        task: ""
      });
    }
    event.preventDefault();
  };

  handleChange = (event) => {
    this.setState({
      task: event.target.value
    });
  };

  render() {
    return (
      <form onSubmit={this.addItem}>
        <h1>Aplicación ToDo (Lista de Pendientes) </h1>

        <h2>
          <input
            value={this.state.task}
            onChange={this.handleChange}
            placeholder="Ingrese Tareas a Realizar"
            maxLength="30"
          />
        </h2>

        <h3>
          <button onClick={this.addItem}>Agregar</button>
        </h3>

        <ul>
          {this.state.taskList.map((item) => (
            <li>
              {item.task}{" "}
              <button
                onClick={() => {
                  this.removeItem(item.id);
                }}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </form>
    );
  }
}

export default ToDo;
