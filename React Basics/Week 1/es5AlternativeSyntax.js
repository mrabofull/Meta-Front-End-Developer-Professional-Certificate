import React from 'react';

// Function component using a named function
function NamedNav(props) {
  return (
    <ul>
      <li>{props.first}</li>
    </ul>
  );
}

// Anonymous function component
const AnonymousNav = function (props) {
  return (
    <ul>
      <li>{props.first}</li>
    </ul>
  );
};

// Arrow function component (with parentheses for props)
const ArrowNavWithParentheses = (props) => {
  return (
    <ul>
      <li>{props.first}</li>
    </ul>
  );
};

// Arrow function component (implicit return)
const ArrowNavImplicitReturn = () => <ul><li>Home</li></ul>;

// ---------------------------------------------------

// Using ternary expression inside JSX
function TernaryExample() {
  return (
    <div className="heading">
      <h1>{Math.random() >= 0.5 ? "Greater than 0.5" : "Less than 0.5"}</h1>
    </div>
  );
}

// Using a function to generate a random number
function RandomNumberExample() {
  const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;
  return (
    <div className="heading">
      <h1>Random number: {getRandomNumber()}</h1>
    </div>
  );
}

// Using math operations directly in JSX
function MathExpressionExample() {
  return (
    <div className="heading">
      <h1>Calculated Value: {(100 / 5) + 2}</h1>
    </div>
  );
}

// ---------------------------------------------------

// Expressions as props

// Example with boolean and dynamic props
const booleanVal = true;

function BooleanExample(props) {
  return (
    <div>
      <h2>The boolean prop is: {props.toggleBoolean.toString()}</h2>
    </div>
  );
}

// Example with math and string operations in props
const num1 = 25;
const str1 = "React";

function MathStringExample(props) {
  return (
    <div>
      <h2>The number multiplied by 2 is: {props.number * 2}</h2>
      <p>The string concatenation result: {props.text}</p>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      {/* Named function component */}
      <NamedNav first="Home" />
      
      {/* Anonymous function component */}
      <AnonymousNav first="About" />
      
      {/* Arrow function component with parentheses */}
      <ArrowNavWithParentheses first="Services" />
      
      {/* Arrow function component with implicit return */}
      <ArrowNavImplicitReturn />
      
      {/* Ternary expression example */}
      <TernaryExample />
      
      {/* Random number example */}
      <RandomNumberExample />
      
      {/* Math expression example */}
      <MathExpressionExample />
      
      {/* Passing boolean as prop */}
      <BooleanExample toggleBoolean={!booleanVal} />
      
      {/* Passing math and string expressions as props */}
      <MathStringExample
        number={num1}
        text={str1 + " is awesome!"}
      />
    </div>
  );
}
