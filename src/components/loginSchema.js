import * as yup from 'yup'

const loginSchema = yup.object().shape({
    user_username: yup.string()
    .required('Username is required'),
    user_password: yup.string()
    .required('Password is required'),
})

export default loginSchema