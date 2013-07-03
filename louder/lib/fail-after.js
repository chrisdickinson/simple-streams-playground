module.exports = fail_after

function fail_after(n_bytes) {
  return stream

  function stream(input) {
    var count = 0

    return {
      read: read
    , abort: input.abort
    }

    function read(produce) {
      input.read(function(err, data) {
        if(data === undefined) {
          return produce(err)
        }

        count += data.length
        if(count >= n_bytes) {
          return input.abort(function() {
            produce(new Error(
              'exceeded '+n_bytes+' bytes'
            ))
          })
        }

        produce(null, data)
      })
    }
  }
}

