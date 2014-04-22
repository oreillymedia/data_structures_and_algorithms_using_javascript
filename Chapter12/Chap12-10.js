load("CArray.js")
var nums = new CArray(10);
nums.setData();
print("Before Shellsort: \n");
print(nums.toString());
print("\nDuring Shellsort: \n");
nums.shellsort();
print("\nAfter Shellsort: \n");
print(nums.toString());
