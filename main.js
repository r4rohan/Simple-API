var express =  require('express');
var app =  express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());

Genre =require('./models/genre');
Book =require('./models/book');
//connect to mongoose
mongoose.connect('mongodb://localhost/bookstores'); 
var db = mongoose.connection; //db object

//setup route for landing page
app.get('/', function(req, res){     // .get()-this is how we handle request; / represents the homepage
	//req = request; res = response
	res.send('Please use /api.books or /api/genres'); //send everything to browser whatever we put here
}); 

app.get('/api/genres', (req, res) => {
	Genre.getGenres((err, genres) => {
		if(err){
			throw err;
		}
		res.json(genres);
	});
});

// addgenre
app.post('/api/genres', (req, res) => {
	var genre = req.body;
	Genre.addGenre(genre, (err, genre) => {
		if(err){
			throw err;
		}
		res.json(genre);
	});
});

//update genre
app.put('/api/genres/:id', (req, res) => {
	var id = req.params._id;
	var genre = req.body;
	Genre.updateGenre(id, genre, {}, (err, genre) => {
		if(err){
			throw err;
		}
		res.json(genre);
	});
});

// =====================================================Books Section=========================================

// get books
app.get('/api/books', (req, res) => {
	Book.getBooks((err, books) => {
		if(err){
			throw err;
		}
		res.json(books);
	});
});

//get books by id
app.get('/api/books/:_id', (req, res) => {
	Book.getBookById(req.params._id, (err, book) => {
		if(err){
			throw err;
		}
		res.json(book);
	});
});

//add books
app.post('/api/books', (req, res) => {
	var book = req.body;
	Book.addBook(book, (err, book) => {
		if(err){
			throw err;
		}
		res.json(book);
	});
});

app.listen(3000); //port on which we want it to listen
console.log('Starting on 3000');