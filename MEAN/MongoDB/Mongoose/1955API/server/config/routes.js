var persons = require('../controllers/persons');

module.exports = function(app) {
    app.get('/remove/:name', function(req, res) {
        persons.delete(req, res);
    })
    app.get('/new/:name', function(req, res) {
        persons.create(req,res);
    })
    app.get('/:name', function(req, res) {
        persons.readOne(req, res);
    })
    app.get('/', function(req, res) {
        persons.readAll(req, res);
    })
}
