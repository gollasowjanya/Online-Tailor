import React from 'react';


// Create a context for user data
const UserContext = React.createContext({
  name: null,
  isLoggedIn: false,
});

export default UserContext;
