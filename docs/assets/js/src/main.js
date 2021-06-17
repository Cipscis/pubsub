import { publish, subscribe, unsubscribe } from '/pubsub.js';

let timesPublished = 0;
const output = document.getElementById('example-output');

const event = 'example-event';
const callback = (incr) => output.innerHTML = timesPublished += incr;
const args = [1, 2, 3];

document.querySelectorAll('.js-example-subscribe').forEach(($el) => $el.addEventListener('click', () => subscribe(event, callback)));
document.querySelectorAll('.js-example-publish').forEach(($el) => $el.addEventListener('click', () => publish(event, 1)));
document.querySelectorAll('.js-example-unsubscribe').forEach(($el) => $el.addEventListener('click', () => unsubscribe(event, callback)));
