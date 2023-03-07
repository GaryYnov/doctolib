import React from 'react'
import ReactDOM from 'react-dom'
import App from './Pages/App'
import Rdv from './Pages/rdv'
import SignUp from './Pages/signup'
import './css/index.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route path='/rdv' element={<Rdv />} />
    <Route path='/signup' element={<SignUp />} />
    <Route path='/' element={<App />} />
  </Routes>
  </BrowserRouter>,
    
  document.getElementById('root')
)