// print 1 to 100 number fizzBuzz

var output = [];
var count = 1;
function fizzBuzz() {
  while (count <= 100) {
    if (count % 3 === 0 && count % 5 === 0) {
      output.push("FizzBuzz");
    } else if (count % 5 === 0) {
      output.push("Buzz");
    } else if (count % 3 === 0) {
      output.push("Fizz");
    } else {
      output.push(count);
    }
    count++;
  }
  console.log(output);
}
fizzBuzz();
