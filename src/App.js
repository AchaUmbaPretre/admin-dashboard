import { ColorModeContext, useMode} from './scenes/theme';
import { CssBaseline, ThemeProvider  } from '@mui/material';
import './App.css';

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className="App">
          
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
