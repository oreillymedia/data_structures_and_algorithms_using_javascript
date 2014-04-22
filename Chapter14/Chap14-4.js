function makeChange(origAmt, coins) {
   var remainAmt = 0;
   if (origAmt % .25 < origAmt) {
      coins[3] = parseInt(origAmt / .25);
      remainAmt = origAmt % .25;
      origAmt = remainAmt;
   }
   if (origAmt % .1 < origAmt) {
      coins[2] = parseInt(origAmt / .1);
      remainAmt = origAmt % .1;
      origAmt = remainAmt;
   }
   if (origAmt % .05 < origAmt) {
      coins[1] = parseInt(origAmt / .05);
      remainAmt = origAmt % .05;
      origAmt = remainAmt;
   }
   coins[0] = parseInt(origAmt / .01);
}

function showChange(coins) {
   if (coins[3] > 0) {
      print("Number of quarters - " + coins[3] + " - " + coins[3] * .25);
   }
   if (coins[2] > 0) {
      print("Number of dimes - " + coins[2] + " - " + coins[2] * .10);
   }
   if (coins[1] > 0) {
      print("Number of nickels - " + coins[1] + " - " + coins[1] * .05);
   }
   if (coins[0] > 0) {
      print("Number of pennies - " + coins[0] + " - " + coins[0] * .01);
   }
}

var origAmt = .63;
var coins = [];
makeChange(origAmt, coins);
showChange(coins); 
