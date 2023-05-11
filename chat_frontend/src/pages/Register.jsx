import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("form");
  };
  const handleChange = () => {};
  return (
    <div className="register">
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
