function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    var swap = true;
    for (let j = 0; j < arr.length - i; j++) {
      let temp = 0;
      if (arr[j] > arr[j + 1]) {
        temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        swap = false;
      }
    }
    if (swap) break;
  }

  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexMin]) {
        indexMin = j;
      }
    }
    let temp = arr[indexMin];
    arr[indexMin] = arr[i];
    arr[i] = temp;
  }
  return arr;
}
function mearge(arr1, arr2) {
  let resulst = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr2[i]) {
      resulst.push(arr1[i]);
      i++;
    } else {
      resulst.push(arr1[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    resulst.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    resulst.push(arr2[j]);
    j++;
  }

  return resulst;
}
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return mearge(left, right);
}

function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[0];
  let left = [];
  let right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  const lSorted = quickSort(left);
  const rSorted = quickSort(right);
  return [...lSorted, pivot, ...rSorted];
}

function test(amounts) {
  amounts = amounts.reduce(
    (acc, v) => (acc += parseFloat(v.reaplceAll(",", "").replace("원", ""))),
    0
  );
  return amounts;
}
function test2(s) {
  let stackCount = 0;
  var answer = true;
  var s = s.split("");

  for (let i = 0; i < s.length; i++) {
    stackCount += s[i] === "(" ? 1 : -1;
    if (stackCount < 0) return false;
  }
  if (stackCount !== 0) answer = false;
  return answer;
}

function test4(id) {
  let star =
    id % 2 === 0 ? Math.round(id.length / 2) : Math.round((id.length - 1) / 2);
  let visibleId = id.length - star;
  star = "*".repeat(star);
  let start =
    visibleId % 2 === 0
      ? Math.round(id.length / 2 / 2)
      : Math.floor(id.length / 2 / 2);
  console.log(start);
  let end = -(visibleId - start);
  var answer = id.substring(0, start) + star + id.slice(end);
  return answer;
}

function test5(html) {
  let stack = [];
  const tagList = html.match(/<[^>]+>?/g);
  if (tagList.length < 0) return false;
  for (let i = 0; i < tagList.length; i++) {
    if (tagList[0][1] === "/") return false;
    if (tagList[i][1] !== "/") {
      stack[i] = tagList[i];
    }
  }
  for (let i = 0; i < tagList.length; i++) {
    if (tagList[i][1] === "/") {
      stack.pop();
    }
  }
  return stack.length === 0;
}
// console.log(test2("<div></div>"));
// console.log(test3("<img />"));
console.log(test5("<div><button></button></div>"));
