# React-Study

React에 대해 공부해보고 그 내용을 기록하는 공간

<details>
<summary> Commit Rule & Commit message structure</summary>

---
### Commit Rule
1. 제목과 본문을 빈 행으로 구분한다
2. 제목을 50글자 내로 제한
3. 제목 첫 글자는 대문자로 작성
4. 제목 끝에 마침표 넣지 않기
5. 제목은 명령문으로 사용하며 과거형을 사용하지 않는다
6. 본문의 각 행은 72글자 내로 제한
7. 어떻게 보다는 무엇과 왜를 설명한다

---
### Commit message structure
Git 메시지 컨벤션
커밋 메세지는 아래와 같은 모양으로 생성한다.

```
접두사 제목

내용

이슈 트래커
```

**접두사 리스트 : [ ] 는 제외하고 사용**
```
설치 : [Install] 저장소를 생성하고 최초 파일 업로드시
생성 : [Create] 파일이나 기능의 추가
변경 : [Modify] 파일이나 기능의 수정
삭제 : [Delete] 파일이나 기능의 삭제
버그 수정 : [Fix] 버그 이슈에 대한 처리
```
**이슈 트래커**

작은 작업이라도 반드시 이슈를 생성하고 생성된 이슈 트래커를 커밋 메시지에 포함시킨다.

---
### Gitmoji를 활용한 Commit 작성법

Gitmoji를 commit 메시지 앞에 추가하면 커밋의 성격을 한눈에 파악할 수 있다. 각 커밋 타입에 어울리는 emoji를 사용하여 메시지에 색다른 가독성과 직관성을 부여할 수 있다.

예시로 자주 사용하는 gitmoji 목록은 다음과 같다:
- **feat (새로운 기능 추가)**: `✨`
- **fix (버그 수정)**: `🐛`
- **docs (문서 수정)**: `📝`
- **style (코드 스타일, 포맷 변경)**: `💄`
- **refactor (코드 리팩토링)**: `♻️`
- **test (테스트 코드 추가/수정)**: `✅`
- **chore (기타 잡다한 수정)**: `🔧`

---
### Reference

* 헤더는 필수이며, gitmoji(gitmoji), 범위(scope), 본문(body), 바닥글(footer)은 선택
```
<gitmoji> <type>(<scope>): <subject>          -- 헤더

<body>                              -- 본문

<footer>                            -- 바닥글
```

* `<type>`은 해당 Commit의 성격을 나타내며 다음 중 하나여야 한다.

```
feat : 새로운 기능에 대한 커밋
fix : 버그 수정에 대한 커밋
build : 빌드 관련 파일 수정에 대한 커밋
chore : 그 외 자잘한 수정에 대한 커밋
ci : CI관련 설정 수정에 대한 커밋
docs : 문서 수정에 대한 커밋
style : 코드 스타일 혹은 포맷 등에 관한 커밋
refactor :  코드 리팩토링에 대한 커밋
test : 테스트 코드 수정에 대한 커밋
```

* `<subject>`는 Commit의 제목을 나타내며 50자를 넘기지 않음.  
  대문자로 시작하며 마침표 없이 작성.  
  과거형을 사용하지 않음.


* `<body>`는 본문으로 헤더로 표현할 수 없는 상세한 내용을 기록.  
  헤더로 표현이 가능하다면 생략 가능


* `<footer>`는 바닥글로 어떤 이슈에서 왔는지 같은 참조 정보들을 추가하는 용도로 사용

[[Git] 좋은 커밋 메세지 작성하기위한 규칙들](https://beomseok95.tistory.com/328)

### 예시
```
✨ feat(UI): Add responsive navbar

Updated the navigation bar to support responsive design.

ISSUE: #123
```

---

</details>

<details>
<summary> Tutorial-tictactoe </summary>

---
### Tic-Tac-Toe Game

[React 공식사이트 실용적인 자습서](https://ko.reactjs.org/tutorial/tutorial.html)

자습서를 보며 react의 기본 문법과 사용 방법을 학습

---
</details>

<details>
<summary> Stick-Study </summary>

---
### Stick Study

react study in Stick

---
</details>