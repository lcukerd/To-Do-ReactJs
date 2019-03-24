import React, { Component } from "react";

// Component to take password and validate interval it
class PassField extends Component {
  state = {
    // Password being entered
    enteredPass: "",
    // Correct password
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

  // Update current password
  updateInputValue = evt => {
    this.setState({
      enteredPass: evt.target.value
    });
  };

  // Validate Entered password and notify parent Component
  login = () => {
    if (this.state.enteredPass === this.state.pass)
      this.props.onLogin(this.props.value);
    else alert("Wrong Password");
  };
}

export default PassField;
