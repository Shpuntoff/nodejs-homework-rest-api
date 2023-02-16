const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../../models/user");
const { RequestError, userSchema } = require("../../helpers");
// require("dotenv").config();

const { SECRET_KEY } = process.env;

const login = async (req, res, next) =>{
    const {email, password} = req.body;
    try {
        const {error} = userSchema.validate(req.body);
        if(error) {
            throw RequestError(400, "Error from Joi or another validation library");
        };

        const user = await User.findOne({ email });
        if(!user) {
            throw RequestError(401, "Email or password is wrong")
        }


        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            throw RequestError(401, "Email or password is wrong")
        }
        
        const payload = {
            id: user._id,
          };
        const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
        const loggedInUser = await User.findByIdAndUpdate(user._id, { token });

        res.status(200).json({
            token: token,
            user: {
                email: loggedInUser.email,
                subscription: loggedInUser.subscription,
            },
        })

    } catch (error) {
        next (error)
    }
};

module.exports = login;