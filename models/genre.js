var mongoose = require('mongoose');

// Genre Schema for application
var genreSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

var Genre = module.exports = mongoose.model('Genre', genreSchema);﻿ 

// Get Genres
//due to this it will access from the outside
module.exports.getGenres = function(callback, limit){
	Genre.find(callback).limit(limit);
} 

//Add Genre
module.exports.addGenre = (genre, callback) => {
	Genre.create(genre, callback);
} 

//update genre
module.exports.updateGenre = (id, genre, options, callback) => {
	var query = {_id: id};
	var update = {
		name: genre.name
	}
	Genre.findOneAndUpdate(query, update, options, callback);
}