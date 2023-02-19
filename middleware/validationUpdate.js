const { BadRequest } = require("http-errors");

const validationUpdate = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      throw new BadRequest("missing fields");
    }
    next();
  };
};

module.exports = validationUpdate;