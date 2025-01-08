import React from 'react';

// Parent component (App)
function App() {
  const user = {
    name: 'John Doe',
    age: 28,
    location: 'New York',
  };

  return (
    <div>
      <Header user={user} />
    </div>
  );
}

// Header component
function Header(props) {
  return (
    <div style={{ border: '2px solid gray', margin: '10px' }}>
      <h1>Welcome to the User Profile App</h1>
      <MainContent user={props.user} />
    </div>
  );
}

// MainContent component
function MainContent(props) {
  return (
    <div style={{ border: '2px solid lightgray', margin: '10px' }}>
      <h2>Main Content Area</h2>
      <Profile user={props.user} />
    </div>
  );
}

// Profile component
function Profile(props) {
  return (
    <div style={{ border: '2px solid lightblue', margin: '10px' }}>
      <h3>Profile Information</h3>
      <ProfileDetails user={props.user} />
    </div>
  );
}

// ProfileDetails component (deeply nested child)
function ProfileDetails(props) {
  return (
    <div style={{ border: '2px solid orange', margin: '10px' }}>
      <h4>User Details</h4>
      <p>Name: {props.user.name}</p>
      <p>Age: {props.user.age}</p>
      <p>Location: {props.user.location}</p>
    </div>
  );
}

export default App;
