// Parent component
function Parent() {
  return (
      <Child name="Alice" age={25} />
  );
}

// Child component
function Child(props) {
  return (
      <div>
          <h1>Welcome, {props.name}!</h1>
          <h2>You are {props.age} years old.</h2>
          <Pet petName="Buddy" petType="dog" />
      </div>
  );
}

// Grandchild component
function Pet(props) {
  return (
      <p>{props.petName} is a {props.petType}.</p>
  );
}

// --------------------------------------------------

// App component that passes the current time as a prop to the child component
import React from "react";
import './App.css';

function App() {
  const date = new Date();

  return (
    <div>
      <TimeDisplay time={date.toLocaleTimeString()} />
    </div>
  );
}

export default App;

// Child component that receives the time as a prop
function TimeDisplay(props) {
  return (
    <h1>The current time is: {props.time}</h1>
  );
}

