var nums = [];
for (var i = 0; i < 100; ++i) {
   nums[i] = Math.floor(Math.random() * 101);
}
var minValue = findMin(nums);
dispArr(nums);
print();
print();
print("The minimum value is: " + minValue);
var maxValue = findMax(nums);
print();
print("The maximum value is: " + maxValue);
