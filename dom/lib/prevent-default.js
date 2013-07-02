module.exports = function(input) {
  return {next: next, end: input.end}

  function next(produce) {
    input.next(function(err, data) {
      if(data === undefined) {
        return produce(err)
      }
      data.preventDefault()
      produce(err, data)
    })
  }
}
