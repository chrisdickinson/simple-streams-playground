module.exports = louder

function louder(input) {
  return {
    read: read
  , abort: input.abort
  } 

  function read(produce) {
    input.read(function(err, data) {
      if(data === undefined) {
        return produce(err)
      }
      produce(null, new Buffer((data+'').toUpperCase()))
    })
  }
}

