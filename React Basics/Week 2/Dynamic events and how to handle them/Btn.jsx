import React from 'react';

// Example 1: Inline Anonymous ES5 Function
function BtnES5() {
  return (
    <button onClick={function() { console.log('first example - ES5 function'); }}>
      Inline Anonymous ES5 Function
    </button>
  );
}

// Example 2: Inline Anonymous ES6 Arrow Function
function BtnES6() {
  return (
    <button onClick={() => console.log('second example - ES6 arrow function')}>
      Inline Anonymous ES6 Arrow Function
    </button>
  );
}

// Example 3: Separate Function Declaration
function BtnDeclaration() {
  function thirdExample() {
    console.log('third example - function declaration');
  }
  
  return (
    <button onClick={thirdExample}>
      Separate Function Declaration
    </button>
  );
}

// Example 4: Separate Function Expression
function BtnExpression() {
  const fourthExample = () => console.log('fourth example - function expression');
  
  return (
    <button onClick={fourthExample}>
      Separate Function Expression
    </button>
  );
}

// Example 5: Handling Mouse Events (e.g., onMouseOver)
function BtnMouseOver() {
  const mouseOverHandler = () => console.log('mouse over event');
  
  return (
    <button onMouseOver={mouseOverHandler}>
      Hover over me
    </button>
  );
}

function App() {
  return (
    <div>
      <BtnES5 />
      <BtnES6 />
      <BtnDeclaration />
      <BtnExpression />
      <BtnMouseOver />
    </div>
  );
}

export default App;
