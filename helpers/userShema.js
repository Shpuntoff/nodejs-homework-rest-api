const Joi = require("joi");

const userSchema = Joi.object({
    email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),

    password: Joi.string()
    .min(6)
    .max(12)
    .required(),
});

module.exports = userSchema;