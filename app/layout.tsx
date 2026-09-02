import type { Metadata } from "next";
import "./globals.css";

const SITE_URL="https://engineerlab-e1572.vercel.app";

export const metadata: Metadata={
 metadataBase:new URL(SITE_URL),
 title:{default:"엔지니어랩 할인코드 e1572 | 전기기사·소방설비기사 수강 가이드",template:"%s"},
 description:"엔지니어랩 전기기사·전기산업기사·전기공사기사·소방설비기사 강의, 교수별 특징, CBT와 공부법, 할인코드 e1572 적용 정보를 정리한 수강 가이드입니다.",
 alternates:{canonical:"/"},
 robots:{index:true,follow:true},
 openGraph:{type:"website",locale:"ko_KR",siteName:"엔지니어랩 수강 가이드",url:SITE_URL,title:"엔지니어랩 할인코드 e1572 | 수강 가이드",description:"전기·소방 자격증 강의 정보와 교수별 특징, 할인코드 e1572 적용 방법을 확인하세요."}
};

export default function RootLayout({children}:{children:React.ReactNode}){
 return <html lang="ko"><body>
  <header className="header"><a href="/" className="brand">엔지니어랩 수강 가이드</a><nav><a href="/electric-engineer">전기기사</a><a href="/fire-equipment-engineer">소방설비기사</a><a href="/engineerlab-review">수강후기</a><a href="/engineerlab-discount-code">할인코드 e1572</a></nav></header>
  {children}
  <footer><b>엔지니어랩 수강 가이드</b><p>자격증 강의와 시험 준비 정보를 정리하는 정보형 사이트입니다. 강좌 가격, 할인 적용 여부와 이벤트 조건은 결제 전 공식 판매 페이지에서 최종 확인하세요.</p></footer>
 </body></html>
}
