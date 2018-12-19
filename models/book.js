var mongoose = require('mongoose');

// Genre Schema for application
var bookSchema = mongoose.Schema({
	title:{
		type: String,
		required: true
	},
	genre:{
		type: String,
		required: true
	},
	description:{
		type: String,
	},
	author:{
		type: String,
		required: true
	},
	publisher:{
		type: String,
	},
	pages:{
		type: String,
	},
	image_url:{
		type: String,
	},
	buy_url:{
		type: String,
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

var Book = module.exports = mongoose.model('Book', bookSchema); 

// Get book
//due to this it will access from the outside
module.exports.getBooks = function(callback, limit){
	Book.find(callback).limit(limit);
} 

// Get Book by id
module.exports.getBookById = function(id, callback, limit){
	Book.findById(id, callback);
} 

//Add books
module.exports.addBook = (book, callback) => {
	Book.create(book, callback);
}