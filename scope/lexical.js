var x = 1;

function foo() {
  var x = 10;
  bar();
}

function bar() {
  console.log(x);
}

foo(); // 1
bar(); // 1

/* 
자바스크립트는 함수를 어디서 호출했냐가 아닌 함수를 어디서 선언했는지로 스코프를 결정하는 렉시컬 스코프를 따른다
*/
