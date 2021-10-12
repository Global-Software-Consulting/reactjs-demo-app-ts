import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { ColorModeContext } from './utils/context';
import { themes } from './utils/theme';
import AppRouting from './routes';
function App() {
  const [theme, setTheme] = useState(themes[0]);
  const [mode, setMode] = React.useState('light');

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        console.log('change color');
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  useEffect(() => {
    setTheme(mode === 'light' ? themes[0] : themes[1]);
  }, [mode]);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <AppRouting />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
