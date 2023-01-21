import React, { useState } from 'react';
import './App.css';
import { useAppSelector } from './app/hooks';
import { ChipsContainer } from './containers/ChipsContainer/ChipsContainer';
import { selectLanguages } from './containers/dropdownSlice';
import { selectChips } from './containers/dropdownSlice';
import { SearchContainer } from './containers/SearchContainer/SearchContainer';

function App() {

  const [isOpened, setIsOpened] = useState(false)

  const languages = useAppSelector(selectLanguages)
  const chips = useAppSelector(selectChips)

  return (
    <div className="App">
      <h2>Язык</h2>
      <ChipsContainer chips={chips} isOpened={isOpened} setIsOpened={setIsOpened} />
      {isOpened && <SearchContainer languages={languages} />}
    </div>
  );
}

export default App;
