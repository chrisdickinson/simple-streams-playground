module.exports = inner_text

function inner_text(el) {
  return function(stream) {
    iter()

    function iter() {
      stream.next(function(err, data) {
        if(data === undefined) {
          // is this the appropriate thing
          // to do?
          return stream.end(function() {})
        }

        el.textContent = data
        iter() 
      })
    }
  }
}

