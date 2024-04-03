# fe-eventloop

주어진 비동기 코드를 해석하고, 비동기 코드가 콜스택 , 콜백큐, 이벤트 루프에서 어떻게 동작 하는지 애니메이션으로 구현한다.

- 주어진 코드를 분석, 분석된 코드 중에 콜백함수를 추출, 시각적으로 동작하는 과정을 표현

---

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

---

# 🎉🎉Let's mime Time

## 🎯미션 요구사항

### 🚩기능요구사항

- [x] 튜토리얼 보여주기
- [ ] 이미 구현된 애니메이션의 동작을 다른방식으로 변경해서 구현
- [x] 동작 취소
- [x] 기존 기능 요구사항 수정

### 🗒️프로그래밍 요구사항

- [ ] 테스트코드 구현(코드의 일부분을 선택)
- [x] 버그수정
- [x] 리팩토링
- [x] 코드 순서 바껴도 처리 / promise, catch의 콜백도 처리되도록 애니메이션 기능을 추가.

### UI 개선

- [x] 1가지 코드만 분석 가능하니 1가지 코드를 value로 넣어두기

---

## 📅이번주 목표

- 1. 분석 후 리펙토링
- 2. 테스트 코드 작성
- 3. 애니메이션 rAF방식으로 변경
- 4. 기능 추가 : 동작취소 / 튜토리얼 추가

---

## 📝메모

#### 유지보수

- 버튼은 늘어날 경우를 대비해서 wrap으로 감싸고 이벤트 위임을 시키는게 좋다.
- for in 배열도 사용은 할 수 있는데(객체니깐 하지만 순서는 보장 안된다고 하지만) 일단 크롬에서는 순서대로 방문한다...(js스펙이 아니기 때문에 이건 브라우저마다 다를 수 있음)
