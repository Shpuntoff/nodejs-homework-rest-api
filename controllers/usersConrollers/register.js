const bcrypt = require("bcryptjs");
const { User } = require("../../models/user");
const { RequestError, userSchema } = require("../../helpers");

const register = async(req, res, next) =>{
    const {email, password} = req.body;
    try{
        const {error} = userSchema.validate(req.body);
        if(error) {
            throw RequestError(400, "Error from Joi or another validation library");
        };
        
        const user = await User.findOne({ email });
        if (user) {
            throw RequestError(409, `email "${email}" in use`);
        }
        const hashPassword = await bcrypt.hash(password, 10)
        const result = await User.create({ email, password: hashPassword });
        res.status(201).json({
            user:{
                email: result.email,
                subscription: result.subscription
            }
        })
    } catch (error){
        next(error)
    }
};

module.exports = register;