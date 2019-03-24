import React, { Component } from "react";
import Action from "./actions";

class List extends Component {
  state = {
    title: this.props.value.title,
    showDetail: false,
    showAction: this.props.value.showAction
  };

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

  toggleDetail = () => {
    this.setState({ showDetail: !this.state.showDetail });
  };

  toggleListItem = () => {
    if (this.state.showAction) return <p>Heelo</p>;
    else
      return (
        <div className="bg-info" onClick={this.toggleDetail}>
          <span style={this.styles} className="text-light m-2">
            {this.state.title}
          </span>
        </div>
      );
  };
}

export default List;
