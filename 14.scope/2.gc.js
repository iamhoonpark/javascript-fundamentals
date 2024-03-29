/**
 * 자바스크립트 엔진 백그라운드 프로세스
 * · Gargabe Collection(쓰레기 수집)의 원리
 *   - 자바스크립트 엔진에서 자체적으로 제공해주는 Gargabe Collector(이하 GC)는 백그라운드에서 동작
 *     애플리케이션이 바쁠 때는 동작하고 있지 않다가 한가해질 때 메모리를 감시하고 확인하면서 아무도 참조하고 있지 않다면 메모리에서 소멸
 *     자동으로 관리하기 때문에 신경쓸 일은 없지만, GC가 하는 일은 당연히 CPU가 수행하기 때문에 잦은 수집으로 리소스를 낭비하면 안됨
 *     따라서, 너무 GC를 믿지 말고 불필요한 메모리를 할당하거나 재할당하는 일을 지양해야 함
 *  ※ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management
 */

// 글로벌 변수는 앱이 종료될때까지 계속 메모리에 유지됨
// 이름충돌과 메모리 측면에서 좋지 않기 때문에 지양
// 그래서 가급적 변수는 필요한 블록 부분에서만 선언하여 사용
const global = 1;
{
  // 블록에 진입하면서 메모리에 발생
  // 블록이 끝나면 (GC에 의해)메모리가 자동으로 소멸됨
  const local = 1;
}

function print() {
  // 함수 내부에서도 블럭안에서 필요한 경우에는
  // 필요한 곳! 블럭 안에서 변수를 선언하고 사용해야 함
  if (true) {
    let temp = 0;
  }
}
