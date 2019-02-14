```js
var pubsub = {};

(function(q) {
    const topics = {};
    let subUid = -1;

    q.publish = function(topic, args) {
        if(!topics[topic] || topics[topic].length === 0) {
            return false;
        }

        const subscribers = topics[topic];
        subscribers.forEach(subscriber => subscriber.func(topic, args));
        return this;
    }

    q.subscribe = function(topic, func) {
        if (!topics[topic]) {
            topics[topic] = [];
        }

        const token = (++subUid).toString();
        topics[topic].push({
            token,
            func
        });
        return token;
    }

    q.unsubscribe = function (token) {
        for (let topic in topics) {
            if (topics[topic]) {
                let temp = topics[topic].length;
                topics[topic] = topics[topic].filter(subscription => subscription.token !== token);
                if (temp > topics[topic].length) {
                    return token;
                }
            }
        }
        return this;
    }
})(pubsub);

var grid = {
    addEntry: function (data) {
        if (data !== 'undefined') { console.log('Entry:'
            + data.title
            + ' Changenet / %'
            + data.changenet
            + '/' + data.percentage + ' % added');
        }
    },

    updateCounter: function (timestamp) {
        console.log('grid last updated at: ' + timestamp);
    }
};

// a very basic mediator
var gridUpdate = function(topics, data) {
    grid.addEntry(data);
    grid.updateCounter(data.timestamp);
}

var dataSubscription = pubsub.subscribe('dataUpdated', gridUpdate);
pubSub.publish('dataUpdated', {
    title: "Microsoft shares",
    changenet: 4,
    percentage: 33,
    timestamp: '17:34:12' }
);
pubSub.publish('dataUpdated', {
    title: "Dell shares",
    changenet: 10,
    percentage: 20,
    timestamp: '17:35:16' }
);
```