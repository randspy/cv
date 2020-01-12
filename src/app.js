import React from "react";
import ReactDOM from "react-dom";
import "./styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const header = {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    marginTop: "300px",
    fontSize: "24px"
  };
  return <div style={header}>First commit</div>;
}
ReactDOM.render(<App />, document.getElementById("root"));
