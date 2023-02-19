const authenticate = require("./authenticate");
const validationBody = require("./validationBody");
const validateId = require("./validateId");
const validationUpdate = require("./validationUpdate");
const validationPost = require("./validationPost");
const upload = require("./upload");



module.exports = {
    authenticate,
    validationBody,
    validateId,
    validationUpdate,
    validationPost,
    upload
}