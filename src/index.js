import React from "react";
import ReactDOM from "react-dom";

class HelloMessage extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

var root = document.getElementById("app");
ReactDOM.render(<HelloMessage name="Jeremy" />, root);
