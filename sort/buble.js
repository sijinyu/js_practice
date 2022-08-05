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
