## React-테스트 코드 인강따라하기

### jest-dom(리엑트에서 사용하는 dom test 기반의 솔루션)

[link](https://www.npmjs.com/package/@testing-library/jest-dom)

## eslint 설정

```
{
"plugins": ["testing-library", "jest-dom"],
"extends": [
  "react-app",
  "react-app/jest",
  "plugin:testing-library/react",
  "plugin:jest-dom/recommended"
]
}
```

- package eslint config 는 지워줌
- 추가되는 플러그 인은 2개(testing-library,jest-dom)
  - 플러그인 배열에 넣고 extends 에 추가 해주면 끝

## query

[찾는 메서드 우선순위](https://testing-library.com/docs/queries/about/#priority)

- 요소 찾는 기능을 함

## fireEvent, userFire

- fireEvent : 간단하게 클릭등의 이벤트를 가상으로 부여
- userEvent : 실제 유저가 사용하는 것 처럼 타입이나 속성에 따라 포커스 등의 속성이 덧씌워지며 분기도 잘 되어 있음(추천)
