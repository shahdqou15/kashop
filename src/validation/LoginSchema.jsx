import * as yup from "yup";

export let LoginSchema = yup.object({
    email: yup.string().email("email must be a valid email").required("email is required"),
    password: yup.string().required("password is required").min(8, "password must be at least 8 chracters")
        .matches(/[a-z]/, "passwordmust contain at least one lowercase letter")
        .matches(/[A-Z]/, "passwordmust contain at least one uppercase letter")
        .matches(/[0-9]/, "passwordmust contain at least one number")
        .matches(/[@$!%*?&]/, "passwordmust contain at least one special chracter"),
})