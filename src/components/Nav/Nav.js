import React from "react";
import "./Nav.css";

const Nav = props =>
<nav className="navbar">
<ul>
    <li className="brand"><a href="/">{props.brand}</a></li>
    <li className="">Score: {props.score} | Top Score: {props.topScore}</li>
</ul>

</nav>;

export default Nav;
