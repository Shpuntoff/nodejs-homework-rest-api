const { User } = require("../../models/user");
const { RequestError } = require("../../helpers");

const logout = async (req, res, next) => {
    try{
        const { _id } = req.user;
        const result = await User.findByIdAndUpdate(_id, { token: null });
        if(!result){
            throw RequestError (401, "Not authorized")
        }
        res.json({
        message: "Logout success",
        }); 
    } catch (error){
        next(error)
    }
  
};

module.exports = logout;