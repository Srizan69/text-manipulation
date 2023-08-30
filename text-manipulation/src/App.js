
import './App.css';
import Navbar from './components/Navbar';
import FormText from './components/FormText';
import AboutUs from './components/AboutUs';
import React,{ useState } from 'react';
import Alert from './components/Alert';
import {
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [darkmodeswitch, setDarkmodeswitch] = useState('Enable dark mode');
  const [alert, setAlert] = useState(null)
  const showalert = (message,type)=>{
    setAlert ({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const [mode, setMode] = useState('#adb5bd');
  const toggleMode = ()=>{
    if(mode === '#adb5bd'){
    setMode('dark')
    setDarkmodeswitch('disable dark mode')
    document.body.style.backgroundColor = "#042d08"
    showalert("Darkmode has been enabled!","success")
    document.title = "Textutils-Home(Darkmode)"
    }
    else{
    setMode('#adb5bd')
    setDarkmodeswitch("enable dark mode")
    document.body.style.backgroundColor="white"
    showalert("Darkmode has been disabled!","success")
    document.title = "Textutils-Home(lightmode)"
    }
  }
  return (
   <>
   <Navbar title="textutils" about="About" mode={mode} toggleMode={toggleMode} darkmodeswitch={darkmodeswitch}/>
   <Alert alert={alert}/>
   <div className="container my-3">
    <Routes>
      <Route path="/" element={<FormText showalert={showalert} heading="Enter text to analyze" mode={mode}/>} />
      <Route path="/AboutUs" element={<AboutUs/>} />
    </Routes>
   </div>
   </>
  );
}

export default App;