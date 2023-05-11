import React from "react";

const login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("form");
  };
  const handleChange = () => {};
  return (
    <div className="login">
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
