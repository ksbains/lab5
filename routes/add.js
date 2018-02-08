var data = require("../data.json");

exports.addFriend = function(req, res) {    
	let friend = {
		name: req.query.name,
		description: req.query.description,
		// imageURL: 'http://lorempixel.com/400/400/people'
		imageURL: "https://assets.vogue.com/photos/589151c258aa89a00d542b38/master/pass/00-5-things-emma-stone.jpg"
	}
	console.log("the friend to push is ", friend);
	data.friends.push(friend);
 }