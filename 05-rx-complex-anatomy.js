var Rx = require('rxjs');

/**
 * Instructions:
 * 1. Copy the previous code and paste it here.
 * 2. Add an error handler in the create method that calls
 *    `observer.error('Error: Name is false!') when name is falsy
 * 2. Now add error handling and subscribe with all
 *    three of the methods:
 *    - next
 *    - error
 *    - complete
 *
 * You should be getting the same user object. Now, test what
 * happens when you add a `false` to the names. Notice how the
 * complete wasn't called. That's because `error` is also `complete`
 */