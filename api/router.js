const router = require('express').Router();
const authRouter = require('../auth/auth-router');

router.use('/auth', authRouter);

router.get('/', (req,res) => {
    res.json({ success: 'you have connected to the api'});
});

module.exports = router;