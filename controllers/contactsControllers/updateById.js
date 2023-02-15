const {Contact} = require("../../models/contact")
const {contactSchema, RequestError} = require("../../helpers");

const updateById = async (req, res, next) => {
    try {
      const {error} = contactSchema.validate(req.body);
      if(error) {
        throw RequestError(400, "missing fields");
      }
      const { contactId } = req.params;
      const result = await Contact.findByIdAndUpdate(contactId, req.body);
      if(!result) {
        throw RequestError(404, "Not found");
      }
      res.status(200).json(result)
    } catch(error){
      next(error)
    }
  }

  module.exports = updateById;