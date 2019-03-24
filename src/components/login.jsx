import React, { Component } from "react";
import List from "./listComponent";
import PassField from "./passField";
import ToDo from "./to-do";

// Show list of User Accounts
class Login extends Component {
  state = {
    // Array of available Accounts
    users: JSON.parse(localStorage.getItem("Accounts")),
    // Is user loggedIn
    loggedIn: false,
    // UserName of loggedIn user
    loggedInUser: ""
  };
  render() {
    return (
      <React.Fragment>
        {this.state.loggedIn ? (
          <ToDo value={this.state.loggedInUser} />
        ) : (
          this.state.users.map(user => (
            <List
              key={user.userName}
              value={{
                title: user.userName,
                showAction: false,
                done: false,
                id: 0
              }}
            >
              <PassField
                key={user.userName}
                value={user}
                onLogin={this.handleLogin}
              />
            </List>
          ))
        )}
      </React.Fragment>
    );
  }

  // Opens To-Do list of logging in user
  handleLogin = user => {
    console.log("Logging In " + user.userName);
    this.setState({
      loggedIn: true,
      loggedInUser: user.userName
    });
  };
}

export default Login;
