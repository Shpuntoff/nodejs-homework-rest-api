const {Contact} = require("../../models/contact");

const getAll = async (req, res) => {
    const { _id: owner } = req.user;
    console.log(owner);
    const result = await Contact.find({ owner }, "-createdAt -updatedAt")
    .populate("owner", "email")
    res.status(200).json(result);
  
};

module.exports = getAll;