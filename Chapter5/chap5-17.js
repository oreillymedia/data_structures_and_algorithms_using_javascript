function binSearch(arr, data) {
   var upperBound = arr.length-1;
   var lowerBound = 0;
   while (lowerBound <= upperBound) {
      var mid = Math.floor((upperBound + lowerBound) / 2);
      if (arr[mid] < data) {
         lowerBound = mid + 1;
      }
      else if (arr[mid] > data) {
         upperBound = mid - 1;
      }
      else {
         return mid;
      }
   }
   return -1;
}

function insertionsort(arr) {
   var temp, inner;
   for (var outer = 1; outer <= arr.length-1; ++outer) {
      temp = arr[outer];
      inner = outer;
      while (inner > 0 && (arr[inner-1] >= temp)) {
         arr[inner] = arr[inner-1];
         --inner;
      }
      arr[inner] = temp;
   }
}

var words = read("words.txt").split(" ");
insertionsort(words);
var word = "rhetoric";
var start = new Date().getTime();
var position = binSearch(words, word);
var stop = new Date().getTime();
var elapsed = stop - start;
if (position >= 0) {
   print("Found " + word + " at position " + position + ".");
   print("Binary search took " + elapsed + " milliseconds.");
}
else {
   print(word + " is not in the file.");
}
