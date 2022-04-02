const subscriptions: Record<string, Function[]> = {};

// Split by whitespace, then remove any empty strings
const split = (eventString: string) => eventString.split(/\s+/).filter(str => !!str);

const publish = function (this: any, event: string, ...args: any[]) {
	const events = split(event);

	if (events.length > 1) {
		for (const event of events) {
			publish.call(this, event, ...args);
		}
	} else if (event in subscriptions) {
		const callbacks = subscriptions[event];

		callbacks.forEach((callback) => {
			callback.apply(null, args);
		});
	}
};

const subscribe = function (event: string, callback: Function) {
	const events = split(event);

	if (events.length > 1) {
		for (const event of events) {
			subscribe(event, callback);
		}
	} else {
		if (!(event in subscriptions)) {
			subscriptions[event] = [];
		}

		const callbacks = subscriptions[event];

		// Don't bind a particular function to an event more than once
		if (callbacks.includes(callback) === false) {
			callbacks.push(callback);
		}
	}
};

const unsubscribe = function (event: string, callback: Function) {
	if (event in subscriptions) {
		const callbacks = subscriptions[event];
		const index = callbacks.indexOf(callback);

		if (index !== -1) {
			callbacks.splice(index, 1);
		}
	}
};

export { publish, subscribe, unsubscribe };
