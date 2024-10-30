import React from 'react';
import ReactDOM from 'react-dom';
import AuthFlow from './AuthFlow';  // Import the main component

ReactDOM.render(
  <React.StrictMode>
    <AuthFlow />  // Render the AuthFlow component as the app's entry point
  </React.StrictMode>,
  document.getElementById('root')
);
