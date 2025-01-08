import React, { useState, useEffect } from 'react';

export default function FetchDataComponent() {
  // State to store the user data
  const [userData, setUserData] = useState(null);

  // State to store loading status
  const [loading, setLoading] = useState(true);

  // State to store any errors that may occur during the fetch
  const [error, setError] = useState(null);

  // useEffect hook to fetch user data when the component mounts
  useEffect(() => {
    // Define an async function to fetch data
    const fetchUserData = async () => {
      try {
        // Initiating the fetch request
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        // Parsing the JSON response
        const data = await response.json();

        // Updating the state with the fetched user data
        setUserData(data);
      } catch (error) {
        // Handling any errors that occur during the fetch
        setError(error.message);
      } finally {
        // Setting loading to false once the fetch is complete
        setLoading(false);
      }
    };

    // Calling the fetch function
    fetchUserData();
  }, []); // Empty dependency array ensures this effect runs only once (componentDidMount)

  return (
    <div>
      <h1>Fetch Data Example</h1>

      {/* Conditional rendering based on the loading and error states */}
      {loading && <p>Loading...</p>} {/* Display loading message */}
      {error && <p>Error: {error}</p>} {/* Display error message */}

      {/* Only show user data if it has been successfully fetched */}
      {userData && !loading && !error && (
        <div>
          <h2>User Information</h2>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          <p>Phone: {userData.phone}</p>
        </div>
      )}
    </div>
  );
}
