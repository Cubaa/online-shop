import { ObjectShape } from "yup/lib/object";
import { RequiredStringSchema } from "yup/lib/string";
import { AnyObject } from "yup/lib/types";

export interface IFormSchema extends ObjectShape {
  email: RequiredStringSchema<string | undefined, AnyObject>;
  password: RequiredStringSchema<string | undefined, AnyObject>;
}
