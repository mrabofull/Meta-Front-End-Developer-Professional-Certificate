import React, { useState } from 'react';

// ModeToggler component
function ModeToggler() {
  const [darkModeOn, setDarkModeOn] = useState(true); // State for toggling the mode
  const [modeStyle, setModeStyle] = useState({
    backgroundColor: 'black',
    color: 'white',
    transition: 'all 0.3s ease',
  });

  const darkMode = (
    <h1 style={{ color: modeStyle.color }}>Dark Mode is On</h1>
  );
  const lightMode = (
    <h1 style={{ color: modeStyle.color }}>Light Mode is On</h1>
  );

  // Toggling the mode
  function handleClick() {
    setDarkModeOn((prevMode) => !prevMode); // Toggle the state
    if (darkModeOn) {
      setModeStyle({
        backgroundColor: 'white',
        color: 'black',
        transition: 'all 0.3s ease',
      });
      console.log('Light mode is on');
    } else {
      setModeStyle({
        backgroundColor: 'black',
        color: 'white',
        transition: 'all 0.3s ease',
      });
      console.log('Dark mode is on');
    }
  }

  // Reset the mode to light
  function handleReset() {
    setDarkModeOn(true);
    setModeStyle({
      backgroundColor: 'black',
      color: 'white',
      transition: 'all 0.3s ease',
    });
    console.log('Mode reset to Dark Mode');
  }

  return (
    <div
      style={{
        backgroundColor: modeStyle.backgroundColor,
        color: modeStyle.color,
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      {darkModeOn ? darkMode : lightMode}
      <div>
        <button onClick={handleClick} style={buttonStyle}>
          Toggle Mode
        </button>
        <button onClick={handleReset} style={buttonStyle}>
          Reset to Dark Mode
        </button>
      </div>
    </div>
  );
}

// Button styles
const buttonStyle = {
  marginTop: '20px',
  padding: '10px 20px',
  border: 'none',
  cursor: 'pointer',
  fontSize: '16px',
  borderRadius: '5px',
  backgroundColor: 'blue',
  color: 'white',
};

//export default ModeToggler;

// ------------------------------

// App component
import ModeToggler from './ModeToggler';
import './App.css';

function App() {
  return (
    <div>
      <ModeToggler />
    </div>
  );
}

export default App;
