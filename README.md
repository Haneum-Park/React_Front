# 리액트 템플릿
- React `-v 17.0.1`
- Node `-v 14.15.4`
- Yarn `-v 1.22.10`

`웹팩과 바벨 Eslint를 사용한 리액트 템플릿`

### HTML,JS,CSS Framework
- bootstrap `-v 4.6.0`
- react-bootstrap


### 적용된 의존성 라이브러리
- @babel/core: ^7.12.10
- @babel/preset-env: ^7.12.11
- @babel/preset-react: ^7.12.10
  - babel-loader를 실행하기 위해서 세 개의 라이브러리가 필수
- babel-loader: ^8.2.2
- eslint: ^7.18.0
- eslint-loader: ^4.0.2
- eslint-config-airbnb: ^18.2.1
- babel-eslint: ^10.1.0
- file-loader: ^6.2.0
- url-loader: ^4.1.1
  - 이미지 파일을 data url로 바꿔줌
- html-webpack-plugin: ^4.5.1
- node-sass: ^5.0.0
- sass-loader: ^10.1.1
- css-loader: ^5.0.1
- style-loader: ^2.0.0
  - 리액트 파일 내에서도 style 요소를 적용시키기 위한 라이브러리
- react-hot-loader: ^4.13.0
  - 빠른 로드
- webpack: ^5.16.0
- webpack-cli: ^4.4.0
- webpack-dev-server: ^3.11.2
  - 웹팩으로 빠른 실행
`각 의존성 라이브러리는 버전이 중요합니다. 버전을 맞춰야 컴파일에러가 나지 않습니다.`


### Start
- `yarn dev`