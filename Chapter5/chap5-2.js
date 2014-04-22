function dispArr(arr) {
   putstr(arr[0] + " ");
   for (var i = 1; i < arr.length; ++i) {
      putstr(arr[i] + " ");
      if (i % 10 == 0) {
         putstr("\n");
      }
   }
}

var nums = [];
for (var i = 0; i < 100; ++i) {
   nums[i] = Math.floor(Math.random() * 101);
}
putstr("Enter a number to search for: ");
var num = readline();
print();
if (seqSearch(nums, num)) {
   print(num + " is in the array.");
}
else {
   print(num + " is not in the array.");
}
print();
dispArr(nums);