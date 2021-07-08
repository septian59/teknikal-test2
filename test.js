var s = "";
var p = 2;

for (var i = 1; i <= 15; i++) {
  for (var j = 1; j <= 15; j++) {
    if (j == 1 || j == 15) {
      s += "@";
    } else if ((i % 2 == 0 && j > 1 && j < 15) || (i % 2 == 1 && p == j)) {
      s += " ";
    } else {
      s += "@";
    }
  }
  if (i % 2 == 1) {
    if (p == 2) {
      p = 14;
    } else {
      p = 2;
    }
  }
  s += "\n";
}

console.log(s);
