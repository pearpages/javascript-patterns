var ObserverList = function () {
	this.observerList = [];
};

var _p = ObserverList.prototype;

_p.add = function (observer) {
	return this.observerList.push(observer);
}

_p.get = function (index) {
	if (index > -1 && index < this.observerList.length ) {
		return this.observerList[index];
	}
}

_p.count = function () {
	return this.observerList.length;
};

_p.removeAt = function (index) {
	this.observerList.splice(index,1);
};

_p.indexOf = function (obj, startIndex) {
	var i = startIndex;

	while (i < this.observerList.length) {
		if (this.observerList[i] === obj) {
			return i;
		}
		i++;
	}

	return -1;
};

module.exports = ObserverList;