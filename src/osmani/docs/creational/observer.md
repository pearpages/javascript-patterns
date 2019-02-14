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

const handler = (topic, data) => console.log(topic + ': ' + data);
const token = pubsub.subscribe('football', handler);
pubsub.publish('football', 'hello world');
pubsub.publish('football', ['a', 'b', 'c']);
pubsub.publish('football', [
    {
        'color': 'blue'
    }, {
        'text': 'hello'
    }
]);
pubsub.unsubscribe(token);
if (!pubsub.publish('football', 'hello there')) {
    console.log('Noone subscribed');
}
```