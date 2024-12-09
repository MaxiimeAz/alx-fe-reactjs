import { useState } from 'react';  // If you're using useState in the component
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import React from "react";  // You only need this once

// Import your form component here
import FormikForm from "./components/formikForm";  // Assuming you want to use FormikForm

// If you want to use RegistrationForm instead, import it:
// import RegistrationForm from "./components/RegistrationForm";

const App = () => {
  const [count, setCount] = useState(0);  // If you want to use state for a counter

  return (
    <div>
      <h1>User Registration</h1>
      {/* Replace with either FormikForm or RegistrationForm */}
      <FormikForm />
      {/* Or, if you want to use the other form, uncomment this line: */}
      {/* <RegistrationForm /> */}

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>Edit <code>src/App.jsx</code> and save to test HMR</p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
};

export default App;
