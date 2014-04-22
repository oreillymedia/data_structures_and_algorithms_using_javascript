function Point(x,y) {
   this.x = x;
   this.y = y;
}

function displayPts(arr) {
   for (var i = 0; i < arr.length; ++i) {
      print(arr[i].x + ", " + arr[i].y);
   }
}

var p1 = new Point(1,2);
var p2 = new Point(3,5);
var p3 = new Point(2,8);
var p4 = new Point(4,4);
var points = [p1,p2,p3,p4];
for (var i = 0; i < points.length; ++i) {
   print("Point " + parseInt(i+1) + ": " + points[i].x + ", " + 
         points[i].y);
}
var p5 = new Point(12,-3);
points.push(p5);
displayPts(points);
points.shift();
displayPts(points);
