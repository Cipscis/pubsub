import { publish, subscribe, unsubscribe } from '../pubsub.js';

describe('pubsub', () => {
	let fn;

	beforeEach(() => {
		fn = jasmine.createSpy();
	});

	it(`calls subscribed functions when publishing an event`, () => {
		const event = 'test/basic-subscribe';

		subscribe(event, fn);
		publish(event);

		expect(fn.calls.count()).toBe(1);
	});

	it(`can publish multiple events using a whitespace-separated list`, () => {
		const fnB = jasmine.createSpy();

		const eventA = 'test/multiple-publish/a';
		const eventB = 'test/multiple-publish/b';
		const eventC = 'test/multiple-publish/c';

		subscribe(eventA, fn);
		subscribe(eventB, fnB);
		subscribe(eventC, fnB);

		publish(`${eventA} ${eventB}  	${eventC} `);

		expect(fn.calls.count()).toBe(1);
		expect(fnB.calls.count()).toBe(2);
	});

	it(`can subscribe a function to multiple events using a whitespace-separated list`, () => {
		const eventA = 'test/multiple-subscribe/a';
		const eventB = 'test/multiple-subscribe/b';
		const eventC = 'test/multiple-subscribe/c';

		subscribe(`${eventA} ${eventB} 	${eventC} `, fn);

		publish(eventA);

		expect(fn.calls.count()).toBe(1);

		publish(eventB);

		expect(fn.calls.count()).toBe(2);

		publish(eventC);

		expect(fn.calls.count()).toBe(3);

		// Ensure the ending whitespace didn't create an event called ''
		publish('');

		expect(fn.calls.count()).toBe(3);
	});

	it(`doesn't call unsubscribed functions when publishing an event`, () => {
		const event = 'test/basic-unsubscribe';

		subscribe(event, fn);
		publish(event);

		expect(fn.calls.count()).toBe(1);

		unsubscribe(event, fn);
		publish(event);

		expect(fn.calls.count()).toBe(1);
	});

	it(`calls subscribed functions in the order in which they were subscribed`, () => {
		const event = 'test/subscribe-order';

		const watcher = jasmine.createSpy('watcher');

		// Track which event was called as an argument of watcher
		fn.and.callFake(() => watcher('A'));
		let fnB = jasmine.createSpy('fnB').and.callFake(() => watcher('B'));

		// Test first order
		subscribe(event, fn);
		subscribe(event, fnB);

		publish(event);

		expect(watcher.calls.count()).toBe(2);
		expect(watcher.calls.allArgs()).toEqual([['A'], ['B']]);

		// Reset
		unsubscribe(event, fn);
		unsubscribe(event, fnB);
		watcher.calls.reset();

		// Test reverse order
		subscribe(event, fnB);
		subscribe(event, fn);

		publish(event);

		expect(watcher.calls.count()).toBe(2);
		expect(watcher.calls.allArgs()).toEqual([['B'], ['A']]);
	});

	it(`ignores requests to subscribe an already subscribed function`, () => {
		const event = 'test/subscribe-mutliple';

		const watcher = jasmine.createSpy('watcher');

		// Track which event was called as an argument of watcher
		fn.and.callFake(() => watcher('A'));
		let fnB = jasmine.createSpy('fnB').and.callFake(() => watcher('B'));

		// Subscribe and ensure it worked normally
		subscribe(event, fn);
		subscribe(event, fnB);

		publish(event);

		expect(watcher.calls.count()).toBe(2);
		expect(watcher.calls.allArgs()).toEqual([['A'], ['B']]);

		// Reset
		watcher.calls.reset();

		// This subscribe should be ignored
		subscribe(event, fn);

		publish(event);

		expect(watcher.calls.count()).toBe(2);
		expect(watcher.calls.allArgs()).toEqual([['A'], ['B']]);
	})

	it(`passes arguments to subscribed functions`, () => {
		const event = 'test/publish-arguments';

		subscribe(event, fn);

		publish(event, 1, 2, 3);

		expect(fn.calls.argsFor(0)).toEqual([1, 2, 3]);
	});
});
