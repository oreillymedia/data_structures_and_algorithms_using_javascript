function count(arr, data) {
   var count = 0;
   var position = binSearch(arr, data);
   if (position > -1) {
      ++count;
      for (var i = position-1; i > 0; --i) {
         if (arr[i] == data) {
            ++count;
         }
         else {
            break;
         }
      }
      for (var i = position+1; i < arr.length; ++i) {
         if (arr[i] == data) {
            ++count;
         }
         else {
            break;
         }
      }
   }
   return count;
}