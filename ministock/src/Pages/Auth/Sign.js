import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
const Sign = () => {
    const navigate = useNavigate();

    const [userSignType, ChangeUserSignType] = useState("User");
    const [secretKey,ChangeSecretKey] = useState("");

    const [values, setValues] = useState({
        Name: "",
        Mobile: "",
        Email: "",
        Gender: "",
        Password: "",
        Usertype: ""

    });

    function handleChange(event) {
        //destructuring name and value

        const { id, value } = event.target;

        setValues((prev) => ({
            ...prev,
            [id]: value
        }))

    }

    function formSubmit(event) {
        if (userSignType === "Admin" && secretKey != "NikhilWalia") {
            event.preventDefault();

            // toast.error("Invalid SecretKey ! ")
            alert("Invalid SecretKey !!");
        } else {
            
            event.preventDefault();
            // console.log(values);

            axios.post("http://localhost:8000/api/v1/auth/register", values)
                .then(result => {
                    console.log(result);
                    navigate('/login');
                })
                .catch((error) => {
                    console.log(error)
                    if (error.response.status === 500) {
                        toast.error("Please enter all the fields properly!!!");
                    }
                    if (error.response.status === 400) {
                        toast.error("User existed already!");
                    }
                })

            setValues({
                Name: "",
                Mobile: "",
                Email: "",
                Gender: "",
                Password: "",
            })
        }
    }



    return (
        <>
            <ToastContainer />


            <div className="flex justify-center items-center h-[100vh]">
                <div className=" flex flex-col justify-around items-center w-[30rem] h-[40rem] border" >
                    <h1 className="text-4xl font-bold ">
                        Sign Up
                    </h1>

                    <div className=" w-[100%] flex justify-center  h-[75%]">
                        <form
                            onSubmit={formSubmit}
                            className="flex w-[80%] flex-col justify-around items-center"
                        >

                            <div className="flex w-[100%] text-xl justify-between items-center">
                                <h1> Register as : </h1>
                                <div className="flex justify-around w-[40%]">
                                    <div>
                                        User
                                        <input
                                            id="User"
                                            type="radio"
                                            name="usertype"
                                            value="User"
                                            onClick={() => { ChangeUserSignType("User"); values.Usertype = "User" }}
                                        />
                                    </div>
                                    <div>
                                        Admin
                                        <input
                                            id="Admin"
                                            type="radio"
                                            name="usertype"
                                            value="Admin"
                                            onClick={() => { ChangeUserSignType("Admin"); values.Usertype = "Admin" }}
                                        />
                                    </div>
                                </div>
                            </div>

                            {
                                userSignType === "Admin" &&
                                <div className="w-[100%] ">
                                    <input
                                        id="secret"
                                        type="text"
                                        placeholder="Secret Key"
                                        className=" pl-3 text border w-full h-[3rem] rounded"
                                        onChange={(e)=>{ChangeSecretKey(e.target.value)}}
                                    />
                                </div>

                            }

                            <div className="w-[100%] ">
                                <input
                                    id="Name"
                                    type="text"
                                    placeholder="Name"
                                    className=" pl-3 text border w-full h-[3rem] rounded"
                                    onChange={handleChange}
                                    value={values.Name}

                                />
                            </div>

                            <div className="w-[100%]">
                                <input
                                    type="number"
                                    placeholder="Mobile"
                                    className=" pl-3 text border w-full h-[3rem] rounded"
                                    onChange={handleChange}
                                    value={values.Mobile}
                                    id="Mobile"
                                />
                            </div>

                            <div className="w-[100%]">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className=" pl-3 text border w-full h-[3rem] rounded"
                                    onChange={handleChange}
                                    value={values.Email}
                                    id="Email"
                                />
                            </div>
                            <div className="w-[100%]">
                                <select
                                    className=" pl-3 text border w-full h-[3rem] rounded"
                                    onChange={handleChange}
                                    value={values.Gender}
                                    id="Gender"
                                >
                                    <option value="Gender">Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>

                                </select>
                            </div>

                            <div className="w-[100%]">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className=" pl-3 text border w-full h-[3rem] rounded"
                                    onChange={handleChange}
                                    value={values.Password}
                                    id="Password"
                                />
                            </div>


                            <div className="text-center w-[100%]">
                                <button
                                    type="submit"
                                    className=" hover:bg-[#0077b5] hover:text-white duration-500 border border-[#0077b5] font-bold text-[#0077b5] w-full h-[3rem] mt-3 rounded  "
                                >
                                    Create Account
                                </button>
                            </div>
                        </form>
                    </div>
                    <p
                        onClick={() => { navigate('/login') }}
                        className=" cursor-pointer text-gray-400">Already a user? Login</p>
                </div>
            </div>
        </>
    );
}

export default Sign;