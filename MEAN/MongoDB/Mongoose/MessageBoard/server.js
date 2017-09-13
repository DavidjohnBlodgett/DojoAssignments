// Dependencies...
const path = require('path');
// const fs = require('fs');
const dateformat = require('dateformat');

// EXPRESS
const express = require('express');
const app = express();
// app.use(express.static(path.join(__dirname, './static')));
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// EJS
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// JQUERY (if I want to server it static from a route...)
// const jquery = require('jquery');
// app.use(express.static(path.join(__dirname, './node_modules')));

// DATABASE SETUP
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/message_board', { useMongoClient: true });

// MODELS
var Schema = mongoose.Schema;
var PostSchema = mongoose.Schema({
    name: {type: String, required: true, minlength: 4},
    content: String,
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
},{ timestamps: true })
mongoose.model('Post', PostSchema);
var Post = mongoose.model('Post');

var CommentSchema = mongoose.Schema({
    _post: {type: Schema.Types.ObjectId, ref: 'Post'},
    name: {type: String, required: true, minlength: 4},
    content: String,
},{ timestamps: true })
mongoose.model('Comment', CommentSchema);
var Comment = mongoose.model('Comment');

// ROUTES
// res.render('pathToEjs',context);
// res.send('');
// res.redirect('url');

app.get('/', function(req, res) {
    // GET stuff...
    // READ ALL posts w/ comments...
    // Post.find({}, function(err, posts) {
    //     if(err){
    //         console.log('errors finding posts...');
    //     }else {
    //         res.render('index', { posts: posts });
    //     }
    // })

    Post.find({})
    .populate('comments')//.lean() used if you have a for(var n in foo){}
    .exec(function(err, posts) {
        if(err){
                console.log('errors finding posts...');
            }else {
                console.log('below is comments +++++++++');
                console.log(posts[0]);
                res.render('index', { posts: posts });
            }
        });

});

app.post('/posts', function(req, res) {
    // POST stuff...
    // CREATE post
    // console.log(req.body.name);
    // console.log(req.body.message);
    var post = Post({name: req.body.name, content: req.body.content});
    post.save( function(err) {
        if(err) {
            res.render('index', {title: 'you have errors!', errors: post.errors});
        } else {
           res.redirect('/');
        }
    });
    // promise attempt would have worked... just I was testing with neg case...
    // post.save()
    // .catch(function(err) {
    //     res.send('error when saving Post');
    // })
    // .then(function(err) {
    //     res.redirect('/');
    // });
});

app.post('/posts/:id', function(req, res) {
    // POST stuff...
    // CREATE post comment
    console.log(req.body.name);
    console.log(req.body.content);
    console.log(req.params.id);

    Post.findOne({_id: req.params.id}, function(err, post) {
        // data from form on the front end
        var comment = new Comment(req.body);
        //  set the reference like this:
        comment._post = post._id;
        // now save both to the DB
        comment.save(function(err){
                post.comments.push(comment);
                post.save(function(err){
                     if(err) {
                          console.log('Error');
                     } else {
                          res.redirect('/');
                     }
                 });
         });
    });

    // do I need to pass the postID???
    // var comment = Comment({name: req.body.name, content: req.body.message, _post: req.params.id});
    // comment.save( function(err) {
    //     if(err) {
    //         res.render('index', {title: 'you have errors!', errors: comment.errors});
    //     } else {
    //        res.redirect('/');
    //     }
    // });
    // res.send('I want to add a comment');
});

// Activate Server...
var server = app.listen(8000, function() {
    console.log("listening on port 8000");
});
