import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginRoute } from "../utils/APIroutes";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'

const login = () => {
  useEffect(() => {
    if(localStorage.getItem('umSprit')){
      navigate('/')
    }
  }, [])

  const navigate = useNavigate()
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });
  const toastOptions = {
    position: "top-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(handleValidation()){
      console.log("IN VALIDATION", loginRoute)
      const { password, userName } = user;
      const {data} = await axios.post(loginRoute, {
        userName, 
        password, 
      })

      if(data.status === false){
        toast.error(data.message, toastOptions)
      } if(data.status === true){
        localStorage.setItem('umSprit', JSON.stringify(data.user))
        navigate('/')
      }
    }
  };
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleValidation = () => {
    const { password, userName } = user;
    if (password === "" || userName.length === "") { 
      toast.error("Email and password are required", toastOptions);
    }
    return true;
  }

  return (
    <div className="login">
      <ToastContainer />
      <form className="login__form" onSubmit={(e) => handleSubmit(e)}>
        <div className="login__form--brand">
          <img
            src="https://i.postimg.cc/3N52NS6m/personal-brand-default-removebg-preview.png"
            alt="Weltraum Logo"
          />
          <h2>umSprit</h2> {/*  weltraum scpricth  */}
        </div>

        <div className="login__form--questionnaire">
          <input
            type="text"
            placeholder="Add an username"
            name="userName"
            onChange={(e) => handleChange(e)}
            required
            min="3"
          />

          <input
            type="password"
            placeholder="Add a Password"
            name="password"
            onChange={(e) => handleChange(e)}
            required
          />
        </div>

        <button type="submit">Login</button>
      </form>

      <span className="login__register">
        Don't have an account? <a href="/register">Register</a>
      </span>
    </div>
  );
};

export default login;
