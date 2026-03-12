import * as yup from "yup";

export let ForgetPasswordSchema = yup.object({
     email: yup.string().email("email must be a valid email").required("email is required"),
})