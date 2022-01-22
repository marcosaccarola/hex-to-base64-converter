// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/style.css'
import { useState } from 'react';
import Bar from './components/100-Bar';
import Main from './components/200-Main';


function App() {

  const[direction,setDirection]=useState('hexToBase64')

  return (
    <div className="bg-animation min-vh-100">
        <Bar direction={direction} setDirection={setDirection} />
        <Main direction={direction} setDirection={setDirection} />
    </div>
  );
}

export default App;
