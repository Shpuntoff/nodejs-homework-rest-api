const { User } = require("../../models/user");
const { RequestError } = require("../../helpers");

const verifyEmail = async (req, res) => {
  const { verficationToken: verificationToken } = req.params;
  const user = await User.findOne({ verificationToken });
  // console.log(user)
  if (!user) {
    throw RequestError(404, "Not Found verification token");
  }
  await User.findByIdAndUpdate(user._id, {
    verify: true,
    verificationToken: "",
  });
  res.json({
    message: "Verify email successfully",
  });
};

module.exports = verifyEmail;