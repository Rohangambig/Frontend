import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { CssBaseline,ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material';
import { themeSettings } from './theme';

function App() {

  const mode = useSelector((state)=> state.mode)
  const theme = useMemo(()=> createTheme(themeSettings(mode)),[mode])

  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
        <CssBaseline></CssBaseline>
          <Routes>
            <Route path='/home' element= {<HomePage></HomePage>}></Route>
            <Route path='/' element= {<LoginPage></LoginPage>}></Route>
            <Route path='/profile/:userId' element= {<LoginPage></LoginPage>}></Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
