import React, { useReducer } from "react";

// Step 1: Define the reducer function
// This function takes in the current state and an action, and returns the new state
const reducer = (state, action) => {
  // Handle increment action
  if (action.type === "increment") {
    return { count: state.count + 1 };
  }
  // Handle decrement action
  if (action.type === "decrement") {
    return { count: state.count - 1 };
  }
  // Handle reset action
  if (action.type === "reset") {
    return { count: 0 };
  }
  // Return an error if an invalid action is provided
  return new Error();
};

function App() {
  // Step 2: Define the initial state
  // The initial state will have a count set to 0
  const initialState = { count: 0 };

  // Step 3: Use the useReducer hook
  // The useReducer hook takes the reducer function and the initial state,
  // and returns the current state and the dispatch function to send actions
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h1>Counter: {state.count}</h1>
      <div>
        {/* Step 4: Increment button */}
        {/* This button will trigger the increment action, which adds 1 to the count */}
        <button onClick={() => dispatch({ type: "increment" })}>Increment</button>

        {/* Step 5: Decrement button */}
        {/* This button will trigger the decrement action, which subtracts 1 from the count */}
        <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>

        {/* Step 6: Reset button */}
        {/* This button will trigger the reset action, which sets the count back to 0 */}
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
    </div>
  );
}

export default App;
