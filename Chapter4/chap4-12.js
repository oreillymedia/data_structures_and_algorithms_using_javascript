function setData(arr, numElements) {
   for (var i = 0; i < numElements; ++i) {
      arr.insert(Math.floor(Math.random() * (numElements+1)));
   }
}

var numElements = 100;
var nums = new CArray(numElements);
var start = new Date().getTime();
nums.bubblesort();
var stop = new Date().getTime();
var elapsed = stop - start;
print("Elapsed time for the bubble sort on " + 
      numElements + " elements is: " + elapsed + " milliseconds.");
setData();
start = new Date().getTime();
nums.selectionsort();
stop = new Date().getTime();
elapsed = stop - start;
print("Elapsed time for the selection sort on " + 
      numElements + " elements is: " +  elapsed + " milliseconds.");
setData();
start = new Date().getTime();
nums.insertionsort();
stop = new Date().getTime();
elapsed = stop - start;
print("Elapsed time for the insertion sort on " + 
       numElements + " elements is: " + elapsed + " milliseconds.");