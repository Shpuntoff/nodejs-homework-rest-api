const { User } = require("../../models/user");
const { RequestError } = require("../../helpers");

const currentUser = async (req, res, next) => {
    try{
        const { email } = req.user;
        const user = await User.findOne({ email });
        const { subscription } = user;
        if(!user) {
            throw RequestError (401, "!!!Not authorized")
        }
        res.json({
            status: "success",
            code: 200,
            data: {
                user: {
                email,
                subscription,
                },
            },
        })
    } catch (error) {
        next (error)
    }
};

module.exports = currentUser;