import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios'
import { registerRoute } from "../utils/APIroutes";

const Register = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
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
      console.log("IN VALIDATION", registerRoute)
      const { password, userName, email } = user;
      const {data} = await axios.post(registerRoute, {
        userName, 
        password, 
        email,
      })

      console.log(data)
      if(data.status === false){
        toast.error(data.message, toastOptions)
      } if(data.status === true){
        localStorage.setItem('umSprit', JSON.stringify(data.user))
      }
      navigate('/')
    }
  };
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleValidation = () => {
    const { password, confirmPassword, userName, email } = user;
    console.log(user  )
    if (password.length < 8) {
      toast.error("Passwords must be at least 8 characters", toastOptions);
      return false;
    } else if (password !== confirmPassword) {
      toast.error("Passwords must be equal", toastOptions);
      return false;
    } else if (userName.length < 4) {
      toast.error("name must be at least 4 characters", toastOptions);
      return false;
    }
    return true;
  };
  return (
    <div className="register">
      <ToastContainer />
      <form className="register__form" onSubmit={(e) => handleSubmit(e)}>
        <div className="register__form--brand">
          <img
            src="https://i.postimg.cc/3N52NS6m/personal-brand-default-removebg-preview.png"
            alt="Weltraum Logo"
          />
          <h2>umSprit</h2> {/*  weltraum scpricth  */}
        </div>

        <div className="register__form--questionnaire">
          <input
            type="text"
            placeholder="Add a Username"
            name="userName"
            onChange={(e) => handleChange(e)}
            required
          />

          <input
            type="email"
            placeholder="Add an Email"
            name="email"
            onChange={(e) => handleChange(e)}
            required
          />

          <input
            type="password"
            placeholder="Add a Password"
            name="password"
            onChange={(e) => handleChange(e)}
            required
          />

          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={(e) => handleChange(e)}
            required
          />
        </div>

        <button type="submit">Create User</button>
      </form>

      <span className="register__login">
        Already have an account? <a href="/login">Login</a>
      </span>
    </div>
  );
};
export default Register;
