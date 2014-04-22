function CArray(numElements) {
   this.dataStore = [];
   this.pos = 0;
   this.gaps = [5,3,1];
   this.numElements = numElements;
   this.insert = insert;
   this.toString = toString;
   this.clear = clear;
   this.setData = setData;
   this.setGaps = setGaps;
   this.shellsort = shellsort;
   this.mergeSort = mergeSort;
   this.mergeArrays = mergeArrays;
   for (var i = 0; i < numElements; ++i) {
      this.dataStore[i] = 0;
   }
   
}

// other function definitions go here

function mergeArrays(arr,startLeft, stopLeft, startRight, stopRight) {
   var rightArr = new Array(stopRight - startRight + 1);
   var leftArr = new Array(stopLeft - startLeft + 1);
   k = startRight;
   for (var i = 0; i < (rightArr.length-1); ++i) {
      rightArr[i] = arr[k];
      ++k;
   }
   
   k = startLeft;
   for (var i = 0; i < (leftArr.length-1); ++i) {
      leftArr[i] = arr[k];
      ++k;
   }
  
   rightArr[rightArr.length-1] = Infinity; // a sentinel value
   leftArr[leftArr.length-1] = Infinity; // a sentinel value
   var m = 0;
   var n = 0;
   for (var k = startLeft; k < stopRight; ++k) {
      if (leftArr[m] <= rightArr[n]) {
         arr[k] = leftArr[m];
         m++;
      }
      else {
         arr[k] = rightArr[n];
         n++;
      }
   }
   print("left array - ", leftArr);
   print("right array - ", rightArr);
}

function mergeSort() {
   if (this.dataStore.length < 2) {
      return;
   }
   var step = 1;
   var left, right;
   while (step < this.dataStore.length) {
      left = 0;
      right = step;
      while (right + step <= this.dataStore.length) {
         mergeArrays(this.dataStore, left, left+step, right, right+step);
         left = right + step;
         right = left + step;
      }
      if (right < this.dataStore.length) {
         mergeArrays(this.dataStore, left, left+step, right, this.dataStore.length);
      }
      step *= 2;
   }
}

var nums = new CArray(10);
nums.setData();
print(nums.toString());
nums.mergeSort(); 
print(nums.toString());
