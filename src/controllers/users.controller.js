const { signUpService, loginService, findUserBYEmail, getAllUsers } = require("../services/users.service");
const bcrypt = require('bcrypt');
const { generateToken } = require("../utils/token");
exports.signUp = async (req, res) => {
    try {
        const user = await signUpService(req.body);
        const { password: pwd, ...othersData } = user.toObject();
        res.status(200).json({
            status: "success",
            messgae: "User created successfully!",
            data: othersData,
        });

    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Couldn't create user ! ",
            error: error.message,
        });
    }
}

// For multiline comment use keyboard shortcut shift+alt+a
// for the pointer after multiline use extra *



/**
 * check email and password are given
 * load user with email or contact number
 * if not user. send res for create a account
 * if user. then catch password and campare with bycrpt
 * if pass wrong send res for wrong pass
 * if pass is ok. then check status active or not. 
 * if not then send res for make active by contact admin
 * if active then generate token
 * send user with token
*/
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(401).json({
                status: "failed",
                error: "Please provide your credtials"
            });
        }
        const user = await findUserBYEmail(email);
        if (!user) {
            return res.status(401).json({
                status: "failed",
                error: "No user found. Please create an account."
            });
        }
        // const passwordMatch = bcrypt.compareSync(password, user.password); this transfer to model
        const passwordMatch = user.comparePassword(password, user.password);
        if (!passwordMatch) {
            return res.status(403).json({
                status: "failed",
                error: "Password not correct."
            });
        }
        if (user.status != "active") {
            return res.status(401).json({
                status: "failed",
                error: "Your account is not active yet.contact 01222222222"
            });
        }
        const token = generateToken(user);
        const { password: pwd, ...othersData } = user.toObject();

        res.status(200).json({
            status: "success",
            messgae: "Logged in successfully!",
            data: {
                user: othersData,
                token
            }
        });

    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Log in failed! ",
            error: error.message,
        });
    }
}

// user persistance
exports.getMe = async (req, res) => {
    try {
        const user = await findUserBYEmail(req.user?.email);
        const { password: pwd, ...othersData } = user.toObject();
        res.status(200).json({
            status: "success",
            data: othersData
        });

    } catch (error) {
        res.status(500).json({
            status: "fail",
            error,
        })
    }
}

exports.getAllUsers = async (req, res) => {
    try {
        const users = await getAllUsers()
        res.status(200).json({
            status: "success",
            data: users
        })

    } catch (error) {
        res.status(500).json({
            status: "fail",
            error,
        })
    }
}
exports.logout = async (req, res, next) => {
    try {
        req.session.destroy((err) => {
            if (err) {
                throw err;
            }
            res.status(200).json({
                status: "success",
                message: "Logout successful",
            });
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            error,
        });
    }
};
