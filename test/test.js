import { strict as assert } from 'assert';
import chalk from 'chalk';

import { publish, subscribe, unsubscribe } from '../pubsub.js';

const pass = (message) => console.log(`${chalk.green('PASSED')}\t${message}`);
const fail = (message) => console.log(`${chalk.red('FAILED')}\t${message}`);

const test = (message, testFn) => {
	try {
		testFn();
		pass(message);
	} catch (e) {
		fail(message);
		console.error(e);
	}
};

test('Publishing an event calls a subscribed function', () => {
	let wasCalled = false;

	const event = 'test/basic-subscribe';
	const fn = () => {
		wasCalled = true;
	};

	subscribe(event, fn);
	publish(event);

	assert.equal(wasCalled, true);
});

test('Unsubscribing from an event stops the function being called on publish', () => {
	let timesCalled = 0;

	const event = 'test/basic-unsubscribe';
	const fn = () => {
		timesCalled += 1;
	};

	subscribe(event, fn);
	publish(event);

	assert.equal(timesCalled, 1);

	unsubscribe(event, fn);
	publish(event);

	assert.equal(timesCalled, 1);
});

test('Subscribed functions are called in the order they were subscribed', () => {
	let num = 1;

	const event = 'test/subscribe-order';
	const fnA = () => {
		num += 1;
	};
	const fnB = () => {
		num *= 2;
	}

	subscribe(event, fnA);
	subscribe(event, fnB);

	publish(event);

	assert.equal(num, 4);

	unsubscribe(event, fnA);
	unsubscribe(event, fnB);

	subscribe(event, fnB);
	subscribe(event, fnA);

	publish(event);

	assert.equal(num, 9);
});

test('Subscribing an already subscribed function does nothing', () => {
	let timesCalled = 0;
	let num = 1;

	const event = 'test/subscribe-multiple';
	const fnA = () => {
		timesCalled += 1;
		num += 1;
	};
	const fnB = () => {
		num *= 2;
	}

	subscribe(event, fnA);
	subscribe(event, fnB);

	publish(event);

	assert.equal(timesCalled, 1);
	assert.equal(num, 4);

	subscribe(event, fnA);

	publish(event);

	assert.equal(timesCalled, 2);
	assert.equal(num, 10);
});
