function findMax(arr) {
   var max = arr[0];
   for (var i = 1; i < arr.length; ++i) {
      if (arr[i] > max) {
         max = arr[i];
      }
   }
   return max;
}