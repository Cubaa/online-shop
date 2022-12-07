import { IFormSchema } from "../../../interfaces/form.interface";
import * as Yup from "yup";
import { InputErrors } from "../../../enums/form-error.enum";

export const loginSchema: Pick<IFormSchema, "email" | "password"> = {
  email: Yup.string()
    .required(InputErrors.Email)
    .min(3, InputErrors.Min3)
    .email(InputErrors.InvalidEmail),

  password: Yup.string()
    .required(InputErrors.Password)
    .min(3, InputErrors.Min3),
};
