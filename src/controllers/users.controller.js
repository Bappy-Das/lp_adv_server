const { signUpService } = require("../services/users.service");

exports.signUp = async (req, res) => {
    try {
        const user = await signUpService(req.body);
        res.status(200).json({
            status: "success",
            messgae: "User created successfully!",
            data: user,
        });

    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Couldn't create user ! ",
            error: error.message,
        });
    }
}