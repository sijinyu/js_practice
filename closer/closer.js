//scope는 범위  ,변수가 접근할 수 있는 범위, 범수가 영향을 끼칠 수 있는 범위
// 함수 + 함수를 둘러싼 환경 (렉시컬 환경)

function makeFunc() {
  //전역 scope
  let name = "jdm";
  return function () {
    //지역 scope
    console.log("My name is", name);
  };
}

var myFunc = makeFunc();
myFunc();

//클로저가 아닌 예시
function foo() {
  var color = "blue";
  //foo 스코프를 외부 렉시컬 환경으로 참조하여 저장한다.
  function bar() {
    console.log(color); //foo의 color 값인 'blue'를 참조한다.
  }
  bar();
}

const test = foo(); //blue를 출력
test();

// 클로저 예시
var color = "red";
function foo() {
  var color = "blue";

  //bar는 외부 렉시컬 환경 참조로 foo의 color를 저장
  function bar() {
    console.log(color);
  }

  return bar;
}

var baz = foo(); //foo가 반환한 bar() 함수는 baz로 재명명된다.
baz(); //blue를 출력
//bar는 자신의 스코프에서 color를 먼저 찾고, 그다음 외부 렉시컬 환경을 참조해서 color를 찾는다.
