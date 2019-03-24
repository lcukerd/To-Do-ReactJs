import React, { Component } from "react";

class PassField extends Component {
  state = {
    enteredPass: "",
    pass: this.props.value.pass
  };
  render() {
    return (
      <React.Fragment>
        <div className="form-group">
          <label htmlFor="pass">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={this.state.enteredPass}
            onChange={evt => this.updateInputValue(evt)}
          />
        </div>
        <button className="btn btn-primary btn-sm" onClick={this.login}>
          Login
        </button>
      </React.Fragment>
    );
  }

  updateInputValue = evt => {
    this.setState({
      enteredPass: evt.target.value
    });
  };

  login = () => {
    if (this.state.enteredPass === this.state.pass) this.props.onLogin();
    else alert("Wrong Password");
  };
}

export default PassField;
