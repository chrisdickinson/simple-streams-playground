module.exports = event

function event(name, bubble) {
  bubble = !!bubble

  return of
  
  function of(el) {
    var reads = []
      , data = null 

    el.addEventListener(name, listener, bubble)

    return {next: next, end: end}

    function end(ready) {
      el.removeEventListener(name, listener, bubble)
    }

    function next(produce) {
      reads.push(produce)
      check()
    }

    function listener(ev) {
      data = ev
      check()
    }

    function check() {
      if(data === null) {
        return
      }
      if(!reads.length) {
        return
      }
      var last = data
      data = null
      reads.shift()(null, last)
    }
  }
}
