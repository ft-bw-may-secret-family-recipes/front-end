import React from "react";
import LogIn from "./Login";
import { Route, Link } from "react-router-dom";

function SignUpForm(props) {
  const { formValues, submit, change, errors } = props;

  //////will need onsubmit, errors, onChange
  ////.post to an api---that's what onsubmit/submit does i think

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onChange = (evt) => {
    const { name, value, checked, type } = evt.target;
    change(name, value);
  };

  return (
    <form id="signUpForm" className="formContainer" onsubmit={onSubmit}>
      <div className="errors">
        {/* <div>{errors.user_username}</div>
        <div>{errors.user_password}</div>
        <div>{errors.user_email}</div> */}
      </div>
      <h1>Sign up Below</h1>
      <label>Username:</label>
      <input
        id="username-input"
        value={formValues.user_name}
        onChange={onChange}
        name="user_username"
        type="text"
      />
      <label>Password:</label>
      <input
        id="password-input"
        value={formValues.user_password}
        onChange={onChange}
        name="user_password"
        type="text"
      />
      <label>Email:</label>
      <input
        id="email-input"
        value={formValues.user_email}
        onChange={onChange}
        name="user_email"
        type="text"
      />
      <button>Create New User</button>
    </form>
  );
}

export default SignUpForm;
