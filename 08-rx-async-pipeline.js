var request = require('superagent');
var Rx = require('rxjs');

/**
 * Instructions:
 * Your devs are telling you the collection of users
 * is too much data. Trim it down!!
 *
 * 1. Using the map method on the observable, iterate over each user
 * 2. Within this map function, trim the `address` and `company` properties
 *    off the object and return it
 * 2. Console log the output
 *
 * Not getting what you want? How would you fix that? Hint: iterate, using
 * a `forEach()` over the array of users in the `then` method and emit,
 * using `observer.next()`, each user separately.
 *
 * Try again!
 */