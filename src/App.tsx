import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Search, CompanyCollection, Nav} from './component/index'

function App() {
  return (
    <div className="App">
    <header>
      <p className="author">Sergiu Tanasiev</p>
      <Search />
      <Nav />
    </header>
      <main>
        <CompanyCollection />
      </main>
    </div>
  );
}

export default App;
