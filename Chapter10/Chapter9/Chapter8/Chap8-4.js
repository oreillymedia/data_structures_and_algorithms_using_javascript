function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function genStuData(arr) {
   for (var i = 0; i < arr.length; ++i) {
      var num = "";
      for (var j = 1; j <= 9; ++j) {
         num += Math.floor(Math.random() * 10);
      }
      num += Math.floor(Math.random() * 101);
      arr[i] = num;
   }
}
load("HashTable.js");
var numStudents = 10;
var arrSize = 97;
var idLen = 9;
var students = new Array(numStudents);
genStuData(students);
var grades = new Array(arrSize);
for (var i = 0; i < students.length; ++i) {
   var student = students[i].substr(0,idLen);
   var grade = parseInt(students[i].substr(idLen+1,2));
   if (grade < 30) { grade += 50; }
   print(student, grade);
   var hashVal = simpleHash(student, grades);
   grades[hashVal] = grade;
}
showDistro(grades);
