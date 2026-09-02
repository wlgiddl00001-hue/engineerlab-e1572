"use client";
import {useState} from "react";

export default function Coupon({compact=false}:{compact?:boolean}){
 const [copied,setCopied]=useState(false);
 const copy=async()=>{await navigator.clipboard.writeText("e1572");setCopied(true);setTimeout(()=>setCopied(false),1800)};
 return <div className={compact?"coupon compact":"coupon"}>
  <span>엔지니어랩 수강 할인코드</span>
  <div className="discountAmount">총 <b>60,000원 할인</b></div>
  <strong>e1572</strong>
  <small>회원가입·수강신청 단계에서 코드를 입력하고 6만원 할인 적용 여부를 최종 결제 화면에서 확인하세요.</small>
  <div className="couponActions">
   <button onClick={copy}>{copied?"e1572 복사 완료":"e1572 코드 복사"}</button>
   <a className="outLink" href={process.env.NEXT_PUBLIC_ENGINEERLAB_URL||"https://www.engineerlab.co.kr"} target="_blank" rel="sponsored nofollow noopener">6만원 할인 확인하기</a>
  </div>
 </div>
}
