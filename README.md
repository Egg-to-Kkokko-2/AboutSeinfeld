# About_Seinfeld

미국 NBC에서 1989년부터 1998년까지 방영한 유명 시트콤 [사인필드] 정보 페이지

---

## 개발 기록

https://www.notion.so/AboutSeinFeld-b099057e43e44614a44ca901b5298563

## 📁 디렉토리 구조

```
|── Data //사인 필드 데이터 크롤링 자료
|── locales //다국어(영어/한글) 지원용 번역 자료
|── src
│   ├── assets //json 변환 크롤링 자료
│   ├── components //공통적으로 적용되는 컴포넌트
│   ├── container //영역 별 페이지 관리
│   │   ├── Header
│   │   ├── Intro
│   │   ├── Character
|   |   ├── Trailer
│   ├── pages //404/루트 페이지, 컨테이너 합치는 곳
|   ├── hooks //Custom Hook
|   ├── images //이미지 관리
```

## ✅ 커밋 규칙

```
feat : 새로운 기능에 대한 커밋
fix : 에러 해결에 대한 커밋
style : css 스타일링 관련 커밋
refactor : 코드 리팩토링에 대한 커밋
test : 테스트 코드 수정에 대한 커밋
build : 빌드 관련 파일 수정에 대한 커밋
ci : CI 관련 설정 수정에 대한 커밋
docs : 리드미 문서 수정에 대한 커밋
chore : 쓸모 없는 파일 제거 등 그 외의 자잘한 커밋
env: pacakge 설치 관련 커밋
```

## 🛠️ 스택

gatsby / typescript / emotion
