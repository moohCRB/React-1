import React from "react";

const style = {
    border: "1px solid black",
    padding: "8px",
    cursor: "pointer",
    "margin-left":"-3rem"
}
const restart = props => {
  return (
    <button onClick={props.onClick} style={style}>
      Restart
    </button>
  );
};
export default restart
