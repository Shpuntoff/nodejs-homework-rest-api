const authenticate = require("./authenticate");
const validationBody = require("./validationBody");
const validateId = require("./validateId");
const validationUpdate = require("./validationUpdate");
const validationPost = require("./validationPost");


module.exports = {
    authenticate,
    validationBody,
    validateId,
    validationUpdate,
    validationPost
}