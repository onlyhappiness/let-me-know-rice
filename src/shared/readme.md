# shared of FSD

`shared` 모듈은 공통으로 사용되는 코드를 포함합니다.

이 모듈은 특정 비즈니스 로직에 종속되지 않은 재사용 가능한 컴포넌트와 유틸리티가 포함되어 있습니다.

UI 키트, axios 설정, 애플리케이션 설정, 비즈니스 로직에 묶이지 않은 헬퍼 등이 포함됩니다.

# Layer priorities

1. apps
2. pages
3. widgets
4. features
5. entities
6. shared ✅

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
