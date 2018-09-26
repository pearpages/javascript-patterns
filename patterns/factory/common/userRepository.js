var repo = function () {

	var users = {};

	return {
		get: get,
		save: save
	};

	function get(id) {
		console.log('Getting task '+ id);
		return users[id];
	}

	function save(user) {
		console.log('Saving ' + user.name + ' to the db');
		users[user.id] = user;
	}
}

module.exports = repo();