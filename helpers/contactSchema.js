const Joi = require("joi");

const contactSchema = Joi.object({
  name: Joi.string()
  .alphanum()
  .min(3)
  .max(30)
  .required(),

  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),

  phone: Joi.string()
    .pattern(/^[0-9]+$/, "numbers")
    .min(3)
    .max(16)
    .required(),
});

module.exports = contactSchema;
