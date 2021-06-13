const subscriptions = {};

const publish = function (event, ...args) {
	if (event in subscriptions) {
		let callbacks = subscriptions[event];

		callbacks.forEach((callback) => {
			callback.apply(null, args);
		});
	}
};

const subscribe = function (event, callback) {
	if (!(event in subscriptions)) {
		subscriptions[event] = [];
	}

	let callbacks = subscriptions[event];

	// Don't bind a particular function to an event more than once
	if (callbacks.includes(callback) === false) {
		callbacks.push(callback);
	}
};

const unsubscribe = function (event, callback) {
	if (event in subscriptions) {
		let callbacks = subscriptions[event];
		let index = callbacks.indexOf(callback);

		if (index !== -1) {
			callbacks.splice(index, 1);
		}
	}
};

export { publish, subscribe, unsubscribe };
