<img width="100%" alt="배너" src="https://github.com/user-attachments/assets/dc55024c-1b93-406b-9b69-25b2ac2bd08f" />
</a>
<br/>
<br/>

<br/>
<br/>

# 0. 배포 사이트 
[서비스 링크](https://todays-drip.vercel.app/)
<br/><br/>
(ctrl + 좌클릭시 새 창으로 이동이 됩니다.)


<br/>
<br/>

# 1. Project Overview (프로젝트 개요)
- 프로젝트 이름: 오늘의 드립
- 프로젝트 설명: 매일 갱신되는 이미지를 통해 애드리브 댓글을 남기는 서비스

<br/>
<br/>

# 2. Project Purpose (프로젝트 목적)
<img width="514" alt="Image" src="https://github.com/user-attachments/assets/9c5133a4-e286-43e1-a9d2-fc634cafa49a" /> <br/>
꼬맨틀 (매일 하루 갱신되는 단어 맞추기 사이트) 사이트를 보고 영감이 생겨 제작하게 되었습니다 !<br/>
다솜이 기숙사 룸메이트 웹서비스를 제작할 때 우리 학교 학생들의 범주에만 한정되었는데 이번엔 모든 사람들이 즐겨볼 수 있도록 큰 범위의 서비스를 만들고자 시작하였습니다. <br/>
또한 프로젝트 특성 상 Next.js의 장점인 SSR과 ISR 등을 활용하기 좋은 기회라 생각하여 시작하였습니다.<br/>
<br/>
![screencapture-todays-drip-vercel-app-2025-04-11-16_15_23](https://github.com/user-attachments/assets/59f3a0c8-9607-4fa7-aaa2-e9994485fae5)
<br/>


<br/>
<br/>


# 3. Key Features (주요 기능)
- **오늘의 짤**:
  - 메인 페이지 접속 시 애드리브 주제인 짤이 나타납니다. 매일 오전 9시에 갱신이 됩니다. <br/><br/>
  <img width="1021" alt="image" src="https://github.com/user-attachments/assets/1cfa02a3-91f5-48cb-8fd6-cb606a8742a6" /> <br/>
<br/>
<br/>

- **인기 드립**:
  - 실시간으로 좋아요 많은 순 TOP 3의 댓글을 볼 수 있습니다.<br/><br/>
  <img width="323" alt="image" src="https://github.com/user-attachments/assets/8fe8ea94-66f4-4bfe-b31a-79be6ccabc28" /> <br/>

<br/>
<br/>
 
- **실시간 드립**:
  - 실시간으로 최신순 기준 댓글을 볼 수 있습니다. <br/><br/>
  <img width="505" alt="image" src="https://github.com/user-attachments/assets/d269dae7-6d4c-4b16-b09e-0750595ce394" /> <br/>
<br/><br/>


- **드립 등록 (댓글 등록)**:
  - 비회원 기반으로 닉네임과 비밀번호를 통해 댓글을 등록할 수 있습니다. 이때 비밀번호는 해시처리하여 등록됩니다.<br/><br/>
  <img width="596" alt="image" src="https://github.com/user-attachments/assets/a69367e1-d749-42e3-9906-fe07d245959a" /> <br/>
<br/><br/>
 
- **댓글 수정 / 삭제 (+ 비밀번호 검증)**:
  - 비밀번호 검증 후 댓글을 수정하거나 삭제할 수 있습니다. <br/><br/>
 <img width="599" alt="image" src="https://github.com/user-attachments/assets/b3b734ae-58f2-422b-9f68-298e3f1049bb" /> <br/>
 <img width="598" alt="image" src="https://github.com/user-attachments/assets/4c7f4d25-3e93-48e2-b43f-60fc45d43643" /> <br/>
 <img width="605" alt="image" src="https://github.com/user-attachments/assets/7a0ffffe-ca2a-4a0f-9a94-fc0900de1f93" /> <br/>
<br/><br/>

- **지난 드립왕**:
  - 매일 오전 9시 기준으로 좋아요를 가장 많이 받은 댓글과 그 날의 이미지를 보여줍니다. <br/><br/>
  <img width="933" alt="image" src="https://github.com/user-attachments/assets/c5d273fd-a117-4be9-a437-b7bdbd15b736" />
<br/><br/>



- **이용 안내**:
  - 보다 원활한 서비스 이용을 위한 이용안내 목록입니다. <br/><br/>
  <img width="911" alt="image" src="https://github.com/user-attachments/assets/c2832837-2145-4072-a242-228cd80ce565" /> <br/>
<br/><br/>

- **카카오 공유하기**:
  - 사용자의 이용 유입을 간편하게 확장하기 위해 카카오 공유를 활성화 하였습니다. <br/><br/>
  <img width="408" alt="image" src="https://github.com/user-attachments/assets/26539f97-b52b-4e57-9a32-029fca2e8e74" />  <br/>
<br/><br/>

- **이용 약관 및 개인정보 처리방침**:
  - 원활한 서비스 이용을 위한 이용 약관 및 개인정보 처리방침을 제시하였습니다. <br/><br/>
  <img width="518" alt="image" src="https://github.com/user-attachments/assets/5731160b-6916-4f85-91f4-9b67932ff89e" /> <br/>
  <img width="517" alt="image" src="https://github.com/user-attachments/assets/84e76e53-112d-44e5-bc8c-7950ca5c7937" /> <br/>
<br/>
<br/>

# 3. troubleshooting (트러블 슈팅)
-기술적 관점- <br/>

3-1) 서버 컴포넌트 / 클라이언트 분리 전략 <br/><br/>

1-1) 첫번째 방법, 모든 컴포넌트에 ISR 적용 <br/>
<img width="807" alt="image" src="https://github.com/user-attachments/assets/086c5b65-650b-4f8c-b67f-41f8e2af8466" /> <br/>
<img width="611" alt="image" src="https://github.com/user-attachments/assets/bda2e400-b431-43b8-a295-70867fa3fb0c" /> <br/>
처음에는 단순히 사용자가 빠르게 페이지에 접속하고 불필요한 api 요청 방지를 위해 모든 컴포넌트에 적용하였습니다. <br/>
매일 오전 9시에 새로운 이미지 (오늘의 짤)과 지난 드립왕이 갱신되기 떄문에 update-photo api가 요청이 되면 다시 갱신되게끔 하였습니다. (On-demand ISR) <br/>
실시간 및 인기 드립 같은 경우 (revalidate time을 5초, 댓글 등록, 수정, 삭제시 갱신)도 ISR로 적용하였습니다. <br/>
이러한 방식의 문제점은 5초후 댓글이 갱신되면 오늘의 짤을 불러오는 api도 함께 요청되는 문제가 있었습니다. <br/>

1-2) 두번째 방법, 오늘의 짤 / 지난 드립왕 (ISR 적용), 댓글 1페이지만 ISR 적용, 2페이지 부터는 클라이언트 컴포넌트로 변경 <br/>
<img width="599" alt="image" src="https://github.com/user-attachments/assets/ae15ebaf-19c2-408c-9aa2-57dbfc4f0c2c" /> <br/>
빠른 첫페이지 접속을 위해 댓글 목록 컴포넌트를 SSR, CSR 전용으로 2개로 나누었습니다. <br/>
하지만 이 방시 또한 일정 시간 지난 후 (ISR) 댓글이 갱신되면 오늘의 짤을 불러오는 api도 함께 요청되는 문제가 있었습니다. <br/>

1-3) 세번쨰 방법, 두번째 방법, 오늘의 짤 / 지난 드립왕 (ISR 적용), 댓글 페이지 모두 SSR 적용 <br/>
<img width="818" alt="image" src="https://github.com/user-attachments/assets/6ecfacc4-2bec-4de5-b3ae-948d1bac6adf" /> <br/>
위 두 방법이 의도댄 방법으로 안되어 댓글 컴포넌트 모두 SSR로 적용하였습니다. <br/>
하지만 SSR 특성상 새로운 댓글이나, 좋아요 등을 새로고침을 해야지만 볼 수 있다는 걸 알게 되었습니다. <br/>
실시간으로 댓글을 볼 수 있다는 점에서 UX적으로 불리하다는 생각이 들었습니다. <br/>
 
1-4) 네번째 방법 최종 결정, 오늘의 짤 / 지난 드립왕 (ISR 적용), 댓글 페이지 CSR 적용 (+ tanstack query 캐싱전략) <br/>
<img width="826" alt="image" src="https://github.com/user-attachments/assets/9d67d64f-065f-40a2-9fed-3584efbdeafa" /> <br/>
댓글 컴포넌트를 SSR => CSR로 전환하였습니다. 이유는 댓글은 SEO 보다 실시간성으로 UX를 개선하는데 적합하다고 생각하였습니다. <br/>
오늘의 짤, 지난 드립왕 같은 경우는 On-Demand ISR로 사진이 업데이트 될 때 갱신되게끔 수정하였습니다.  <br/>
이때 vercel의 cron을 적용하였습니다. <br/>
<br/><br/>

결론) Next.js의 꽃인 SSR, ISR을 중점으로 무조건 이 방식의 렌더링을 사용하자! 라는 생각이였습니다. <br/>
하지만 무조건적이 아닌 사용자의 입장을 고려하여 적절히 SSR, CSR을 나누어서 렌더링하는게 중요하다는 걸 알게 되었습니다.  <br/>
<br/>
2. 렌더링 최적화 <br/>
- input의 컨텐츠들을 state로 관리하다 보니 필요없는 리렌더링이 이루어지는 걸 볼 수 있습니다. <br/>
![1-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/5e28fc28-18d1-4efb-9070-95a3341d3170) <br/>
- useRef를 이용하여 렌더링을 최적화 하였습니다. <br/>
![2-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/02c156c3-64dd-4e89-a7b5-5eb25bf79838) <br/>
<br/><br/>


-서비스 관점- <br/>
중복 좋아요 방지를 위한 전략을 어떻게 세우면 좋을까? <br/>
1. ip 수집 <br/>
   비회원 특성상 좋아요 방지를 위해 ip를 해쉬화하여 db에 저장하는 전략을 세웠습니다. <br/>
   하지만 댓글 등록시 / 페이지 접속 시 ip를 수집한다는 점을 동의 받아야 한다는 점입니다. <br/>
   이 부분을 꺼려하는 사용자가 있을 것이고 제 1목표는 사용자의 참여도를 높여야 한다는 점과 거리가 멀었습니다.  <br/>

2. 쿠키로 저장 (최종 결정) <br/>
   수집 동의를 안받고 사용자가 바로 댓글을 등록할 수 있도록 확률을 높이고자 쿠키로 결정하였습니다. <br/>
   물론 좋아요를 조작할 수 있지만 사용자의 참여도를 최우선으로 제작하여 이 후 악용 문제가 생긴다면 IP 수집 또는 회원제를 도입해 회원만 좋아요를 누를 수 있게끔 하고자 하였습니다. <br/>
<br/>
   참고한 부분) <br/>
   유튜브 좋아요 방법 (좋아요는 회원제) <br/>
   ![스크린샷 2025-04-11 173618](https://github.com/user-attachments/assets/634f6365-4656-40a8-a189-d50d21a69bd1) <br/>
 
<br/>
<br/>

# 4. API Specification (API 명세서)

| **번호** | **API 설명**                | **URL**                                          | **Method** | **비고** |
|----------|-----------------------------|--------------------------------------------------|------------|----------|
| 4.1      | 오늘의 짤 조회               | `/api/photo`                                     | `GET`      |          |
| 4.2      | 댓글 목록 조회 (인기 + 최신) | `/api/comments?photoId={id}&page={number}`       | `GET`      | `revalidate: 3초`, SSR 적용 |
| 4.3      | 댓글 등록                    | `/api/comments`                                  | `POST`     | `photo_id`, `nickname`, `password_hash`, `content` 포함 |
| 4.4      | 댓글 수정                    | `/api/comments/:id`                              | `PATCH`    | `content` 포함 |
| 4.5      | 댓글 삭제                    | `/api/comments/:id`                              | `DELETE`   |          |
| 4.6      | 댓글 비밀번호 검증           | `/api/comments/:id/verify`                       | `POST`     | `password` 포함 |
| 4.7      | 댓글 좋아요 토글             | `/api/comments/:id/like`                         | `POST`     | 쿠키 기반 중복 방지, `credentials: include` |
| 4.8      | 지난 드립왕 (Top 10) 조회     | `/api/history`                                   | `GET`      |          |
| 4.9      | 오늘의 짤 갱신하기     | `/api/update-photo`                                   | `GET`      |          |




# 5. Technology Stack (기술 스택)

| 기술 | 아이콘 |
|------------------|------------------|
| HTML5 | <img src="https://github.com/user-attachments/assets/2e122e74-a28b-4ce7-aff6-382959216d31" alt="HTML5" width="100"> |
| Tailwind CSS | <img src="https://github.com/user-attachments/assets/650e9e6c-783d-474d-aadb-170ccbb57b3d" alt="Tailwind CSS" width="100"> |
| TypeScript | <img src="https://github.com/user-attachments/assets/ccf7fc4d-c957-47f0-8f54-46a610e93087" alt="TypeScript" width="100"> |
| Next.js | <img src="https://github.com/user-attachments/assets/d9239121-0db8-462d-8069-ad5456339099" alt="Next.js" width="100"> |
| React Query | <img src="https://github.com/user-attachments/assets/0258d85f-b97d-44a6-bda8-e4af267ae8ea" alt="React Query" width="100"> |
| Supabase | <img src="https://github.com/user-attachments/assets/c810e830-58f5-4e1c-b7b6-3e2506b06f11" alt="Supabase" width="100"> |




<br/>
