const User = require("../models/users.model")

exports.signUpService = async (userinfo) => {
    const user = await User.create(userinfo);
    return user;
}