/**삼각형 판별하기
 * 길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있
  으면 “YES"를 출력하고, 만들 수 없으면 ”NO"를 출력한다.
  ▣ 입력설명
  첫 번째 줄에 100이하의 서로 다른 A, B, C 막대의 길이가 주어진다.
  ▣ 출력설명
  첫 번째 줄에 “YES", "NO"를 출력한다.
  ▣ 입력예제 1
  6 7 11
  ▣ 출력예제 1
  YES
  ▣ 입력예제 1
  13 33 17
  ▣ 출력예제 1
  NO
 */

//짧은 막대 두개의 길이의 합이 큰막대의 길이보다 커야한다
let solution1 = (a, b, c) => {
  let max = a;
  let arr = [];
  if(a < b){
    max = b;
    arr.push(a);
  } else arr.push(b);
  if(max < c) {
    arr.push(max)
    max = c;
  } else arr.push(c);
  console.log(arr, max)
  return max>=arr[0]+arr[1] ? "NO" : "YES"
}
solution1(6, 7, 11) //'YES'
solution1(13, 33, 17) //'NO'

let solution2 = (a, b, c) => {
  let answer = 'YES', max, sum = a+b+c;
  if (a > b) max = a;
  else max = b;
  if (c > max) max = c;
  if ((sum - max) <= max) answer = 'NO';
  return answer;
}
solution2(6, 7, 11) //'YES'
solution2(13, 33, 17) //'NO'