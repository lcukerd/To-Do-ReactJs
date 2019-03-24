import React from "react";
import ReactDOM from "react-dom";
import Login from "./components/login";
import "bootstrap/dist/css/bootstrap.css";

// Clear localStorage on Refresh
localStorage.clear();

// Add User Accounts in localStorage
localStorage.setItem(
  "Accounts",
  JSON.stringify([
    { userName: "User 1", pass: "temp1" },
    { userName: "User 2", pass: "temp2" },
    { userName: "User 3", pass: "temp3" }
  ])
);

ReactDOM.render(<Login />, document.getElementById("root"));
