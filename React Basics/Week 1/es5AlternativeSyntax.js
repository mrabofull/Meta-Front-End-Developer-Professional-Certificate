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