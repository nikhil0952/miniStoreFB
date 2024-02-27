
import Footer from './Components/Footer';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Auth/Login';
import Sign from './Pages/Auth/Sign';
import Cart from './Pages/Cart';
// import Admindashboard from './Pages/Admin/Admindashboard';
// import { useContext, useEffect, useState } from 'react';
// import { AuthContext } from './Context/Authcontext';
// import AsUser from "./UserType/AsUser";
// import Admindashboard from './Pages/Admin/Admindashboard';

function App() {

  // const localContext = useContext(AuthContext);
  // console.log(localContext.authState.user);

  return (


    <div className="App">
      
        <Navbar />
    

      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Sign />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>

      </div>

      <Footer />
    </div>



  );
}

export default App;
