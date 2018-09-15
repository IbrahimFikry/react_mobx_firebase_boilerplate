import React from "react";

const SignUpView = ({ onSubmit }) => {
  return (
    <div>
      <h1>Log in</h1>
      <form onSubmit={onSubmit}>
        <label>Email
          <div><input name="email" type="email" placeholder="Email"/></div>
        </label>
        <label>Password
          <div><input name="password" type="password" placeholder="Password"/></div>
        </label>

        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default SignUpView;
