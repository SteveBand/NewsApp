import Joi from "joi";

export const schema = Joi.object({
  firstName: Joi.string().min(2).required(),
  lastName: Joi.string().min(2).required(),
  middleName: Joi.any(),
  phone: Joi.string().min(5).required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  state: Joi.any(),
  imgUrl: Joi.any(),
  imgAlt: Joi.any(),
  country: Joi.any(),
  city: Joi.any(),
  houseNumber: Joi.any(),
  zip: Joi.any(),
  street: Joi.any(),
});
