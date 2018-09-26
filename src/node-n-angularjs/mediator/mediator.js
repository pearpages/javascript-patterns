var mediator = function () {
	var channels = {};

	return {
		channels: channels,
		subscribe: subscribe,
		publish: publish
	};

	function subscribe (channel, context, func) {
		if (!channels[channel]) {
			channels[channel] = [];
		}
		channels[channel].push({
			context: context,
			func: func
		});
	}

	function publish (channel) {
		if (!channels[channel]) {
			return false;
		}

		var args = Array.prototype.slice.call(arguments, 1); // getting rid of the first argument 'channel'

		for (var i = 0; i < channels[channel].length; i++) {
			var sub = channels[channel][i];
			sub.func.apply(sub.context, args);
		}
	}

};

module.exports = mediator();