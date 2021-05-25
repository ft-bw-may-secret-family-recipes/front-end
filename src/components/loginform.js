import React from "react";

function LogInForm(props) {
  const { formValues, submit, change, errors } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onChange = (evt) => {
    const { name, value, checked, type } = evt.target;
    change(name, valueToUse);
  };
  return (
    <form id="logInForm" className="formContainer" onsubmit={onSubmit}>
      <div className="errors">
        <div>{errors.user_username}</div>
        <div>{errors.user_password}</div>
        <div>{errors.user_email}</div>
      </div>
      <h1>Welcome! Log in below.</h1>
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
      <Link to="/">
        <button>Login</button>
      </Link>
    </form>
  );
}

export default LogInForm;
