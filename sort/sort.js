function bubbleSort(arr) {
  let noSwap = true;
  let temp = 0;
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        noSwap = false;
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    if (noSwap) break;
  }
  return arr;
}

//선택정렬

function selectionSotr(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.lengthl; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  return arr;
}
//삽입 정렬
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let aux = i - 1;
    while (aux >= 0 && temp < arr[aux]) {
      arr[aux + 1] = arr[aux];
      aux--;
    }

    arr[aux + 1] = temp;
  }
  return arr;
}

console.log(insertionSort([4, 5, 3, 2, 1, 8]));
