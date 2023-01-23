import React, { Component } from "react";


export default class Subject extends Component {
  render() {
    return (
      <header>
        <h1><a onClick={function(e) {
            e.preventDefault();
            this.props.onChangePage();
        }.bind(this)} href="/">{this.props.title}</a></h1>
        {this.props.subTitle}
      </header>
    );
  }
}