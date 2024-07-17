import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css';
import Mainbody from './components/Mainbody';
import MenuBar from './components/MenuBar';

function App() {
  const theme  = createTheme({
    typography: {
      fontFamily: 'DM Sans, sans-serif',
  },
  })
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <MenuBar/>
        <Mainbody/>
      </div>
    </ThemeProvider>
  );
}

export default App;
