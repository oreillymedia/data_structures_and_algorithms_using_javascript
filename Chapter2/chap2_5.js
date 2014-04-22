function square(num) {
  print(num, num * num);
}

var nums = [];
for (var i = 0; i < 10; ++i) {
   nums[i] = i+1;
}
nums.forEach(square);