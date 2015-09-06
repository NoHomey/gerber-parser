// simple warning class to be emitted when something questionable in the gerber is found
'use strict'

const warning = function(message, line) {
  return {message, line}
}

module.exports = warning