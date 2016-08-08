var express = require('express'),
	http = require('http'),
	path = require('path'),
	favicon = require('express-favicon'),
	bodyParser   = require('body-parser');

var Post = require('./Post');


var app = express();

var port = process.env.PORT || 3000;
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req, res){
	
	Post.find(function(err, posts){
		if (err) {
			res.send(500, 'There was an error')
		} else {
			res.render('index', {
				posts: posts
			});
		}
	});
});

app.get('/post', function(req, res){
	res.render('postform');
});

app.post('/create', function(req, res){

	var post = new Post({
		title: req.body.title,
		content: req.body.content
	});
	console.log(post);
	post.save(function(err, model){
		if (err) {
			res.send(500, 'Sorry we could not save your post');
		} else {
			res.redirect('/');

		}
	})
});



app.listen(port);
console.log('Rocking out on ' + port);



