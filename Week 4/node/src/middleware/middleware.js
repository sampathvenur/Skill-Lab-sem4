const jwt = require('jsonwebtoken');
const jwt_secret = "TCE";

const authorization = async (req, res, next) => {
    try {
        const token = req.header('authorization');
        if (!token) {
            return res.status(401).send({ msg: "Access Denied" });
        }

        const checkStudent = jwt.verify(token, jwt_secret);
        req.USN = checkStudent.USN;
        next();
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Invalid Token",
            error: error.message
        });
    }
};

module.exports = authorization;
