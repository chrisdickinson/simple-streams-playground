# louder

Make things louder. Run on node `>=0.10.12`. 

Operates on stdin and stdout, with two `pullTransform`'s inbetween:

* `fail-after` -- which ends the stream after a given number of bytes.
* `louder` -- which takes `Buffer` instances, re-encodes them as a string, makes them uppercase, then emits `Buffer`'s based on the new, louder, data. 

After 10 bytes it should "fail" -- `fail-after` 

## concepts tested

* `pullTransform`
* sink/consumer
* wrapping native node stream2 instances
* aborting a stream
* Simple userland test of "piping"
* Stream invocation plus argument used in pipe.

## concepts not tested

* Uneven piping -- one object in to many out, or vice versa.
* Mixed even/uneven piping
* Unhandled error behavior -- what does it look like
  when exceptions bubble out of these things? 
* substreams
* duplex

## observations

* I can definitely see where this is conceptually cleaner than
node streams.
* There's a resemblance to the return value of generators.
(Is this a good thing? Or will it confuse people?)
* `finish-after`, could replace `fail-after`.
Instead of emitting an error, it could simply end the stream.
How would I, in `louder.js`, be able to detect when the stream
had successfully finished? Or failed? Or completed in either case?
* It felt a *lot* better to write than `min-stream`s. Continuables "feel" right, and the absence of conflating the callback with the `end` channel makes life a lot easier.
* Piping feels like [Object Verb Subject](http://en.wikipedia.org/wiki/Object%E2%80%93verb%E2%80%93subject) order when writing, primarily because I'm used to thinking in terms of traditional streams. Reinforcing the concept of "X **reads** from Y" or "X exhausts Y", etc., in documentation describing the concept would help, I believe.
