import React ,{useEffect, useRef} from "react"
import './components/utils/style.css';
import TextAreaComponent from './components/TextGenerator/TextAreaComponent1';

import SnackbarWithDecorators from './components/utils/SnackbarWithDecorators';
import ApiModal from './components/StickyContent/ApiKeyInputModal';
import Dashboard from "./components/TextGenerator/Dashboard";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import MainComponent from "./components/LandingPage/MainComponent";
import Header from "./components/Header/Header";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

// const theme = extendTheme({ cssVarPrefix: 'demo'});

function App() {


  return (
    <div className="App">
        
    
      
     
        <ApiModal/>
      <SnackbarWithDecorators/>
  

 
     <ThemeProvider theme={darkTheme}>
      <Header/>
      {/* <CssBaseline /> */}
      <MainComponent/>
      <Dashboard />
      </ThemeProvider>

    </div>
  );
}

export default App;
