var names = ["David","Cynthia","Raymond","Clayton","Jennifer"];
putstr("Enter a name to search for: ");
var name = readline();
var position = names.indexOf(name);
if (position >= 0) {
   print("Found " + name + " at position " + position);
}
else {
   print(name + " not found in array.");
}