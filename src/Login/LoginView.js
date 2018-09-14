import React from "react";

const SignUpView = ({ onSubmit }) => {
  return (
    <div>
      <h1>Log in</h1>
      <form onSubmit={onSubmit}>
        <label>
          Email
          <input
            name="email"
            type="email"
            placeholder="Email"
          />
        </label>
        <label>
          Password
          <input
            name="password"
            type="password"
            placeholder="Password"
          />
        </label>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default SignUpView;
