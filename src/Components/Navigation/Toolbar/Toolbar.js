import React from "react";
import classes from "./Toolbar.css"
import Logo from "../../Logo/Logo";
import {IconKebab} from "../../assets";
import NavigationItems from "../NavigationItems/NavigationItems";

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div>Menu</div>
        <IconKebab />
        <nav>
        <NavigationItems/>
        </nav>
    </header>
);

export default toolbar