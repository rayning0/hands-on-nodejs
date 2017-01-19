// Every 1 second, emits 'tick' event and prints 'TICK'

var EventEmitter = require('events').EventEmitter,
    util         = require('util');

function Ticker() {
  var self = this;
  setInterval(function() {
    self.emit('tick');
  }, 1000);
}

util.inherits(Ticker, EventEmitter);
var ticker = new Ticker();

ticker.on('tick', function() {
  console.log('TICK');
});