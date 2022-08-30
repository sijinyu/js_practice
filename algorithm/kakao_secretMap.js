function solution(n, arr1, arr2) {
  return arr1.map((v, i) =>
    addZero(n, (v | arr2[i]).toString(2)).replace(/1|0/g, (a) =>
      +a ? "#" : " "
    )
  );
}

const addZero = (n, s) => {
  return s;
};

solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]);

const test = ({ test1, test2 }) => {
  console.lg9;
};
test({ test1: 112312 });
