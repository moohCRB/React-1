import React from "react";
import styled from "react-emotion";
import "./BuildControl.css";

const BuildControl = styled("div")`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
  button {
    display: block;
    font: inherit;
    padding: 5px;
    margin: 0 px;
    width: 80px;
    border: 1px solid #aa6817;
    cursor: pointer;
    outline: none;
  }
`;

const buildControl = props => (
  <BuildControl>
    <div className = "Label">{props.label}</div>
    <button className="Less">Less</button>
    <button className="More">More</button>
  </BuildControl>
);

export default buildControl;
