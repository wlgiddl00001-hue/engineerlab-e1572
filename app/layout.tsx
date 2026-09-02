import type { Metadata } from "next";
import "./globals.css";

const SITE_URL="https://engineerlab-e1572.vercel.app";

export const metadata: Metadata={
 metadataBase:new URL(SITE_URL),
 title:{default:"엔지니어랩 할인코드 e1572 | 6만원 할인·전기기사 인강 가이드",template:"%s"},
 description:"엔지니어랩 할인코드 e1572로 6만원 할인 혜택을 확인하고 전기기사·전기산업기사·전기공사기사·소방설비기사 강의, 교수별 특징, CBT와 공부법까지 비교하세요.",
 alternates:{canonical:"/"},
 robots:{index:true,follow:true},
 openGraph:{type:"website",locale:"ko_KR",siteName:"엔지니어랩 수강 가이드",url:SITE_URL,title:"엔지니어랩 할인코드 e1572 | 6만원 할인 가이드",description:"엔지니어랩 e1572 6만원 할인 정보와 전기·소방 자격증 인강 선택 기준을 한 번에 확인하세요."}
};

export default function RootLayout({children}:{children:React.ReactNode}){
 return <html lang="ko"><body>
  <header className="header"><a href="/" className="brand">엔지니어랩 수강 가이드</a><nav><a href="/electric-engineer">전기기사</a><a href="/fire-equipment-engineer">소방설비기사</a><a href="/engineerlab-review">수강후기</a><a href="/engineerlab-discount-code">e1572 6만원 할인</a></nav></header>
  {children}
  <footer><b>엔지니어랩 수강 가이드</b><p>자격증 강의와 시험 준비 정보를 정리하는 정보형 사이트입니다. 할인코드 e1572의 6만원 혜택은 수강신청 단계에서 확인하고, 강좌 가격·적용 대상·이벤트 조건은 공식 결제 화면의 최종 조건을 기준으로 확인하세요.</p></footer>
 </body></html>
}
