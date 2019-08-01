import React from "react";
import classes from "./CounterControltodo.css";

const counterControltodo = props => (
  <div className={classes.CounterControltodo} onClick={props.clicked}>
    {props.label}
  </div>
);

export default counterControltodo;
