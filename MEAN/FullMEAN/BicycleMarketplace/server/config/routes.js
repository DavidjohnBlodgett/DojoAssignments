// TODO: HANDLE THE CONTROLER AND MONGOOSE!!!
// var users = require('../controllers/users');
const path = require('path');

module.exports = function(app) {
    // TODO: HANDLE THESE ROUTES
    app.get('/users', (req, res, next)=>{
        res.json(true)
    });
    app.get('/users/:id', (req, res, next)=>{
        res.json(true)
    });
    app.post('/users', (req, res, next)=>{
        res.json(true)
    });
    app.put('/users/:id', (req, res, next)=>{
        res.json(true)
    });
    app.delete('/users/:id', (req, res, next)=>{
        res.json(true)
    });
    // keep this last...
    app.all("*", (req,res,next) => {
            res.sendFile(path.resolve("./public/dist/index.html"))
    });
}
