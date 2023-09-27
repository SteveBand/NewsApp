import Joi from "joi";

const passwordValidation =
  "^(?=.*?[A-Z])(?=.*?[a-z])(?=(.*?[0-9]){4})(?=.*?[#?!@$%^&*-]).{8,}$";

export const schema = Joi.object({
  userName: Joi.string().min(3).required(),
  password: Joi.string()
    .pattern(new RegExp(passwordValidation))
    .min(8)
    .required()
    .messages({
      "string.pattern.base":
        "Password pattern doesn't match make sure you are using 1 upperCase, 1 lowerCase, 4 numbers, 1 symbol and total length of 8",
    }),
  firstName: Joi.string().min(2).required(),
  lastName: Joi.string().min(2).required(),
  fullName: Joi.string().allow(null, ""),
  middleName: Joi.string().min(0),
  phone: Joi.string().min(5).required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  state: Joi.string().min(0),
  imgUrl: Joi.string().min(0),
  imgAlt: Joi.any(),
  country: Joi.string().min(0),
  city: Joi.string().min(0),
  houseNumber: Joi.string().min(0),
  zip: Joi.string().min(0),
  street: Joi.string().min(0),
  business: Joi.boolean().default(true),
});
