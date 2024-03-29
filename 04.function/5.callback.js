/**
 * 1. 일급객체(first-class object)
 * - 일반 객체처럼 모든 연산이 가능한 것(object, function)
 *  ·함수의 매개변수로 전달(=파리미터로 전달 가능)
 *  ·함수의 반환값(=리턴 가능)
 *  ·할당 명령문(=변수에 할당 가능)
 *  ·동일 비교 대상(=값으로 평가 가능)
 *
 * 2. 고차함수(Higher-order function)
 * - 함수에서 함수를 인자로 받거나(=콜백)
 * - 함수를 반환(return)하는 함수를 고차함수라 함
 * - 콜백함수를 인자로 받았다면, 함수 안에서 필요한 순간에 인자로 전달받은 콜백함수를 호출할 수 있는 권함이 있음
 *   그래서 조금 더 높은 순서에 있다고 해서 고차함수라고 함
 *
 * ※ 그렇다면, 함수가 일급객체이기 때문에 할 수 있는 것은?
 * - 고차함수를 만들 수 있다
 */

// 콜백함수
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

// 전달된 action은 콜백함수이다.
// 전달될 당시에 함수를 바로 호출해서 반환된 값을 전달하는 것이 아니라
// 함수를 가리키고 있는 함수의 레퍼런스(참조값)가 전달된다.
// 그래서 함수는 고차함수 안에서 필요한 순간에 호출이 나중에 됨(callback)
function calculator(a, b, action) {
  let result = action(a, b);
  console.log(result);
}

// 콜백함수를 매개변수로 전달(호출❌)
calculator(2, 5, add);
calculator(2, 5, multiply);
