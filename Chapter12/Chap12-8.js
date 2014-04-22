var start = new Date().getTime();
for (var i = 1; i < 100; ++i) {
   print(i);
}
var stop = new Date().getTime();
var elapsed = stop - start;
print("The elapsed time was: " + elapsed + 
      " milliseconds.");
