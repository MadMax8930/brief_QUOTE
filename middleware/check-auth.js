const jwt = require('jsonwebtoken');

function checkAuth(req, res, next) {
    try {
        const token = req.headers.authorization.split(" ")[1]; //( Bearer ######################## ) token
        const decodedToken = jwt.verify(token, process.env.JWT_KEY); //Decode Token (env variable file contains secret token)    
        req.userData = decodedToken;
        console.log(decodedToken);
        next();
    } catch (err) {
        return res.status(401).json({
            'message': "Invalid or expired token provided!",
            'error': err
        });
    }
}

module.exports = {
    checkAuth: checkAuth
}