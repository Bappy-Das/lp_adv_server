const User = require("../models/users.model")

exports.signUpService = async (userinfo) => {
    const user = await User.create(userinfo);
    return user;
}
exports.loginService = async (userinfo) => {
    const user = await User.create(userinfo);
    return user;
}
exports.findUserBYEmail = async (email) => {
    return await User.findOne({ email });
}

