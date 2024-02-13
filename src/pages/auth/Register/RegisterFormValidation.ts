import * as yup from "yup";
import { phoneNumberRegex } from "../Login/LoginValidation";

export const RegisterValidationSchema = yup.object().shape({
  RegisterphoneNumber: yup
    .string()
    .matches(phoneNumberRegex, "invalid phone number")
    .required("required"),
  password: yup.string().required("required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "passwords don't match")
    .required("required"),
});
