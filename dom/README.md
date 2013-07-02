# dom

`keyup` events on `document.body` produce `event` objects on a readable simple stream.

To run this: `npm install beefy`, run `beefy index.js`, and open `http://localhost:9966` in your browser.

The consumer is a `pre` element's `textContent`.

## streams involved

* `filter` -- given a function, accept or reject incoming events.
* `prevent-default` -- perform a simple operation on each element.
* `event-to-value` -- transform event objects to text values. 

## concepts tested

* several similar streams
* uneven piping -- we produce less data than we receive.
* testing a simple concept from domnode.
* "infinite" sources. 

## concepts not tested

* mixed uneven/even piping
* substreams 
* duplex

## observations

* My first reaction was: so much boilerplate! but, compared to writing a classic node stream, it wasn't anywhere near as bad.
* Is it the responsibility of the consumer/sink to call `end` on its input once the stream is exhausted?
* This is pending the more common example of extending this to become an autocomplete input that talks to a web service via XHR.
* I'm still writing `read` when I mean `next`. 
