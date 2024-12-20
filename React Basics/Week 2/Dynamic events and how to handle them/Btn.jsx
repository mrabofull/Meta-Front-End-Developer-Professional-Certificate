// function Btn() {
//   const clickHandler =
//    () => console.log('clicked')
//   return ( 
//     <button onClick={clickHandler}>
//       Click me
//       </button>
//   );
// }

// export default Btn;

function Btn() {
  const clickHandler =
   () => console.log('mouse over')
  return ( 
    <button onMouseOver={clickHandler}>
      Click me
      </button>
  );
}

export default Btn;

// ------------------------------------------------


// Handling events using inline anonymous ES5 functions

{/* <button onClick={function() {console.log('first example')}}>
    An inline anonymous ES5 function event handler
</button> */}

// ------------------------------------------------

// Handling events using inline anonymous ES6 functions (arrow functions)

<button onClick={() => console.log('second example')}>
    An inline anonymous ES6 function event handler
</button>

// ------------------------------------------------

// Handling events using separate function declarations

// function App() {
//     function thirdExample() {
//         console.log('third example');
//     };
//     return (
//         <div className="thirdExample">
//             <button onClick={thirdExample}>
//                 using a separate function declaration
//             </button>
//         </div>
//     );
// };
// export default App;

// ------------------------------------------------

// Handling events using separate function expressions

// function App() {
//       const fourthExample = () => console.log('fourth example');
  
//       return (
//           <div className="fourthExample">
//               <button onClick={fourthExample}>
//                   using a separate function expression
//               </button>
//           </div>
//     );
//   };
//   export default App;