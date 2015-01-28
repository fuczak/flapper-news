var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
	title: String,
	link: String,
	upvotes: {type: Number, default: 0},
	comments: [{ type: mongooseSchema.Types.ObjectId, ref: 'Comment' }]
});

mongoose.model('Post', PostSchema);