const {Contact} = require("../../models/contact")

const getAll = async (req, res, next) => {
  try {
    const { _id: owner } = req.user;
    const result = await Contact.find({ owner }, "-createdAt -updatedAt")
    .populate("owner", "email")

    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = getAll;