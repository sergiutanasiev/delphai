import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Search, CompanyCollection} from './component/index'

function App() {
  return (
    <div className="App">
      <header>
        <Search />
      </header>
      <main>
        <CompanyCollection />
      </main>
    </div>
  );
}

export default App;
