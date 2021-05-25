import React from "react";
import LogInPage from "./Login";
import SignUpForm from "./signupform";

const SignUpPage = () => {
  const [formValues, setFormValues] = useState({
    user_username: "",
    user_password: "",
    user_email: "",
  });

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

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const formSubmit = () => {
    const newOrder = {
      user_name: formValues.user_name,
      user_password: formValues.user_password,
      user_email: formValues.user_email,
    };
    postNewOrder(newOrder);
  };

  return (
    <div>
      <SignUpForm
        formValues={formValues}
        submit={formSubmit}
        change={inputChange}
        errors={formErrors}
      />
      <Route>
        <LogInPage
          formValues={formValues}
          submit={formSubmit}
          change={inputChange}
          errors={formErrors}
        />
      </Route>
    </div>
  );
};
export default SignUpPage;
