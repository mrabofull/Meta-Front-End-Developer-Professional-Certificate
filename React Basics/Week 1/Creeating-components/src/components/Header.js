import React from "react";

function Header(props) {
  return <h1>Welcome to the Bookstore, {props.name}! Your favorite color is {props.color}.</h1>;
}

export default Header;
