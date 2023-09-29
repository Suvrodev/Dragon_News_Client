import React, { useContext, useState } from 'react';
import './Login.css'
import Header from '../Shared/Header/Header';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { FaEye, FaEyeDropper, FaEyeSlash } from 'react-icons/fa6';
import { Helmet } from 'react-helmet-async';

const Login = () => {

    const {mailLogin,successfullToast,unSuccessfullToast}=useContext(AuthContext)

    const [showPassword,setShowPassword]=useState(false)
    const handlePassword=()=>{
        setShowPassword(!showPassword)
        console.log(showPassword);
    }


    const location=useLocation()
    console.log("Location Login: ",location);
    const targetPage=location?.state?.from || '/login'
    const navigate=useNavigate()

    const handleLogin=(event)=>{
        event.preventDefault()
        const Form=event.target;
        const email=Form.email.value;
        const password=Form.password.value;

        mailLogin(email,password)
        .then(res=>{
            const loggedUser=res.user;
            console.log(loggedUser);
            navigate(targetPage)
            successfullToast("Successfully Login")
        })
        .catch(error=>{
            console.log("Error: ",error.message);
            unSuccessfullToast("Id or Password doesn't match")
        })
    }
    return (
        <div>
            <Helmet>
                <title>Login || Dragon News</title>
            </Helmet>

            <Header></Header>
            <div className='bg-white'>
                  
                <div className='hereForm  '>
                    
                   <form action="" onSubmit={handleLogin} className='w-[80%] mx-auto'>
                        <h1 className='text-black font-bold text-center'>Login Your Account</h1>
                        <p className='border w-[80%] mx-auto my-5'></p>
                        <p className='font-bold mb-4'>Email Address</p>
                        <input className='w-[100%] p-2 mx-auto text-white border-0 outline-none' type="email" name="email" id="" placeholder='Enter your email address' required/>
                        <p className='font-bold my-4'>Password</p>
                        <div className='relative'>
                            <input className='w-[100%] p-2 mx-auto text-white border-0 outline-none' type={showPassword? "text" : "password"} name="password" id="" placeholder='Enter your Password' required/>
                           <div onClick={handlePassword}>
                              {
                                showPassword? <FaEyeSlash className='ICON'/> : <FaEye className='ICON'/>
                              }
                           </div>
                        </div>
                        <br />
                        <button className='btn bg-black text-white w-[100%] mt-5'>Login</button>
                        <p className='text-center mt-2'>Dont’t Have An Account ? <Link to={'/registration'} className='text-red-500 font-bold'>Register</Link></p>
                   </form>
                </div>
            </div>
        </div>
    );
};

export default Login;