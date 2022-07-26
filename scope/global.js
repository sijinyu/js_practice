// 전역 스코프

var global = "global";

function foo() {
  var local = "local";
}
if (true) {
  var global2 = "if";
}

foo();
console.log(global); // global
console.log(global2); // if
console.log(local); // Uncaught ReferenceError: local is not defined

/*  
되도록 전역변수는 지양하자 
    의도치 않게 재할당 될수도 있고
    코드 예측도 어렵게 만든다
*/
