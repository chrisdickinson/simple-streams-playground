var _1st = document.createElement('textarea')
  , _2nd = document.createElement('input')
  , output = document.createElement('pre')

_1st.placeholder = 'these events should not show up'
_2nd.placeholder = 'these events should show'

var prevent = require('./lib/prevent-default')
  , inner_text = require('./lib/inner-text')
  , values = require('./lib/event-to-value')
  , filter = require('./lib/filter')
  , event = require('./lib/event')

document.body.appendChild(_1st)
document.body.appendChild(_2nd)
document.body.appendChild(output)

inner_text(output)(
  (values
  (prevent
  (filter(is_input)
  (event('keyup')(document.body)))))
)

function is_input(ev) { 
  return ev.target.tagName.toLowerCase() === 'input'
}
