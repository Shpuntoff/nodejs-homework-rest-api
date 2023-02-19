const { getAll, getById, add, removeById, updateById, updateFavoriteById } = require("./contactsControllers");
const { register, login, logout, currentUser, updateAvatar} = require("./usersConrollers");

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
  updateAvatar
};
