# app of FSD

`app` 모듈은 애플리케이션의 초기화 및 설정 관련 코드를 포함합니다.

이 모듈은 애플리케이션의 전반적인 설정, 라우팅, 상태 관리, 테마 설정 등을 담당합니다.

# Layer priorities

1. apps ✅
2. pages
3. widgets
4. features
5. entities
6. shared

# Reference

- [FSD official docs](https://feature-sliced.design/docs)
- [ko tech article](https://emewjin.github.io/feature-sliced-design/)
- [nukeapp](https://github.com/noveogroup-amorgunov/nukeapp)

---

- app: 애플리케이션의 초기화 및 설정 관련 코드
- pages: 페이지 단위의 코드
- widgets: 페이지에 사용되는 독립적인 UI 컴포넌트
- features: 특정 기능 단위의 코드
- entities: 도메인 엔티티 관련 코드
- shared: 공통으로 사용되는 코드 (유틸리티, 컴포넌트 등)