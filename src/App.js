import './App.css';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import About from './component/About.js';
import Alert from './component/Alert';
import Errorpage from './component/Errorpage';
import { useState } from 'react';
import {
  BrowserRouter as Router,Route,Routes
} from "react-router-dom";

function App() {

  const [alert, setAlert] = useState('initialState');
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert('initialState')
    }, 1500);
  }
  const [mode, setMode] = useState('light'); //whether dark mode is enable or not
  const toggleMode = () => {

    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#343a40';
      showAlert(":Dark mode has been enabled", "success")
      document.title = "Text Utils - Dark Mode";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert(":Light mode has been enabled", "success")
      document.title = "Text Utils - Light Mode";
    }
  }
  return (
   <>
   <div className='App'>
      <Router>
      <Navbar title='Text-Utils' mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
            <Route path='/about' element = {<About/>}></Route>
            <Route path = '/' element = {<Textform mode = {mode} />}></Route>
            <Route path = '/' element = {<Errorpage/>}></Route>
        </Routes>     
      </Router>
    </div>
    </>
  );
}

export default App;
