import Counter from './components/Counter';
import UserProfile from './components/UserProfile';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import WelcomeMessage from './components/WelcomeMessage';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContext from '../context/UserContext'; // Import UserContext from the context folder
function App() {
  const [count, setCount] = useState(0)
import React from 'react';
import ProfilePage from './components/ProfilePage';
import UserContext from './contexts/UserContext';

function App() {
  // Define the data you want to provide through the context
  const userData = { 
    name: "Jane Doe", 
    email: "jane.doe@example.com" 
  };

  // Wrap your component tree with UserContext.Provider and pass the value
  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
  return (
    <>
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
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
function App() {
    return (
        <div className="App">
            <WelcomeMessage />
        </div>
    );
}
function App() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
}
function App() {
    return (
        <div>
            <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
        </div>
    );
}
import React from 'react';
import ProfilePage from './components/ProfilePage';
import UserContext from './contexts/UserContext';
export default App;
export default App;
export default App;
export default App
