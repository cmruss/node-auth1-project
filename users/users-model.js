const db = require('../data/db-config');

module.exports = {
    add,
    get,
    getBy,
    getById,
};

function add(user) {
    return db('users')
    .insert(user, 'id')
    .then(ids => {
        const [id] = ids;
        return getById(id);
    });
};

function get() {
    return db('users').select('id', 'username');
};

function getBy(prop) {
    return db('users')
    .select('id', 'username', 'password')
    .where(prop)
    .first();
};

function getById(id) {
    return db('users')
    .select('id', 'username')
    .where({ id })
    .first();
}