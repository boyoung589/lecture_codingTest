/**
 * 내장함수 Math.min()과 Math.max() 사용하기
*/

let solution = (arr)=>{
  return `최솟값: ${Math.min(...arr)} 최댓값: ${Math.max(...arr)}`
}

solution([5, 7, 1, 3, 2, 9, 11]); //'최솟값: 1 최댓값: 11'
solution([5, 3, 7, 11, 2, 15, 17]); //'최솟값: 2 최댓값: 17'