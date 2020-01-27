const router = require('express').Router();

const USERS = require('./users-model');

router.get('/', (req, res) => {
    USERS.get()
    .then(users => {
        res.status(200).json(users);
    })
    .catch(error => {
        res.status(500).json({ error: 'Could not retrieve USERS.'})
    });
});

module.exports = router;