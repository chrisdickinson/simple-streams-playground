module.exports = louder

function louder(input) {
  return {
    next: next
  , end: input.end
  } 

  function next(produce) {
    input.next(function(err, data) {
      if(data === undefined) {
        return produce(err)
      }
      produce(null, new Buffer((data+'').toUpperCase()))
    })
  }
}

