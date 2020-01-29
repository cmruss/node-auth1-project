module.exports = (req, res, next) => {
    if (req.session && req.session.logged_in) {
        next();
    } else {
        res.status(401).json({ message: 'You shall not pass!' })
    }
};