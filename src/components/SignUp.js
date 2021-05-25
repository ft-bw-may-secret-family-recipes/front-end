import React, { useEffect, useState } from "react";
import LogIn from "./Login";
import SignUpForm from "./SignUpForm";
import signupSchema from "./signupSchema";
import { Route } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";
import * as yup from "yup";

const initialFormValues = {
  user_username: "",
  user_password: "",
  user_email: "",
}

const initialFormErrors = {
  user_username: "",
  user_password: "",
  user_email: "",
}

const SignUpPage = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(true);

  const { push } = useHistory()


  //   const postNewOrder = (newOrder) => {
  //     axios
  //       .post("https://reqres.in/api/users", newOrder)
  //       .then((res) => {
  //         setOrders([res.data, ...orders]);
  //       })
  //       .catch((err) => {
  //         console.timeLog(err);
  //       })
  //       .finally(() => {
  //         setFormValues(initialFormValues);
  //         console.log(setFormValues);
  //       });
  //   };

  useEffect(() => {
    signupSchema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  const inputChange = (name, value) => {
    yup
      .reach(signupSchema, name)
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
    e.preventDefault()
    const data = {name: formValues.name, email: formValues.email, password: formValues.password, phone: formValues.phone,}
    axios
    .post("https://ft-bw-may-secret-family-recipe.herokuapp.com/api/auth/register", data)
    .then((resObj) => {
      console.log("signup res", resObj)
      push("/login")
      //route to plant collection
    })
    .catch(err => console.log({err}))
  }
  return (
    <div>
      <SignUpForm
        formValues={formValues}
        submit={submitForm}
        change={inputChange}
        // errors={formErrors}
      />
      {/* <Route>
        <LogIn
          formValues={formValues}
          submit={formSubmit}
          change={inputChange}
          // errors={formErrors}
        />
      </Route> */}
    </div>
  );
};
export default SignUpPage;
