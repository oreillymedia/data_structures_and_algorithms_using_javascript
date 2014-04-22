function isEven(num) {
   return num % 2 == 0;
}

var nums = [2,4,6,8,10];
var even = nums.every(isEven);
if (even) {
   print("all numbers are even");
}
else {
   print("some numbers are odd");
}