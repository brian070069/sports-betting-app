import * as yup from "yup";

export const phoneNumberRegex = /^(?:\+254|0)[17]\d{8}$/;

export const LoginValidationSchema = yup.object().shape({
  LoginphoneNumber: yup
    .string()
    .matches(phoneNumberRegex, "invalid phone number")
    .required("required"),
  password: yup.string().required("required"),
});
