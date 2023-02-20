const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const { nanoid } = require("nanoid");

const { User } = require("../../models/user");
const { RequestError } = require("../../helpers");
const { sendEmail } = require("../../helpers");

const register = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user) {
    throw RequestError (409, `email "${email}" in use`);
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const avatarURL = gravatar.url(email);
  const verificationToken = nanoid();
  const result = await User.create({ email, password: hashPassword, avatarURL, verificationToken });
  const data = {
    to: email,
    subject: "Сonfirmation of registration",
    html: `<a href="https://localhost:${process.env.PORT}/api/users/verify/${verificationToken}" target="_blank">Press to confirm email</a>`,
  };
  await sendEmail(data);
  res.status(201).json({
    user: {
      email: result.email,
      subscription: result.subscription,
      avatarURL: result.avatarURL,
    },
  });
};

module.exports = register;
