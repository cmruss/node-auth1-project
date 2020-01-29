const router = require('express').Router();
const bcrypt = require('bcryptjs');

const USERS = require('../users/users-model');

router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;

    USERS.add(user)
        .then(saved => {
            res.status(201).json(saved);
        })
        .catch(error => {
            res.status(500).json({ errorMessage: 'Could not add USER.' })
        });
});

router.post('/login', (req, res) => {
    let { username, password } = req.body;

    USERS.getBy({ username })
    .first()
    .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
            req.session.logged_in = true;
            req.session.user_id = user.id;
            res.status(200).json({ message: `Welcome ${user.username}!!` });
        } else {
            res.status(401).json({ message: 'Invalid credentials'})
        }
    })
    .catch(error => {
        res.status(500).json(error);
    });
});

module.exports = router;