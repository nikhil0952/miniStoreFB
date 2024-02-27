import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const navigate = useNavigate();
    const callAboutPage = async () => {
        const config = {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true
        };
        try {
            axios.get("http://localhost:8000/api/v1/auth/cart", config)
                .then((data) => {
                    console.log("Data", data);
                })
                .catch((error) => {
                    
                    console.log(error.message);
                    navigate('/login');
                })
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        callAboutPage();
    });

    return (
        <>
            <div className=" h-[100vh] bg-black text-white flex justify-center items-center">
                Hello World
            </div>
        </>
    );
}

export default Cart;