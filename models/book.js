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

//update book
module.exports.updateBook = (id, book, options, callback) => {
	var query = {_id: id};
	var update = {
		title: book.title,
		genre: book.genre,
		description: book.description,
		author: book.author,
		publisher: book.publisher,
		pages: book.pages,
		image_url: book.image_url,
		buy_url: book.buy_url
	}
	Book.findOneAndUpdate(query, update, options, callback);
}

//delete book
module.exports.removeBook = (id, callback) => {
	var query = {_id: id};
	Book.remove(query, callback);
} 