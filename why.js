var scheduler = function(timeout, callbackfunction) {
  return function() {
    setTimeout(callbackfunction, timeout);
  };
};

// prints new count every 1 second
(function() {
  var timeout = 1000; // 1 second
  var count = 0;
  var schedule = scheduler(timeout, function doStuff() {
    console.log(++count);
    schedule();

  });
  schedule();
})();

