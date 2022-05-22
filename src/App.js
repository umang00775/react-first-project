// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'; 
import React,{useState} from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";




function App() {
  const [mode,setMode] = useState("light");

  const [alert,setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type : type
    }
    )
    setTimeout(()=>{
      setAlert(null)
    },2000)
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#999';
      showAlert("Dark  Mode Enabled", "success");
      // setInterval(() => {
      //   document.title = "Dark Mode"
      // }, 1000);
      // setInterval(() => {
      //   document.title = "Install Now"
      // }, 1500);
      // setInterval(() => {
      //   document.title = "You have virus"
      // }, 2000);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = '#fff';
      showAlert("Light Mode Enabled","success");
      document.title = "Light Mode"
    }
  }
  return (
    <>
   {/* <Router> */}
    <Navbar my_app_name="FirstProject" about="About Me" mode={mode} toggleMode={toggleMode}></Navbar>
    <Alert alert={alert}></Alert>
    {/* <div className="container my-3">
      <TextForm showAlert={showAlert} heading = "Enter The Text To Analyse" mode={mode}></TextForm>
    </div> */}
    {/* <About/> */}
    {/* <Switch> */}
          {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/"> */}
            <TextForm showAlert={showAlert} heading = "Enter The Text To Analyse" mode={mode}></TextForm>
          {/* </Route>
    </Switch> */}
    
   {/* </Router> */}
   </>
  );
}

export default App;
