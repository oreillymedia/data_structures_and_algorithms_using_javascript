load("HashTable.js");
var names = new Array(97);
buildChains(names);
for (var i = 0; i < someNames.length; ++i) {
   var name = someNames[i];
   var hashVal = simpleHash(name, names);
   names[hashVal].push(name);
}
