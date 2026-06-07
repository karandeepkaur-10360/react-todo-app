import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div className="header" >
        <nav className="navbar">
          <div className="container-fluid">
            <a className="navbar-brand">
              To-Do App
            </a>
          </div>
        </nav>
      </div>
    );
  }
}
