import { activate } from 'activate';

import { publish, subscribe, unsubscribe } from '/pubsub.js';

let timesPublished = 0;
const output = document.getElementById('example-output');

const event = 'example-event';
const callback = (incr) => output.innerHTML = timesPublished += incr;
const args = [1, 2, 3];

activate('.js-example-subscribe', () => subscribe(event, callback));
activate('.js-example-publish', () => publish(event, 1));
activate('.js-example-unsubscribe', () => unsubscribe(event, callback));
