module.exports = inner_text

function inner_text(el) {
  return function(stream) {
    iter()

    function iter() {
      stream.read(function(err, data) {
        if(data === undefined) {
          return
        }

        el.textContent = data
        iter() 
      })
    }
  }
}

