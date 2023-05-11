import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("form");
  };
  const handleChange = () => {
    
  }
  return (
    <>
      <formContainer>
        <form onSubmit={(e) => handlSubmit(e)}>
          <div className="brand">
            <img src="" alt="" />
            <h1>Weltraum</h1>
          </div>

          <input
            type="text"
            placeholder="Add a Username"
            name="Username"
            onChange={(e) => handleChange(e)}
            required
          /> 

          <input
            type="email"
            placeholder="Add an Email"
            name="Email"
            onChange={(e) => handleChange(e)}
            required
          />

          <input
            type="password"
            placeholder="Add a Password"
            name="Password"
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
        </form>

        <button type="submit" >Create User</button>
        <span>Already have an account? <Link to="/Login">Login</Link></span>
      </formContainer>
    </>
  );
};

const formContainer = styled.div``;

export default Register;
