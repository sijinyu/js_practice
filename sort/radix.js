
///helper 함수 필요
/**
 * @param numbers //변환할 10진수 숫자들
 * @param i //어디 자릿수 값을 리턴 받을지
 * 
 */

//자릿수에 속한 값 구하기
function getDigit(numbers,i) {
    return Math.floor(Math.abs(numbers) / Math.pow(10,i)) % 10;
}

//자릿수 구하기
function digitCount(num) {
    if(num === 0)  return 1;
    return Math.floor(Math.log10(Math.abs(num)) + 1);
}

//배열 각 숫자중 가장 큰 자릿수
function mostDigits(array) {
    return Math.max(...array.map((num)=>digitCount(num)))
}
//10진수면 바구니가 10개 

function radixSort(array) {
    
    let max = mostDigits(array)
    
    for (let k =0; k < max; k++ ) {
        let digitBuckets = new Array(10).fill([])
        console.log(digitBuckets);
        for(let i=0; i< array.length; i++) {
            let digit = getDigit(array[i],k);
            digitBuckets[digit].push(array[i])
            
        }
        array=[].concat(...digitBuckets)
        
        
    }

}


// 수목록을 받는다

//가장 큰수가 몇자리인지 알아낸다

//루프는 최대자릿수 만큼 버킷에다  최대자릿수만큼 정렬해야하기때문
//0 ~ 가장큰자릿수
//진행할때마다 각자릿수에 빈애열을 만든다
 