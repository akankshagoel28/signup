import './App.css'
import Background from './images/background.png';
import React from 'react';
import Form from './form';
// import WelcomePage from './WelcomePage';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
function App() {
  return (
     <BrowserRouter>
   <div className="background" style={{backgroundImage:`url(${Background})`}}>
        <Routes>
        <Route path="/" element={<Form />}/>
        {/* <Route path="/welcome" element={<WelcomePage />}/> */}
        </Routes>
        </div>
        </BrowserRouter>
  );
}

export default App;
