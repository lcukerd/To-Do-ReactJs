import React, { Component } from "react";

class List extends Component {
  state = {
    // Title of Todo or UserName of user
    title: this.props.value.title,
    // Whether to show (PasswordField || Todo Desc) or not
    showDetail: false,
    // Whether to show Action button like delete, mark as done
    showAction: this.props.value.showAction,
    // Is the Todo marked as done
    done: this.props.value.done,
    // Id of User || Todo
    id: this.props.value.id
  };

  // Style for UserName
  styles = {
    fontSize: 40
  };

  render() {
    return (
      <div className="col-lg-4">
        {this.toggleListItem()}
        <div className="bg-light m-2">
          {this.state.showDetail && this.props.children}
        </div>
      </div>
    );
  }

  // Toggle between User and Todo list
  toggleListItem = () => {
    if (this.state.showAction)
      return (
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            value={this.state.title}
            placeholder="Enter Title"
            onChange={evt => this.updateInputValue(evt)}
            aria-describedby="button-addon4"
            onClick={this.toggleDetail}
          />
          <div className="input-group-append" id="button-addon4">
            <button
              className={
                this.state.done ? "btn btn-primary" : "btn btn-secondary"
              }
              type="button"
              onClick={this.toggleDone}
            >
              Done
            </button>
            <button
              className="btn btn-secondary"
              type="button"
              onClick={() =>
                this.props.onDelete({
                  id: this.state.id
                })
              }
            >
              Delete
            </button>
          </div>
        </div>
      );
    else
      return (
        <div className="bg-info" onClick={this.toggleDetail}>
          <span style={this.styles} className="text-light m-2">
            {this.state.title}
          </span>
        </div>
      );
  };

  // Toggle Childrens
  toggleDetail = () => {
    this.setState({ showDetail: !this.state.showDetail });
    if (this.state.showAction) this.update();
  };

  // Toggle mark as Done
  toggleDone = () => {
    const temp = this.state.done;
    this.setState({ done: !temp });
    this.update();
  };

  // Update Todo Title
  updateInputValue = evt => {
    this.setState({
      title: evt.target.value
    });
    if (this.state.showAction) this.update();
  };

  // Request Parent Component to update TODO
  update = () => {
    console.log(this.state.done);
    const state = this.state;
    this.props.onUpdate({
      id: state.id,
      title: state.title,
      done: state.done
    });
  };
}

export default List;
