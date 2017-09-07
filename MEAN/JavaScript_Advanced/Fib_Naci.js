function fib() {
  var next = 1;
  var first = 0;
  var second = next;
  function nacci() {
    console.log(next);
    next = first + second;
    first = second;
    second = next;
  }
  return nacci
}
var fibCounter = fib();
fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"
