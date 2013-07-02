var stdin = require('./lib/stdin')
  , stdout = require('./lib/stdout')
  , louder = require('./lib/index')
  , fail = require('./lib/fail-after')
  , filter = require('../dom/lib/filter')

stdout(
  (louder
  (fail(10)
  (stdin()))))
)
