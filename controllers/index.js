const { getAll, getById, add, removeById, updateById, updateFavoriteById } = require("./contactsControllers");
const { register, login, logout, currentUser, updateAvatar, verifyEmail, resendVerifyEmail} = require("./usersConrollers");

module.exports = {
  getAll,
  getById,
  add,
  removeById,
  updateById,
  updateFavoriteById,
  register,
  login,
  logout,
  currentUser,
  updateAvatar,
  verifyEmail,
  resendVerifyEmail
};
