// Parent component
function Dog() {
  return (
      <Puppy name="Max" bowlShape="square" bowlStatus="full" />
  );
};

// Child component
function Puppy(props) {
  return (
      <div>
          {props.name} has <Bowl bowlShape="square" bowlStatus="full" />
      </div>
  );
};

// Grandchild component
function Bowl(props) {
  return (
      <span>
          {props.bowlShape}-shaped bowl, and it's currently {props.bowlStatus}
      </span>
  );
};

// -------------------------------------------

import Child from "./Child";
import './App.css';

function App() {
  const date = new Date();

  return (
    <div>
      <Child message={date.toLocaleTimeString()} />
    </div>
  );
}

export default App;

function Child(props) {
  return (
    <h1>{props.message}</h1>
  );
}

// export default Child;