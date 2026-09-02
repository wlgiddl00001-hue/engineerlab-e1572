"use client";
import {useState} from "react";

export default function Coupon({compact=false}:{compact?:boolean}){
 const [copied,setCopied]=useState(false);
 const copy=async()=>{await navigator.clipboard.writeText("e1572");setCopied(true);setTimeout(()=>setCopied(false),1800)};
 return <div className={compact?"coupon compact":"coupon"}>
  <span>엔지니어랩 수강 할인코드</span>
  <strong>e1572</strong>
  <div className="couponActions">
   <button onClick={copy}>{copied?"e1572 복사 완료":"e1572 코드 복사"}</button>
   <a className="outLink" href={process.env.NEXT_PUBLIC_ENGINEERLAB_URL||"https://www.engineerlab.co.kr"} target="_blank" rel="sponsored nofollow noopener">e1572 확인 후 수강하기</a>
  </div>
 </div>
}
