import React from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faBars, faHeart, faCartShopping, faMoon, faRightToBracket,faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../Context/Authcontext";
import { ToastContainer, toast } from 'react-toastify';


const Navbar = () => {

    const loginState = useContext(AuthContext);
    const navigate = useNavigate();

    function toggleLoginLogout(){
        const config = {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true
        };

        try {
            axios.get("http://localhost:8000/api/v1/auth/logout", config)
            .then(()=>{
                loginState.setAuthState({
                    ...loginState.authState,
                    user:null,
                    token:""
                })
                localStorage.removeItem("auth");
                toast.success("Logout Successfully!!!")
                navigate('/login');
            })
        } catch (error) {
            console.log(error);
        }
    }

   
    
    return (
        <>
        <ToastContainer/>
            <div className=" fixed z-50 bg-white top-0 w-[100%] flex justify-center items-center text-[#01486d]">
                <div className=" w-[95%] flex justify-between">
                    <div className="text-center p-2">
                        <h1 className=" protest-riot-regular text-5xl">
                            Mini Store
                        </h1>
                    </div>

                    <div className=" flex  w-[40%] lg:w-[25%] text-2xl items-center justify-between ">
                        <div
                            onClick={() => { navigate('/') }}
                            className="relative icon-container">
                            <FontAwesomeIcon className=" cursor-pointer" icon={faHouse} />
                            <p className="icon-label">Home</p>
                        </div>

                        <div className="relative icon-container">
                            <FontAwesomeIcon className=" cursor-pointer" icon={faBars} />
                            <p className="icon-label">All products</p>
                        </div>

                        <div className="relative icon-container">
                            <FontAwesomeIcon className=" cursor-pointer" icon={faHeart} />
                            <p className="icon-label">Favourite</p>
                        </div>

                        <div
                            className="relative icon-container"
                            onClick={() => { navigate('/Cart') }}
                        >
                            <FontAwesomeIcon className=" cursor-pointer" icon={faCartShopping} />
                            <p className="icon-label">Cart</p>
                        </div>

                        <div className="relative icon-container">
                            <FontAwesomeIcon className=" cursor-pointer" icon={faMoon} />
                            <p className="icon-label">Dark Mode</p>
                        </div>

                        {
                            !loginState.authState.user &&
                            <div className="relative icon-container">
                                <FontAwesomeIcon onClick={() => { navigate('/login') }} className=" cursor-pointer" icon={faRightToBracket} />
                                <p className="icon-label">Login</p>
                            </div>
                        }

                        {
                           loginState.authState.user &&
                            <div className="relative icon-container">
                               
                                <FontAwesomeIcon onClick={toggleLoginLogout} className=" cursor-pointer" icon={faRightFromBracket} />
                                <p className="icon-label">Logout</p>
                            </div>
                        }
                    </div>
                </div>
            </div>

        </>
    );
}

export default Navbar;