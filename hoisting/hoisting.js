// var 변수는 선언과 동시에 초기화

// let const는 선언후 -> TDZ(일시적 사각지대) 암튼 여기 잠시 있다가 -> 초기화

// 함수의 겨우 함수 선언식만 호이스팅이 일어남 , 함수 표현식은 안된다

// 컴파일 -> 인터프리팅   , 컴파일 단계 -> var a; // 변수 선언 단계  a = 2 //변수 초기화 단계

//선언부가 호이스팅되므로 2를 정상적으로 출력하는 함수

function foo() {
  a = 2;
  var a = 2;
  console.log(a);
}

//선언 전 참조되는 경우에는 undefined를 반환
function foo2() {
  console.log(a);
  var a = 2;
}

function makeCounter() {
  let num = 0;

  return function () {
    return num++;
  };
}
