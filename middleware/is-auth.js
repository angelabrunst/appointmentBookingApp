const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const authHeader = req.get('Authorization');
    if (!authHeader) {
        req.isAuth = false;
        console.log("Not authHeader");
        return next();
    }
    const token = authHeader.split(' ')[1];
    if (!token || token === ' ') {
        req.isAuth = false;
        console.log("No Token");
        return next();
    }
    let decodedToken;
    try {
        decodedToken = jwt.verify(token, 'somesupersecretkey');
        console.log("In the air");
        console.log("this is the decoded token: " + decodedToken);
    } catch (err) {
        req.isAuth = false;
        console.log("Decoding token error");
        return next();
    }
    if (!decodedToken) {
        req.isAuth = false;
        console.log("Token not decoded");
        return next();
    }
    req.isAuth = true;
    req.userId = decodedToken.userId;
    console.log("Authorized token: " + decodedToken);
    next();
}