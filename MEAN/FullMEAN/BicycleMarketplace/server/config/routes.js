var users = require('../controllers/users');
var bikes = require('../controllers/bikes');
const path = require('path');

module.exports = function(app) {

    /////////////////////////////
    // -- NOTE: BEGIN USER ROUTES
    /////////////////////////////
    // CREATE
    app.post('/users', (req, res, next) => {
        users.create( req, res, next );
    });
    // create a bike under this user...
    app.post('/users/:id', (req, res, next) => {
        users.createBike( req, res, next );
    });
    // READ
    app.get('/users', (req, res, next) => {
        users.readAll( req, res, next );
    });
    app.get('/users/:id', (req, res, next) => {
        console.log('GET /users/:id');

        // TODO: handle getOne...

        users.readOne( req, res, next );
    });
    // UPDATE
    //
    // app.put('/users/:id', (req, res, next) => {
    //     console.log('PUT /users/:id');
    //
    //     // TODO: no update atm...
    //
    //     res.json(true)
    // });
    // DELETE
    app.delete('/users/:id', (req, res, next) => {
        console.log('DELETE /users/:id');
        // TODO:
        users.delete( req, res, next );
    });
    /////////////////////////////
    // -- NOTE: END USER ROUTES
    /////////////////////////////


    /////////////////////////////
    // -- NOTE: BEGIN BIKE ROUTES
    /////////////////////////////
    // CREATE
    app.post('/bikes', (req, res, next) => {
        bikes.create( req, res, next );
    });
    // READ
    app.get('/bikes', (req, res, next) => {
        bikes.readAll( req, res, next );
    });
    // app.get('/bikes/:id', (req, res, next) => {
    //     console.log('GET /bikes/:id');
    //
    //     // TODO: handle getOne...
    //
    //     bikes.readOne( req, res, next );
    // });
    // UPDATE
    //
    // app.put('/bikes/:id', (req, res, next) => {
    //     console.log('PUT /bikes/:id');
    //
    //     // TODO: no update atm...
    //
    //     res.json(true)
    // });
    // DELETE
    app.delete('/bikes/:id', (req, res, next) => {
        console.log('DELETE /bikes/:id');
        // TODO:
        users.delete( req, res, next );
    });
    /////////////////////////////
    // -- NOTE: END BIKE ROUTES
    /////////////////////////////

    // keep this last...
    app.all("*", (req,res,next) => {
            res.sendFile(path.resolve("./public/dist/index.html"))
    });
}
