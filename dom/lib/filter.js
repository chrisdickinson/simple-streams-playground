module.exports = filter

function filter(matches) {
  return function(input) {
    var reads = []
      , checking = false

    return {next: next, end: end}

    function next(produce) {
      reads.push(produce)
      if(!checking) check()
    }

    function check() {
      var sync
        , broke

      checking = true

      while(reads.length) {
        sync = undefined
        input.next(onread)
        if(sync === undefined) {
          broke = true
          break
        }
      }

      function onread(err, data) {
        sync = true

        if(data === undefined) {
          reads.length = 0
          return reads.shift()(err)
        }

        if(matches(data)) {
          checking = false
          reads.shift()(err, data) 
        } else if(broke) {
          input.next(onread)
        }
      }
    }

    function end(ready) {
      reads.length = 0
      input.end(ready)
    }
  }
}
