// Import React and ReactDOM libraries for building the user interface.
import React from 'react';
import ReactDOM from 'react-dom/client';
// Import the main App component, which is the root of the application.
import App from './App';

// Find the root DOM element where the React app will be mounted.
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// Create a new React root and render the App component.
const root = ReactDOM.createRoot(rootElement);
root.render(
  // StrictMode is a tool for highlighting potential problems in an application.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
