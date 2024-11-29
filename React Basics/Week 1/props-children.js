function Bag(props) {
  const bag = {
      padding: "20px",
      border: "1px solid gray",
      background: "#fff",
      margin: "20px 0"
  }
  return (
      <div style={bag}>
          {props.children}
      </div>
  )
}
export default Bag


// -----------------------

function Apples(props) {
   return (
    <div className="promo-section">
        <div>
            <h2>These apples are: {props.color}</h2>
            </div>
            <div>
            <h3>There are {props.number} apples.</h3>
        </div>
    </div>
  )
}
// export default Apples


function Pears(props) {
   return (
    <h2>I don't like pears, but my friend, {props.friend}, does</h2>
  )
}

{/* <Bag>
    <Apples color="yellow" number="5" />
</Bag>

<Bag>
    <Pears friend="Peter" />
</Bag> */}