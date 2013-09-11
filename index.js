module.exports = buffer;

function buffer(fn, wait) {

  var timer;

  return function() {

    if(timer) clearTimeout(timer);

    timer = setTimeout(fn, wait);
  };
}