module.exports = {
	create: function(id){
		return new Observer(id);
	}
};

function Observer(id){
	this.id = id;
	this.update = function ( context){
		console.log(this.id+': '+context+' notified!');
	};
}