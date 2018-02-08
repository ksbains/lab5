var data = require("../data.json");

exports.addFriend = function(req, res){
 	
	let friend = {	
		name: req.query.name,
		description: req.query.description,
		imageURL: 'http://lorempixel.com/400/400/people'
	}
	console.log("BREAK");
	console.log("the friend to push is ", friend);
	console.log("BREAK");
	data.friends.push(friend);
	res.render("index", data);
}