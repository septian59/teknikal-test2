## teknikal-test2
## membuat sebuah nested loop dengan pola maze menggunakan javascript

### 1. Source code test.js
```bash
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
```

### Hasil
```bash
@ @@@@@@@@@@@@@
@             @
@@@@@@@@@@@@@ @
@             @
@ @@@@@@@@@@@@@
@             @
@@@@@@@@@@@@@ @
@             @
@ @@@@@@@@@@@@@
@             @
@@@@@@@@@@@@@ @
@             @
@ @@@@@@@@@@@@@
@             @
@@@@@@@@@@@@@ @
```

### 3. Untuk menjalankan bisa lewat Browser dengan menginputkan latihan.html ke url atau bisa menggunakan terminal dengan mengetikan ```node test.js```
