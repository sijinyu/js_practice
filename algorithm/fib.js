function isPalindrome(str) {
  let reverseData = str[str.length - 1];

  function isReverse(str) {
    console.log(str.length);
    if (str.length <= 1) return str;

    reverseData += isReverse(str.slice(1));
  }
  isReverse(str.slice(1));
  console.log(reverseData);
  if (str === reverseData) return true;
  return false;
  // add whatever parameters you deem necessary - good luck!
}

isPalindrome("tacocat"); // true
