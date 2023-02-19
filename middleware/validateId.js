const { isValidObjectId } = require("mongoose");
const { NotFound } = require("http-errors");

const validateId = (req, res, next) => {
  const { id } = req.params;
  const isValid = isValidObjectId(id);

  if (!isValid) {
    next(NotFound(`Contact with id(${id}) not found`));
    return;
  }
  next();
};

module.exports = validateId;