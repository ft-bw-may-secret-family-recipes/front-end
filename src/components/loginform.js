import React from "react";
import { Route, Link } from "react-router-dom";
import StyledPage from "./StyledComponents";

function LogInForm(props) {
  const { formValues, submit, change, errors } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onChange = (evt) => {
    const { name, value, checked, type } = evt.target;
    change(
      name
      // valueToUse
    );
  };
  return (
    <StyledPage>
      <div
        id="logInForm"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1481070555726-e2fe8357725c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80')`,
        }}
      >
        <form className="formContainer" onsubmit={onSubmit}>
          <div className="errors">
            {/* <div>{errors.user_username}</div>
        <div>{errors.user_password}</div>
        <div>{errors.user_email}</div> */}
          </div>
          <h1>Welcome! Log in below.</h1>
          <div className="spacingDiv">
            <label>Username:</label>
            <input
              id="username-input"
              value={formValues.user_username}
              onChange={onChange}
              name="user_username"
              type="text"
            />
          </div>
          <div className="spacingDiv">
            <label>Password:</label>
            <input
              id="password-input"
              value={formValues.user_password}
              onChange={onChange}
              name="user_password"
              type="text"
            />
          </div>
          {/* <label>Email:</label>
      <input
        id="email-input"
        value={formValues.user_email}
        onChange={onChange}
        name="email"
        type="text"
      /> */}
          <div className="spacingDiv">
            <button>Login</button>
          </div>
        </form>
      </div>
    </StyledPage>
  );
}

export default LogInForm;
