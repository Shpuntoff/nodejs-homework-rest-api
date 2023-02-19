const { Schema, model } = require("mongoose");
const Joi = require("joi");

const emailRegexp = /^[\w.]+@[\w]+.[\w]+$/;

const userSchema = Schema({
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    match: emailRegexp,
    unique: true,
  },
  subscription: {
    type: String,
    enum: ["starter", "pro", "business"],
    default: "starter",
  },
  token: {
    type: String,
    default: null,
  },
},{ versionKey: false, timestamps: true });

const registerSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).max(12).required(),
  repeatPassword: Joi.ref("password"),
});

const loginSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});

const User = model("user", userSchema);
const schemas = {
  registerSchema,
  loginSchema,
}

module.exports = {
  User,
  schemas
};
