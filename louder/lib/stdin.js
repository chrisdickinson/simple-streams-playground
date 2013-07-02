module.exports = stdin

function stdin() {
  var pending = []

  return {next: next, end: end}

  function next(produce) {
    pending[pending.length] = produce
    check()     
  }

  function check() {
    var output = process.stdin.read()
    if(!output) {
      return process.stdin.once('readable', check)
    }

    pending.shift()(null, output)
  }

  function end(done) {
    pending.length = 0
    process.stdin.end()
    console.log('ended')
    done()
  }
}

