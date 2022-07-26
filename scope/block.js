// 블록 스코프

(function loop() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log("final", i); // ReferenceError: i is not defined
})();

/* 
블록스코프느 말 그대로  {} 이 생성될때마다 새로운 스코프가 만들어진다

방을 만들고 문을 잠가버려!!

*/
