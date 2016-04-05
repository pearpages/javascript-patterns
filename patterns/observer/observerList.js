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

module.exports = ObserverList;