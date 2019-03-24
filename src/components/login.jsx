import React, { Component } from "react";
import List from "./listComponent";
import PassField from "./passField";

class Login extends Component {
  state = {
    users: [
      { userName: "User 1", pass: "temp1" },
      { userName: "User 2", pass: "temp2" },
      { userName: "User 3", pass: "temp3" }
    ]
  };
  render() {
    return (
      <React.Fragment>
        {this.state.users.map(user => (
          <List
            key={user.userName}
            value={{ title: user.userName, showAction: false }}
          >
            <PassField
              key={user.userName}
              value={user}
              onLogin={this.handleLogin}
            />
          </List>
        ))}
      </React.Fragment>
    );
  }
  handleLogin = user => {
    console.log("Event Handler");
  };
}

export default Login;
