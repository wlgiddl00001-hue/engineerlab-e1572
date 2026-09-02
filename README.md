# 엔지니어랩 SEO 사이트

할인코드: `e1572`

## 실행
```bash
npm install
npm run dev
```

## 배포 전 필수 설정
Vercel 환경변수 `NEXT_PUBLIC_SITE_URL`에 실제 도메인을 입력하세요.

## 검색엔진 등록
배포 후 `/sitemap.xml`, `/robots.txt`를 확인하고 네이버 서치어드바이저와 Google Search Console에 등록합니다.

Vercel 환경변수 `NEXT_PUBLIC_ENGINEERLAB_URL`에는 실제 엔지니어랩 제휴/가입 이동 URL을 넣으세요. 미설정 시 `https://www.engineerlab.co.kr`로 이동합니다.
