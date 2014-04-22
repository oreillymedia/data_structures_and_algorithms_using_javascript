function seqSearch(arr, data) {
   for (var i = 0; i < arr.length; ++i) {
      if (arr[i] == data && i > (arr.length * 0.2)) {
         swap(arr,i,0);
         return true;
      }
      else if (arr[i] == data) {
         return true;
      }
   }
   return false;
}
