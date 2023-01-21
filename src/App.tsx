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
  console.log(123)

  return (
    <div className="App">
      <ChipsContainer chips={chips} isOpened={isOpened} setIsOpened={setIsOpened} />
      <SearchContainer languages={languages} isOpened={isOpened} />
    </div>
  );
}

export default App;
