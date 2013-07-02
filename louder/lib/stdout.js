module.exports = stdout

function stdout(input) {
  return consume()

  function consume() {
    input.next(function(err, data) {
      if(data === undefined) {
        return
      }
      process.stdout.write(data)
      consume()
    })
  }
}

