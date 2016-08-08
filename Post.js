var mongoose = require('mongoose');

mongoose.connect('mongodb://jesse:ichiban987@ds011933.mlab.com:11933/jlab_parse');


var postSchema = mongoose.Schema({
	title: String,
	content: String
});


var Post = mongoose.model('Post', postSchema);


module.exports = Post;