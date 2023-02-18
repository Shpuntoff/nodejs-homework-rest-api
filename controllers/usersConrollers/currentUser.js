const { User } = require("../../models/user");

const currentUser = async (req, res) => {
  const { email } = req.user;
  const user = await User.findOne({ email });
  const { subscription } = user;
  res.status(200).json({
      user: {
        email,
        subscription,
      }
  });
};

module.exports = currentUser;