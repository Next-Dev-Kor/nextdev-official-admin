# 프로젝트명

> NextDev Admin

## 🧩 기술 스택

- Next15
- TypeScript
- ESLint + Prettier
- React Query v5
- Tailwind v4
- Zustand
- Framer-motion
- React Hook Form + zod

## 🌿 Git 브랜치 전략

![Git 전략](./docs/git-strategy.png)

- `main`: **최종 배포 브랜치**  
  항상 안정적인 상태를 유지하며, 릴리즈된 코드만 포함
- `develop`: **기능 개발 통합 브랜치**  
  여러 기능 브랜치를 통합하고 테스트하는 용도
- `release/`: **릴리즈 준비 브랜치**  
  QA 및 배포 준비 작업을 거쳐 `main`으로 병합
- `feature/`: **기능 개발 브랜치**  
  예: `feature/login`, `feature/dashboard`
- `hotfix/`: **긴급 수정 브랜치**  
  배포 후 긴급한 수정 사항을 처리

> 브랜치 흐름 예시:  
> `feature → develop → release → main`  
> `hotfix → main → develop`

## 📦 커밋 컨벤션

[ TYPE ]: 커밋 내용

### ✅ 타입 종류

- `[ FEAT ]`: 새로운 기능 추가
- `[ FIX ]`: 버그 수정
- `[ DOCS ]`: 문서 수정
- `[ STYLE ]`: 코드 포맷팅, 세미콜론 누락 등 (기능 변화 없음)
- `[ REFACTOR ]`: 코드 리팩토링
- `[ TEST ]`: 테스트 코드 추가 또는 수정
- `[ CHORE ]`: 빌드, 설정, 패키지 변경 등

### 📝 커밋 메시지 예시

- `[ FEAT ]`: 소셜 로그인 기능 구현
- `[ FIX ]`: 로그인 오류 수정
- `[ CHORE ]`: 설정 변경
