 import * as yup from "yup";
 
 export let registerSchema = yup.object({
    userName: yup.string().required("userName is required").min(3, "userName must be at least 3 chracters")
    .matches(/[a-zA-Z0-9_-]+$/,"userName must contain only letters, numbers ,underscores and hyphens"),
    fullName: yup.string().required("fullName is required"),
    email: yup.string().email("email must be a valid email").required("email is required"),
    phoneNumber: yup.string().required("phone number is required"),
    password: yup.string().required("password is required").min(8, "password must be at least 8 chracters")
    .matches(/[a-z]/,"passwordmust contain at least one lowercase letter")
    .matches(/[A-Z]/,"passwordmust contain at least one uppercase letter")
    .matches(/[0-9]/,"passwordmust contain at least one number")
    .matches(/[@$!%*?&]/,"passwordmust contain at least one special chracter"),

  });