import * as yup from "yup";

const SignUpSchema = yup.object().shape({
    user_password: yup
      .string()
      .required("Password is required")
      .min(7, "Must be 7 characters"),
    confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
    user_username: yup.string().required("Your Name is required"),
    user_email: yup.string().email().required("Valid email is required"),
  });
  
  export default SignUpSchema;