function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
}
function addUpTo2(n) {
  let total = (n * (n + 1)) / 2;
}

let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();
console.log(`Time : ${(t2 - t1) / 1000} seconds`);
