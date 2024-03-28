# fe-eventloop
주어진 비동기 코드를 해석하고, 비동기 코드가 콜스택 , 콜백큐, 이벤트 루프에서 어떻게 동작 하는지 애니메이션으로 구현한다.

- 주어진 코드를 분석, 분석된 코드 중에 콜백함수를 추출, 시각적으로 동작하는 과정을 표현 
---------------
- 코드 분석
  - 코드를 분석할때는 AST 파서 라이브러리를 사용할 수 있다.
  - 코드의 패턴을 정해두고, 정규표현식을 활용하는 것도 가능하다.

- 애니메이션
  - 브라우저의 다양한 API를 찾아서 활용한다.
  - 사용한 방법이 성능상 어떠한 이로운 점이 있는지 확인하고 사용해야 한다.

- 구현
  - 객체 지향프로그래밍을 기본으로 구현한다.
  - ES Classes 문법을 활용해서 Class를 생성한다.
  - 한 가지 Class는 ES Classes말고, prototype 키워드를 직접 사용해서 객체를 생성한다.
  - 그외 객체를 생성하는 다양한 방법을 사용하는 것을 권장한다.
  
## checkbox
- [ ] 
## Description

