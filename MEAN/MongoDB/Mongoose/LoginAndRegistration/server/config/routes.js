var users = require('../controllers/users');

module.exports = function(app) {
    app.get('/users/delete/:name', function(req, res) {
        users.delete(req, res);
    })
    app.post('/users/new', function(req, res) {
        users.create(req,res);
    })
    app.get('/users/:name', function(req, res) {
        users.readOne(req, res);
    })
    app.get('/users', function(req, res) {
        users.readAll(req, res);
    })
    app.get('/', function(req, res) {
        users.isLoggedin(req, res);
    })
}
