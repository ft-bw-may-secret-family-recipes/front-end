import React from "react";
import LoginForm from "./loginform";

function LogInPage(props) {
  const { formValues, submit, change, errors } = props;

  return (
    <div>
      <LoginForm
        formValues={formValues}
        submit={submit}
        change={change}
        errors={errors}
      />
    </div>
  );
}

export default LogInPage;
