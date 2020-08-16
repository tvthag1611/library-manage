import React from 'react';
import './App.css';
import Books from './components/Books'
import Information from './components/Information'
import User from './components/User'
import Action from './components/Action'

function App() {
  return (
    <div className="library-manager">
      <Books />
      <div className="info-all">
        <Action />
        <Information />
      </div>
      <User />
    </div>
  );
}

export default App;
