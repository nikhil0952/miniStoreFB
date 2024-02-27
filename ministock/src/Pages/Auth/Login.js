import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { useContext } from "react";
import { AuthContext } from "../../Context/Authcontext";

const Login = () => {

    const loginState = useContext(AuthContext);



    const navigate = useNavigate();

    const [values, setValues] = useState({
        Email: "",
        Password: ""
    })

    function handleChange(event) {
        const { id, value } = event.target;
        setValues((prev) => ({
            ...prev,
            [id]: value
        }))
    }

    function formSubmit(e) {
        e.preventDefault();

        //to add cookie to system its important
        const config = {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true
        };
        

        axios.post("http://localhost:8000/api/v1/auth/login", values, config)
            .then((result) => {
                loginState.setAuthState({
                    ...loginState.authState,
                    user:result.data,
                    token:result.token
                })
                toast.success("Successfully login !!")
                localStorage.setItem("auth",JSON.stringify(result.data));
                navigate('/');
                
                // const dataLocal = localStorage.getItem("auth");
                // const parseData = JSON.parse(dataLocal);
                
                // if(parseData.data.Usertype === "Admin"){
                    
                //     navigate('/')
                // }else{
                //     navigate('/');
                // }

                

            })
            .catch((error) => {
                if (error.response.status === 400) {
                    
                    toast.error("Enter Values ");
                }
                if (error.response.status === 401) {
                    toast.error("Invalid email or password");
                }
            })

        setValues({
            Email: "",
            Password: ""
        })
    }


    return (
        <>
            
            <div className="flex justify-center items-center h-[80vh]">
                <div className=" flex flex-col justify-around items-center w-[30rem] h-[23rem] border" >
                    <h1 className="text-4xl font-bold ">
                        Login
                    </h1>

                    <div className=" w-[100%] flex justify-center  h-[50%]">
                        <form
                            onSubmit={formSubmit}
                            className="flex w-[80%] flex-col justify-around items-center"
                        >
                            <div className="w-[100%] ">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className=" pl-3 text border w-full h-[3rem] rounded"
                                    id="Email"
                                    onChange={handleChange}
                                    value={values.Email}
                                />
                            </div>

                            <div className="w-[100%]">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className=" pl-3 text border w-full h-[3rem] rounded"
                                    id="Password"
                                    onChange={handleChange}
                                    value={values.Password}
                                />
                            </div>

                            <div className="text-center w-[100%]">
                                <button
                                    type="submit"
                                    className=" hover:bg-[#0077b5] hover:text-white duration-500 border border-[#0077b5] font-bold text-[#0077b5] w-full h-[3rem] mt-3 rounded  ">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                    <p
                        onClick={() => { navigate('/signup') }}
                        className=" cursor-pointer text-gray-400">New user? signup</p>
                </div>
            </div>
        </>
    );
}

export default Login;