var request = require('superagent');
var Rx = require('rxjs');

/**
 * Instructions:
 * Let's pretend for a second that our source did NOT return all the user data.
 * Let's say it didn't return back address, but that's what we wanted. Let's
 * grab it from the `user/<id>` endpoint!!!!
 *
 * Requirement: The address needs to be found for Leopoldo_Corkery
 *
 * 1. Call the same user collection endpoint as before
 * 2. Iterate over the `response.body` and emit each user separately
 * 3. Using `.find` in our pipeline, find the above user in the collection
 * 4. Using `mergeMap`, we are going to make an additional call to grab
 *    the address for the above user.
 * 5. Within this `mergeMap` create a new observable that handles another
 *    GET call to retrieve the user details:
 *   `GET https://jsonplaceholder.typicode.com/users/<id>`
 * 2. Console log the output
 *
 * It should be:
 {
    "street": "Norberto Crossing",
    "suite": "Apt. 950",
    "city": "South Christy",
    "zipcode": "23505-1337",
    "geo": {
      "lat": "-71.4197",
      "lng": "71.7478"
    }
 }
 * Hint: In the `mergeMap`, you'll need to use a function that returns an observable
 * in order to pass the ID to the GET request.
 */