import React from 'react';
import './App.css';
import { ChipsContainer } from './Containers/ChipsContainer/ChipsContainer';
import { SearchContainer } from './Containers/SearchContainer/SearchContainer';

function App() {
  return (
    <div className="App">
      <ChipsContainer />
      <SearchContainer />
    </div>
  );
}

export default App;
