import React from "react";
import ReactDOM from "react-dom";
const a = {
  color: "blue",
  fontSize: "35px",
  textDecoration: "underline",
  fontWeight: "bold",
  letterSpacing: "2px",
  lineHeight: "3.0"
};
ReactDOM.render(
  <h1 style={a}>Hello World</h1>,
  document.getElementById("root")
);
