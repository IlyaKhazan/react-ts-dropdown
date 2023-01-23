import React, { useState } from 'react';
import './App.css';
import { useAppSelector } from './app/hooks';
import { ThemeContext, themes } from './contexts/ThemeContext';
import { Toggler } from './components/Toggler/Toggler';
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
      <div className="container">
        <h2>Язык</h2>
        <ChipsContainer chips={chips} isOpened={isOpened} setIsOpened={setIsOpened} />
        {isOpened && <SearchContainer languages={languages} isOpened={isOpened} setIsOpened={setIsOpened} />}
      </div>
      <ThemeContext.Consumer>
        {({ theme, setTheme }: any) => (
          <Toggler
            onChange={() => {
              if (theme === themes.light) setTheme(themes.dark)
              if (theme === themes.dark) setTheme(themes.light)
            }}
            value={theme === themes.dark}
          />
        )}
      </ThemeContext.Consumer>
    </div>
  );
}

export default App;
