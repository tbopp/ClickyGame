import React from "react";
import "./Footer.css";

const Footer = props =>
<footer className="footer">
<div className="bottom">{props.children}
<img alt={props.alt} src={props.src}></img>
</div>
</footer>

export default Footer;
