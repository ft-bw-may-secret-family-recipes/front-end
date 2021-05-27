import React from "react";
import LogIn from "./Login";
import { Route, Link } from "react-router-dom";
import StyledPage from "./StyledComponents";

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
    <StyledPage>
      <form id="signUpForm" className="formContainer" onsubmit={onSubmit}>
        <div className="errors">
          {/* <div>{errors.user_username}</div>
        <div>{errors.user_password}</div>
        <div>{errors.user_email}</div> */}
        </div>
        <h1>Sign up Below</h1>
        <div className="spacingDiv">
          <label>Username:</label>
          <br></br>
          <input
            id="username-input"
            value={formValues.user_name}
            onChange={onChange}
            name="user_username"
            type="text"
          />
        </div>
        <div className="spacingDiv">
          <label>Password:</label>
          <br></br>
          <input
            id="password-input"
            value={formValues.user_password}
            onChange={onChange}
            name="user_password"
            type="text"
          />
        </div>
        <div className="spacingDiv">
          <label>Email:</label>
          <br></br>
          <input
            id="email-input"
            value={formValues.user_email}
            onChange={onChange}
            name="user_email"
            type="text"
          />
        </div>
        <div className="spacingDiv">
          <button>Sign up</button>
        </div>
      </form>
    </StyledPage>
  );
}

export default SignUpForm;
