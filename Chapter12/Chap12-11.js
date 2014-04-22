function shellsort1() {
   var N = this.dataStore.length;
   var h = 1;
   while (h < N/3) {
      h = 3 * h + 1;
   }
   while (h >= 1) {
      for (var i = h; i < N; i++) {
         for (var j = i; j >= h && this.dataStore[j] < this.dataStore[j-h];
              j -= h) {
            swap(this.dataStore, j, j-h);
         }
      }
      h = (h-1)/3;
   }
}

load("CArray.js")
var nums = new CArray(100);
nums.setData();
print("Before Shellsort1: \n");
print(nums.toString());
nums.shellsort1();
print("\nAfter Shellsort1: \n");
print(nums.toString());
