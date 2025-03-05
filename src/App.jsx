import React, { useState } from 'react';
import Home from './pages/Home/Home';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import { GlobalStyle } from './styles/GlobalStyles';

function App() {
  const [theme, setTheme] = useState('light');
  const [isSun, setIsSun] = useState(true);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    const newIsSun = !isSun;

    setTheme(newTheme);
    setIsSun(newIsSun);
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Home
        isSun={isSun}
        toggleTheme={toggleTheme}
      />
    </ThemeProvider>
  );
};

export default App;
