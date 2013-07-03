module.exports = filter

function filter(matches) {
  return function(input) {
    var reads = []
      , checking = false

    return {read: read, abort: abort}

    function read(produce) {
      reads.push(produce)
      if(!checking) check()
    }

    function check() {
      var sync
        , broke

      checking = true

      while(reads.length) {
        sync = undefined
        input.read(onread)
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
          input.read(onread)
        }
      }
    }

    function abort(ready) {
      reads.length = 0
      input.abort(ready)
    }
  }
}
