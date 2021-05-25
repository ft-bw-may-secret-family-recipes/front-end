import React, { useState } from "react";
import LoginForm from "./LoginForm";
import loginSchema from "./loginSchema"
import * as yup from "yup";
import axios from "axios";
import { useHistory } from "react-router";

const initialFormValues = {
  user_username: "",
  user_password: "",
};
const initialFormErrors = {
  user_username: "",
  user_password: "",
};

const LogIn = (props) => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const { push } = useHistory();
  
  
  const inputChange = (name, value) => {
    yup
      .reach(loginSchema, name)
      .validate(value)
      .then(() => {
        setFormErrors({ ...formErrors, [name]: "" });
      })
      .catch((err) => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] });
      });
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://ft-bw-may-secret-family-recipe.herokuapp.com/api/auth/login",
        formValues
      )
      .then((res) => {
        console.log("login resp", res, res.data);
        localStorage.setItem("token", res.data.token);
        push("/dashboard");
      })
      .catch((error) => console.log({ error }));
    console.log();
  };

  return (
    <div>
      <LoginForm
        formValues={formValues}
        submit={submitForm}
        change={inputChange}
        errors={formErrors}
      />
    </div>
  );
}

export default LogIn;
