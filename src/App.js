import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import Notestate from './context/Notestate';
import { About } from './components/About';
import { Signin } from './components/Signin';
import { Login } from './components/Login';
import { useState } from 'react';
import { Alert } from './components/Alert';



function App() {
  const[alert,setAlert]=useState(null)
  const showAlert=(message,type)=>{
           setAlert({
            message:message,
            type:type
           })
           setTimeout(() => {
             setAlert(null)
           },1500);
  }
  return (

    <div className="App">
        <Notestate>

     <BrowserRouter>
      <Navbar/>
      <Alert alert={alert}/>
      <div className="container">
      <Routes>
      <Route exact path='/' element={<Home showAlert={showAlert}/>}/>
      <Route exact path='/about' element={<About/>}/>
      <Route exact path='/signin' element={<Signin showAlert={showAlert}/>}/>
      <Route exact path='/login' element={<Login showAlert={showAlert}/>}/>
      </Routes>
      </div>
    
     </BrowserRouter>
     </Notestate>

    </div>

  );
}

export default App;
