# Velog 페이지 만들기

## Assgin.1

회원가입 UI 만들기
<br />
<div style="text-align: center;">
  <img src="./screenShot/assign1.png" width="500" height="450" />
</div>


## Assgin.2

피드 페이지 UI 만들기
<br />
<div style="text-align: center;">
  <img src="./screenShot/assign2.png" width="500" height="450" />
</div>


### `기능`

UI 변수화 -> hook 사용

좋아요 기능 -> useState를 이용한 handleClick 함수 구현

피드 페이지 컴포넌트화 -> props 이용, EachPage.js에 default값 구현

### `문제점`

1. Head_btn 태그에 hover 속성이 적용되지 않음.
2. 이미지들을 인터넷에서 가져옴 => figma에서 export 할 수 있음(해결)
3. 드롭다운 어떻게 하는지 모르겠음


## Assign.3

DetailPage UI 만들기
<br />
<div style="text-align: center;">
  <img src="./screenShot/assign3.png" width="500" height="450" />
</div>


### `기능`

Router를 이용해 각 페이지간 경로화

각 영역을 클릭시 설정한 경로로 이동 -> velog 아이콘, EachPage 영역

useNavigate를 이용해 페이지 간 연결

### `문제점`

1. 사이드바가 페이지 스크롤이 되도 고정된 위치에 있게 하기 (구현x)
2. notion HW 공지에 있는 ButtonList를 어디에 쓰는지 용도를 모르겠음  


## Assign.4

EditPage UI 만들기
<br />
<div style="text-align: center;">
  <img src="./screenShot/assign4.png" width="500" height="450" />
</div>


### `기능`

recoilstate를 이용하여 inputText 태그에 변경된 내용 유지하게 함

src/Atom.js 파일을 만들어 기본 key와 default 값을 설정해줌

MyComponent.js 파일을 별도로 컴포넌트화 하여 이전 styled-component 재사용 
