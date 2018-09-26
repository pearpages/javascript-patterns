function random(name) {
	var ran = {
		projects : ['none','courses','training','project'],
		priorities : [1,2,3,4,5],
		users : ['Lucia','JB','Gabriel','Sungjo'],
		completed : [true,false]
	};
	

	return ran[name][Math.floor((Math.random() * ran[name].length))];
}

module.exports  = random;