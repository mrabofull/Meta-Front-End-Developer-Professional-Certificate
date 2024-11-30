function Nav(props) {
  return (
      <ul>
          <li>{props.first}</li>
      </ul>
  )
}

// Anonymous (nameless) function
const Nav = function(props) {
  return (
      <ul>
          <li>{props.first}</li>
      </ul>
  )
}
// Calling example: <Nav first="Home" />


// Components as Arrow Functions
const Nav = (props) => {
  return (
      <ul>
          <li>{props.first}</li>
      </ul>
  )
}

// Components as Arrow Functions
const Nav = props => {
  return (
      <ul>
          <li>{props.first}</li>
      </ul>
  )
}

// Components as Arrow Functions
const Nav = () => {
  return (
      <ul>
          <li>Home</li>
      </ul>
  )
}

// Components as Arrow Functions, implicit return
const Nav = () => <ul><li>Home</li></ul>

// ---------------------------------------------------

// Using ternary expressions in JSX

function Example() {
  return (
      <div className="heading">
          <h1>{Math.random() >= 0.5 ? "Over 0.5" : "Under 0.5"}</h1>
      </div>
  );
};

function Example2() {
  return (
      <div className="heading">
          <h1>Here's a random number from 0 to 10: 
              { Math.floor(Math.random() * 10) + 1 }
          </h1>
      </div>
  );
};

function Example3() {

  const getRandomNum = () => Math.floor(Math.random() * 10) + 1

  return (
      <div className="heading">
          <h1>Here's a random number from 0 to 10: { getRandomNum() }</h1>
      </div>
  );
};

const getRandomNum = function() {
  return Math.floor(Math.random() * 10) + 1
};

function getRandomNum() {
  return Math.floor(Math.random() *10) + 1
};

// ---------------------------------------------------

// Expressions as props

// Example 1
const bool = false; 

function Example(props) {
    return (
        <h2>The value of the toggleBoolean prop is: {props.toggleBoolean.toString()}</h2>
    );
};

export default function App() { 
    return ( 
        <div className="App"> 
            <Example toggleBoolean={!bool} /> 
        </div> 
    ); 
};


// Example 2
const bool1 = false;
const str1 = "just";

function Example(props) {
    return (
        <div>
            <h2>
                The value of the toggleBoolean prop is:{props.toggleBoolean.toString()}
            </h2>
            <p>The value of the math prop is: <em>{props.math}</em></p>
            <p>The value of the str prop is: <em>{props.str}</em></p>
        </div>
    );
};

export default function App() {
    return (
        <div className="App">
            <Example
                toggleBoolean={!bool1}
                math={(10 + 20) / 3}
                str={str1 + ' another ' + 'string'}
            />
        </div>
    );
};