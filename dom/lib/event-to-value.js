module.exports = function(input) {
  return {read: read, abort: input.abort}

  function read(produce) {
    input.read(function(err, data) {
      if(data === undefined) {
        return produce(err)
      }

      produce(err, data.target.value)
    })
  }
}
