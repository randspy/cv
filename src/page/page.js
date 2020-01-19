import React from "react";
import "./page.css";

export default function Page(props) {
  return (
    <div className="page">
      <div className="page--header" style={props.theme.header}>
        <div className="page--title" style={props.theme.title}>
          {props.title}
        </div>
      </div>
      <div className="page--content">
        <button className="page--back-btn" style={props.theme.backButton}>
          Back
        </button>
        <div>{props.children}</div>
      </div>
    </div>
  );
}
