/**
 * 
 * to check user permission to access the route
 * 
 * first of all get all role using spread operator
 * then compare it with the req.user.role user are included in the ...role
 * if not then call next()
 * if not include then send error res
 * 
 */

module.exports = (...role) => {
    return (req, res, next) => {
        const userRole = req.user.role;
        if (!role.includes(userRole)) {
            return res.status(403).json({
                status: "fail",
                error: "You are not authorized to access this"
            })
        }
        next();
    };
}