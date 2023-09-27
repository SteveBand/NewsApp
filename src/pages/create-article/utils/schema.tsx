import Joi from "joi";

export const schema = Joi.object({
  title: Joi.string().min(6).max(30).messages({
    "string.min": "minimum of 6 letters",
    "string.empty": "headline canno't be left empty",
    "string.max": "maximum of 30 letters",
  }),
  subtitle: Joi.string().min(4).max(15),
  imgUrl: Joi.string().min(0),
  description: Joi.string().min(50).max(200),
  zip: Joi.any(),
  houseNumber: Joi.any(),
  street: Joi.any(),
  city: Joi.any(),
  country: Joi.any(),
  state: Joi.any(),
  web: Joi.any(),
  email: Joi.any(),
  phone: Joi.any(),
  imgAlt: Joi.any(),
});
