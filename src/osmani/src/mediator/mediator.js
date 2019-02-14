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
    refreshData: function() {
        console.log('retrieved latest data from data cache');
        console.log('updated grid component');
    },

    updateCounter: function() {
        console.log('data last updated at: ' + getCurrentTime());
    }
};

// a very basic mediator

var gridUpdate = function(topics, data) {
    grid.refreshData();
    grid.updateCounter();
}

var dataSubscription = pubsub.subscribe('dataUpdated', gridUpdate);
pubsub.publish( 'dataUpdated', 'new stock data available!' );
pubsub.publish( 'dataUpdated', 'new stock data available!' );

function getCurrentTime() {
    var date = new Date(),
        m = date.getMonth() + 1,
        d = date.getDate(),
        y = date.getFullYear(),
        t = date.toLocaleTimeString().toLowerCase();
    return (m + '/' + d + '/' + y + ' ' + t);
}