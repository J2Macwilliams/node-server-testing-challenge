const db = require('../data/dbConfig.js');
module.exports = {
get,
getBy,
add,
remove,
};

function get() {
return db('pickles');
}

function getBy(id) {
return db('pickles')
.where({ id })
.first();
}

function add(post) {
return db('pickles')
.insert(post)
.then(ids => {
return getById(ids[0]);
});
}

function remove(id) {
return db('pickles')
.where('id', id)
.del();
}