import React from "react";
import LogInPage from "./Login";

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
    change(name, valueToUse);
  };

  return (
    <form id="signUpForm" className="formContainer" onsubmit={onSubmit}>
      <div className="errors">
        <div>{errors.user_username}</div>
        <div>{errors.user_password}</div>
        <div>{errors.user_email}</div>
      </div>
      <h1>Sign up Below</h1>
      <label>Username:</label>
      <input
        id="username-input"
        value={formValues.user_name}
        onChange={onChange}
        name="username"
        type="text"
      />
      <label>Password:</label>
      <input
        id="password-input"
        value={formValues.user_password}
        onChange={onChange}
        name="password"
        type="text"
      />
      <label>Email:</label>
      <input
        id="email-input"
        value={formValues.user_email}
        onChange={onChange}
        name="email"
        type="text"
      />
      <Link to="/login">
        <button>Create New User</button>
      </Link>
      <Route exact path="/login">
        <LogIn />
      </Route>
    </form>
  );
}
