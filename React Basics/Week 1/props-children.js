// 1. Shelf Component
function Shelf(props) {
  const shelfStyle = {
    padding: "15px",
    border: "2px solid darkgrey",
    backgroundColor: "#f0f0f0",
    margin: "15px 0"
  };
  return (
    <div style={shelfStyle}>
      {props.children}
    </div>
  );
}
export default Shelf;

// -----------------------

// 2. Books Component
function Books(props) {
  return (
    <div className="promo-section">
      <div>
        <h2>This book is titled: {props.title}</h2>
      </div>
      <div>
        <h3>There are {props.pages} pages in the book.</h3>
      </div>
    </div>
  );
}
// export default Books

// 3. Readers Component
function Readers(props) {
  return (
    <h2>{props.reader} loves reading books in the afternoon!</h2>
  );
}

// Usage:

{/* 
  <Shelf>
    <Books title="React for Beginners" pages="250" />
  </Shelf>

  <Shelf>
    <Readers reader="John" />
  </Shelf>
*/}
