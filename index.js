// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// [Using for loop](https://www.rosettacode.org/wiki/Averages/Simple_moving_average#Using_for_loop)

function simple_moving_averager(period) {
  var nums = [];
  return function(num) {
    nums.push(num);
    if (nums.length > period) nums.splice(0, 1); // remove the first element of the array
    var sum = 0;
    for (var i in nums) sum += nums[i];
    var n = period;
    if (nums.length < period) n = nums.length;
    return sum / n;
  };
}

console.log("\n\n\nUsing for loop");
var sma3 = simple_moving_averager(3);
var sma5 = simple_moving_averager(5);
var data = [1, 2, 3, 4, 5, 5, 4, 3, 2, 1];

var t0 = sma3(data);
console.log(t0);

for (var i in data) {
  var n = data[i];

  // // using WSH
  // WScript.Echo("Next number = " + n + ", SMA_3 = " + sma3(n) + ", SMA_5 = " + sma5(n));
  var sma_3 = sma3(parseInt(n));
  console.log(n + " " + sma_3);
}

// [Using reduce/filter](https://www.rosettacode.org/wiki/Averages/Simple_moving_average#Using_reduce.2Ffilter)

// single-sided
Array.prototype.simpleSMA = function(N) {
  return this.map(function(el, index, _arr) {
    return (
      _arr
        .filter(function(x2, i2) {
          return i2 <= index && i2 > index - N;
        })
        .reduce(function(current, last, index, arr) {
          return current + last;
        }) / index || 1
    );
  });
};

console.log("\n\n\nUsing reduce/filter - orig g");
var g = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(g.simpleSMA(3));
console.log(g.simpleSMA(5));
console.log(g.simpleSMA(g.length));

console.log("\n\n\nUsing reduce/filter - g = data for comparison");
var g = data;
console.log(g.simpleSMA(3));
console.log(g.simpleSMA(5));
console.log(g.simpleSMA(g.length));
