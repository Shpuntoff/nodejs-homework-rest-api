const { BadRequest } = require("http-errors");


const validationPost = (schema) => {
  return (req, _, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      throw new BadRequest("missing required fields");
    }
    next();
  };
};

module.exports = validationPost;