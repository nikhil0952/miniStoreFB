import React from "react";

import { Route,Routes } from "react-router-dom";
import Navbar from "../Components/Navbar.js"
import Home from "../Pages/Home.js"
import Login from "../Pages/Auth/Login.js"
import Sign from "../Pages/Auth/Sign.js"
import Cart from "../Pages/Cart.js"
import Footer from "../Components/Footer.js"


const AsUser = () => {
    return (
        <>
            <div >
                <Navbar />

                <div>
                    <Routes>
                        <Route path='/' element={<Home/>} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/signup' element={<Sign />} />
                        <Route path='/cart' element={<Cart />} />
                    </Routes>

                </div>

                <Footer />
            </div>
        </>
    );
}

// export default AsUser;