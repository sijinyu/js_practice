function merge(arr1, arr2) {
  console.log(arr1);
  let arr = [];
  let i = 0;
  let j = 0;
  let index = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      arr[index] = arr1[i];
      index++;
      i++;
    } else {
      arr[index] = arr2[j];
      index++;
      j++;
    }
  }
  while (i < arr1.length) {
    arr[index] = arr1[i];
    index++;
    i++;
  }
  while (j < arr2.length) {
    arr[index] = arr2[j];
    index++;
    j++;
  }
  console.log(arr);
  return arr;
}

function mergeRefactor(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  console.log(mid);
  let left = mergeRefactor(arr.slice(0, mid));
  33;
  let right = mergeRefactor(arr.slice(mid));

  return merge(left, right);
}

mergeRefactor([33, 22, 11, 100]); //O(n+m)
