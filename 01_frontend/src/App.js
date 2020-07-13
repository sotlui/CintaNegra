import React from 'react';
import Navigation from './components/Navigation/';
import AuthContextProvider from './contexts/AuthContext';

function App() {
  return (
    <AuthContextProvider>
      <Navigation />
      <div className="container">
        <h1>Hola Cinta Negra</h1>
      </div>
    </AuthContextProvider>
  );
}

export default App;
