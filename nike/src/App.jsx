import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { MaybeNavbar } from './Components/MaybeNavbar'
import { Navbars } from "./Components/Navbars"
import { Home } from './Components/Home'
import { AdminLogin } from './Components/Admin/AdminLogin'
import { UserForm } from './Components/UserForm'
import { UserSignup } from './Components/UserSignup'
import { AdminControl } from './Components/Admin/AdminControl'
import { MenSneaker } from './Components/MenSneaker'
import { WomenSneaker } from './Components/WomenSneaker'
import { Sports } from './Components/Sports'
import { CardDetails } from './Components/CardDetails'
import { AddCart } from './Components/AddCart'
import { createContext, useState } from 'react'


export const cartDetailsContext = createContext();

function App() {

  const [userId, setUserId] = useState(localStorage.getItem('userId') || '');
  const [userName, setUserName] = useState(localStorage.getItem('userName')) || '';
  const [userProduct, setUserProduct] = useState([]);

  const clearCart = () => {
    setUserProduct([]);
    localStorage.removeItem('userProduct');
  };

  const handleLogout = () => {
    setUserId('');
    setUserName('');
    clearCart();
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');
  };

  return (
    <>
      <cartDetailsContext.Provider value={{ userId, setUserId, userName, setUserName, userProduct, setUserProduct, handleLogout }}>
        <Router>
          <MaybeNavbar>
            <Navbars uName = {userName}/>
          </MaybeNavbar>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/alogin' element={<AdminLogin />} />
            <Route path='/acontrol' element={<AdminControl />} />
            <Route path='/ulogin' element={<UserForm />} />
            <Route path='/usign' element={<UserSignup />} />
            <Route path='/men' element={<MenSneaker />} />
            <Route path='/women' element={<WomenSneaker />} />
            <Route path='/sports' element={<Sports />} />
            <Route path='/cdetails/:id' element={<CardDetails />} />
            <Route path='/addcart' element={<AddCart />} />
          </Routes>
        </Router>
      </cartDetailsContext.Provider>
    </>
  )
}

export default App
