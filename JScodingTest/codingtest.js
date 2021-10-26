//  1. 'apple' 뒤집기
const str1 = 'applee';

//  2. 3, 6, 9 게임
const num2 = 379389;

//  3. 아나그램
const str31 = 'EAB';
const str32 = 'BAC';

//  4. 'applle' 중복된 문자열 갯수 찾기
const str4 = 'applleertdf';


//  1.
const solution1 = (str) => {
  const strToArr = str.split('');
  for(let i = 0; i < strToArr.length / 2; i++) {
    [strToArr[i], strToArr[strToArr.length-(i+1)]] = [strToArr[strToArr.length-(i+1)], strToArr[i]];
  }
  const newStr = strToArr.join('');
  console.log(newStr);
};


// 2.
const solution2 = (num) => {
  const numToStr = num.toString();
  for(let i = 0; i < numToStr.length; i++) {
    if (numToStr[i] === '3' || numToStr[i] === '6' || numToStr[i] === '9') {
      console.log(`${i + 1}번째, 박수!`);
    } else {
      console.log(`${i + 1}번째, 쉬어~`);
    }
  }
};


// 3.
const solution3 = (str1, str2) => {
  const strToArr1 = str1.split('');
  const strToArr2 = str2.split('');
  const sortArr1 = strToArr1.sort();
  const sortArr2 = strToArr2.sort();
  const result = sortArr1 === sortArr2;
  console.log(result);
};


// 4.
// 중복된 문자열을 어떻게 구분하냐!
// 같은 아스키 코드를 가지고 있는 넘들을 찾으면 되겠지?
// 하나하나 차근차근 생각해봅시다,, 쪼개서 생각!
// 정렬돼있으면 현재 값과 다음값만 비교하면 됨.

// const selectionSort = (arr1) => {
//   let minIndex;
//   for(let i = 0; i < arr1.length; i++) {
//     minIndex = i;
//     for(let j = i + 1; j < arr1.length; j++) {
//       if (arr1[j] < arr1[minIndex]) {
//         minIndex = j;
//         [arr1[i], arr1[minIndex]] = [arr1[minIndex], arr1[i]];
//       };
//     };
//   };
//   console.log(arr1);
// }


const solution4 = (str) => {
  const arr = str.split('');
  const sortArr = arr.sort();

  let num = 1;
  for(let i = 0; i < sortArr.length; i++) {
    if(sortArr[i] !== sortArr[i+1]) {
      console.log(`${sortArr[i]} ${num}개`);
      num = 0;
    }
    num++;
  }
};

solution1(str1)
solution2(num2);
solution3(str31, str32);
solution4(str4);
