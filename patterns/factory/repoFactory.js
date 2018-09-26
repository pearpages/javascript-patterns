var repoFactory = function () {
	var repos = this; // used as cache
	// repoList could come from anywhere
	var repoList = [
		{name: 'task', source: './common/taskRepository'},
		{name: 'user', source: './common/userRepository'},
		{name: 'project', source: './common/projectRepository'}
	];

	repoList.forEach(function(repo) {
		repos[repo.name] = require(repo.source);
	});
};

module.exports = new repoFactory;