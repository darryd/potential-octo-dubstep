

/*----------------------------------------------------------------------------------------------------------------------------------*/
function timer_new(interval) {

  var timer = {};

  timer.interval = interval;
  timer.events = [];


/*----------------------------------------------------------------------------------------------------------------------------------*/
 
  timer.run = function () {

    // Passing the third parameter to setInterval function is not supported in IE9 or earlier.
    this.timer_id = setInterval(this.next, this.interval, this.events);

  }

/*----------------------------------------------------------------------------------------------------------------------------------*/
// Do next event....

  timer.next = function(events) {

    if (events.length > 0) {

      var event = events[0];
      event.func(event.param);

      events.splice(0, 1);
    }
  };

/*----------------------------------------------------------------------------------------------------------------------------------*/
// Add new event

  timer.add_event = function(func, param) {

    var event = {};
    event.func = func;
    event.param = param;

    this.events.push(event);

  };

/*----------------------------------------------------------------------------------------------------------------------------------*/

  return timer;
}
/*----------------------------------------------------------------------------------------------------------------------------------*/
