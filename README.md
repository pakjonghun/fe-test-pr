## React-테스트 코드 인강따라하기

### jest-dom(리엑트에서 사용하는 dom test 기반의 솔루션)

[link](https://www.npmjs.com/package/@testing-library/jest-dom)

- eslint 설정
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
