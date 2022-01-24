import { useEffect } from 'react';
import './App.css';
import {Route,Routes, useNavigate} from 'react-router-dom'
import Login from './components/Login';
import Home from './container/Home';
import fetchUser from './utils/fetchUser';
function App() {
  const navigate=useNavigate();
  useEffect(() => {
    const user = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();    if(!user)  
    if(!user)navigate('/login')
  }, []);
  
  return (
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/*" element={<Home/>}/>
    </Routes>
  );
}

export default App;
