var repo = function () {

	var projects = {};

	return {
		get: get,
		save: save
	};

	function get(id) {
		console.log('Getting task '+ id);
		return projects[id];
	}

	function save(project) {
		console.log('Saving ' + project.name + ' to the db');
		projects[project.id] = project;
	}
}

module.exports = repo();