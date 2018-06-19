import React from "react";
import Aux from "../../hoc/Aux";
import "./Layout.css";
import styled from "react-emotion";

const Header = styled("div")`
margin-top: 50px;
`;

const layout = props => (
  <Aux>
    <div>Toolbar,SideDrawer,Backdrop</div>
    <main className={"Content"}>{props.children}</main>
  </Aux>
);

export default layout;
