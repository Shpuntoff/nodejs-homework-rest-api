const {Contact} = require("../../models/contact");

const removeById = async (req, res) => {
      const { contactId } = req.params;
      const result = await Contact.findByIdAndRemove(contactId);
      
      res.status(200).json({ 
        message: "Contact deleted",
        data: {result} 
      });
  };

  module.exports = removeById;