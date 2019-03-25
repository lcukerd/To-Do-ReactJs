import React, { Component } from "react";
import List from "./listComponent";
import Login from "./login";
class ToDo extends Component {
  state = {
    // UserName of loggedIn user
    userName: this.props.value,
    // Array of Todo for logged in user as loaded from localStorage
    todo: localStorage.hasOwnProperty(this.props.value)
      ? JSON.parse(localStorage.getItem(this.props.value))
      : [],
    // Is user logged in
    loggedIn: true
  };

  render() {
    return this.state.loggedIn ? (
      <React.Fragment>
        <div className="input-group">
          <h1
            style={{ fontSize: 30 }}
            className="text-primary m-2 form-control"
            aria-describedby="button-addon4"
          >
            {this.state.userName}
          </h1>
          <div className="input-group-append" id="button-addon4">
            <button
              className="btn btn-success m-2"
              type="button"
              onClick={this.addToDO}
            >
              Add
            </button>
            <button
              className="btn btn-success m-2"
              type="button"
              onClick={this.logout}
            >
              Logout
            </button>
          </div>
        </div>
        {this.state.todo.map(todo => (
          <List
            key={todo.id}
            value={{
              title: todo.title,
              showAction: true,
              done: todo.done,
              id: todo.id
            }}
            onDelete={this.delete}
            onUpdate={this.updateToDo}
          >
            <div className="input-group">
              <textarea
                className="form-control"
                placeholder="Enter Todo desc"
                defaultValue={todo.detail}
                onChange={evt => this.updateInputValue(todo.id, evt)}
              />
            </div>{" "}
          </List>
        ))}
      </React.Fragment>
    ) : (
      <Login />
    );
  }

  // Delete a Todo
  delete = todo => {
    const newTodo = this.state.todo.filter(c => c.id !== todo.id);
    this.setState({
      todo: newTodo
    });
    localStorage.setItem(this.state.userName, JSON.stringify(newTodo));
  };

  // Add a new Todo
  addToDO = () => {
    let todo = this.state.todo;
    todo.push({
      id: todo.length,
      title: "",
      detail: "",
      done: false
    });
    this.setState({
      todo: todo
    });
    localStorage.setItem(this.state.userName, JSON.stringify(this.state.todo));
  };

  // Update an Existing Todo
  updateToDo = todo => {
    let newTodo = [];
    for (let i = 0; i < this.state.todo.length; i++) {
      if (this.state.todo[i].id === todo.id) {
        newTodo.push({
          id: todo.id,
          title: todo.title,
          detail: this.state.todo[i].detail,
          done: todo.done
        });
      } else {
        newTodo.push(this.state.todo[i]);
      }
    }
    this.setState({
      todo: newTodo
    });
    localStorage.setItem(this.state.userName, JSON.stringify(this.state.todo));
  };

  // Update Todo Desc
  updateInputValue = (id, evt) => {
    let newTodo = [];
    for (let i = 0; i < this.state.todo.length; i++) {
      const todo = this.state.todo[i];
      if (todo.id === id) {
        newTodo.push({
          id: todo.id,
          title: todo.title,
          detail: evt.target.value,
          done: todo.done
        });
      } else {
        newTodo.push(this.state.todo[i]);
      }
    }
    this.setState({
      todo: newTodo
    });
    localStorage.setItem(this.state.userName, JSON.stringify(this.state.todo));
  };

  // Logout User
  logout = () => {
    this.setState({
      loggedIn: false
    });
  };
}

export default ToDo;
